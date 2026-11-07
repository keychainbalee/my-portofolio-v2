"use client";

import React, { useEffect, useRef } from "react";

export interface DotGridProps {
  dotColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  orbitSpeed?: number;
  impactRadius?: number;
  scaleOnHover?: number;
  enableRevolve?: boolean;
  style?: React.CSSProperties;
  className?: string;
  width?: string | number;
  height?: string | number;
}

interface Dot {
  bx: number;
  by: number;
  inclination: number;
  ascension: number;
  phase: number;
  speedMult: number;
}

function smoothstep(t: number): number {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

function resolveVar(raw: string, el: HTMLElement | null): string {
  const s = raw.trim();
  if (!s.startsWith("var(")) return s;
  const inner = s.slice(4, -1).trim();
  const commaIdx = inner.indexOf(",");
  const varName = (commaIdx !== -1 ? inner.slice(0, commaIdx) : inner).trim();
  const fallback = commaIdx !== -1 ? inner.slice(commaIdx + 1).trim() : "";
  try {
    if (el) {
      const resolved = getComputedStyle(el).getPropertyValue(varName).trim();
      if (resolved) return resolved;
    }
  } catch (_) {}
  if (fallback) return resolveVar(fallback, el);
  return "#888888";
}

function parseColor(raw: string, el: HTMLElement | null): { r: number; g: number; b: number } {
  try {
    const color = resolveVar(raw, el);
    if (color.startsWith("rgb")) {
      const m = color.match(/[\d.]+/g) || [];
      return {
        r: Number(m[0]) || 0,
        g: Number(m[1]) || 0,
        b: Number(m[2]) || 0,
      };
    }
    let h = color.replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h.slice(0, 6), 16);
    if (!isNaN(n)) {
      return {
        r: (n >> 16) & 255,
        g: (n >> 8) & 255,
        b: n & 255,
      };
    }
  } catch (_) {}
  return { r: 99, g: 102, b: 241 }; // Default #6366f1 (Indigo)
}

export default function DotGridBackground({
  dotColor = "#6366f1",
  dotSize = 3,
  dotSpacing = 28,
  orbitSpeed = 1.5,
  impactRadius = 100,
  scaleOnHover = 1.8,
  enableRevolve = true,
  style,
  className,
  width = "100%",
  height = "100%",
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cfgRef = useRef({
    dotColor,
    dotSize,
    dotSpacing,
    orbitSpeed,
    impactRadius,
    scaleOnHover,
    enableRevolve,
  });

  cfgRef.current = {
    dotColor,
    dotSize,
    dotSpacing,
    orbitSpeed,
    impactRadius,
    scaleOnHover,
    enableRevolve,
  };

  const dotsRef = useRef<Dot[]>([]);
  const spacingSnapRef = useRef(dotSpacing);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let W = 0;
    let H = 0;
    const mouse = { x: -9999, y: -9999 };
    let hovering = false;
    let leaveTs = 0;
    let prevTs = 0;
    let raf = 0;
    let globalAngle = 0;

    function buildDots() {
      const sp = cfgRef.current.dotSpacing;
      spacingSnapRef.current = sp;
      dotsRef.current = [];
      const cols = Math.ceil(W / sp) + 2;
      const rows = Math.ceil(H / sp) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dotsRef.current.push({
            bx: c * sp,
            by: r * sp,
            inclination: Math.random() * Math.PI,
            ascension: Math.random() * Math.PI * 2,
            phase: Math.random() * Math.PI * 2,
            speedMult: 0.7 + Math.random() * 0.6,
          });
        }
      }
    }

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      W = rect.width || window.innerWidth;
      H = rect.height || window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      hovering = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      hovering = false;
      leaveTs = performance.now();
    };

    // Track mouse on window so background effect responds across entire viewport
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    function loop(ts: number) {
      raf = requestAnimationFrame(loop);
      if (!ctx) return;

      const dt = Math.min((ts - (prevTs || ts)) / 1000, 0.05);
      prevTs = ts;

      const cfg = cfgRef.current;
      if (spacingSnapRef.current !== cfg.dotSpacing) {
        buildDots();
      }

      globalAngle += cfg.orbitSpeed * dt;
      ctx.clearRect(0, 0, W, H);

      const rgb = parseColor(cfg.dotColor, canvas);
      const mx = mouse.x;
      const my = mouse.y;
      const timeSinceLeave = hovering ? 0 : Math.max(0, ts - leaveTs) / 1000;
      const decay = hovering ? 1 : smoothstep(Math.max(0, 1 - timeSinceLeave * 1.5));

      for (let i = 0; i < dotsRef.current.length; i++) {
        const d = dotsRef.current[i];
        const dx = d.bx - mx;
        const dy = d.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = dist < cfg.impactRadius && dist > 0;

        let x = d.bx;
        let y = d.by;
        let scale = 1;
        let alpha = 0.3;

        if (inRange) {
          const t = dist / cfg.impactRadius;
          const inf = smoothstep(1 - t) * decay;

          if (cfg.enableRevolve) {
            const orbitR = (1 - t) * cfg.dotSpacing * 0.7 * inf;
            const theta = globalAngle * d.speedMult + d.phase;
            const cosA = Math.cos(d.ascension);
            const sinA = Math.sin(d.ascension);
            const cosI = Math.cos(d.inclination);
            const sinI = Math.sin(d.inclination);
            const lx = Math.cos(theta);
            const ly = Math.sin(theta) * cosI;
            const lz = Math.sin(theta) * sinI;

            const ox = (lx * cosA - ly * sinA) * orbitR;
            const oy = (lx * sinA + ly * cosA) * orbitR;
            x = d.bx + ox;
            y = d.by + oy;

            const depthScale = 0.75 + 0.25 * ((lz + 1) * 0.5);
            scale = (1 + (cfg.scaleOnHover - 1) * inf) * depthScale;
            alpha = (0.3 + 0.7 * inf) * depthScale;
          } else {
            scale = 1 + (cfg.scaleOnHover - 1) * inf;
            alpha = 0.3 + 0.7 * inf;
          }
        }

        const r = (cfg.dotSize / 2) * scale;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
        ctx.fill();
      }
    }

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        width,
        height,
        ...style,
      }}
    />
  );
}

export { DotGridBackground, DotGridBackground as Dot_Grid_BG };
