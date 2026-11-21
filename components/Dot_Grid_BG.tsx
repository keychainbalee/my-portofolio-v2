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

interface RGB {
  r: number;
  g: number;
  b: number;
}

const TWO_PI = Math.PI * 2;

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

function parseColor(raw: string, el: HTMLElement | null): RGB {
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
  const rgbRef = useRef<RGB>({ r: 99, g: 102, b: 241 });
  const redrawRef = useRef<(() => void) | null>(null);

  // Re-cache color & redraw static frame when visual props change (e.g., Light/Dark toggle)
  useEffect(() => {
    rgbRef.current = parseColor(dotColor, canvasRef.current);
    redrawRef.current?.();
  }, [dotColor, dotSize, dotSpacing, impactRadius, scaleOnHover, enableRevolve]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isStaticMode =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const mouse = { x: -9999, y: -9999 };
    let hovering = false;
    let leaveTs = 0;
    let prevTs = 0;
    let raf = 0;
    let globalAngle = 0;
    let cachedRect = canvas.getBoundingClientRect();

    rgbRef.current = parseColor(cfgRef.current.dotColor, canvas);

    function buildDots() {
      const sp = cfgRef.current.dotSpacing;
      spacingSnapRef.current = sp;
      const dots: Dot[] = [];
      const cols = Math.ceil(W / sp) + 2;
      const rows = Math.ceil(H / sp) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            bx: c * sp,
            by: r * sp,
            inclination: Math.random() * Math.PI,
            ascension: Math.random() * TWO_PI,
            phase: Math.random() * TWO_PI,
            speedMult: 0.7 + Math.random() * 0.6,
          });
        }
      }
      dotsRef.current = dots;
    }

    function renderFrame(decay: number) {
      if (!ctx) return;
      const cfg = cfgRef.current;
      if (spacingSnapRef.current !== cfg.dotSpacing) {
        buildDots();
      }

      ctx.clearRect(0, 0, W, H);

      const rgb = rgbRef.current;
      const baseR = cfg.dotSize / 2;
      const dots = dotsRef.current;
      const hasInteractive = !isStaticMode && decay > 0 && mouse.x > -9000;
      const mx = mouse.x;
      const my = mouse.y;
      const impactR = cfg.impactRadius;
      const impactRSq = impactR * impactR;

      // Batch all idle dots into a single canvas path + single fill call
      const activeDots: { d: Dot; dist: number }[] = [];
      ctx.beginPath();
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        if (hasInteractive) {
          const dx = d.bx - mx;
          const dy = d.by - my;
          const distSq = dx * dx + dy * dy;
          if (distSq < impactRSq && distSq > 0) {
            activeDots.push({ d, dist: Math.sqrt(distSq) });
            continue;
          }
        }
        ctx.moveTo(d.bx + baseR, d.by);
        ctx.arc(d.bx, d.by, baseR, 0, TWO_PI);
      }
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.3)`;
      ctx.fill();

      // Draw only the dots within impactRadius individually
      for (let i = 0; i < activeDots.length; i++) {
        const { d, dist } = activeDots[i];
        const t = dist / impactR;
        const inf = smoothstep(1 - t) * decay;

        let x = d.bx;
        let y = d.by;
        let scale = 1;
        let alpha = 0.3;

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

        const r = baseR * scale;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TWO_PI);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
        ctx.fill();
      }
    }

    function stopLoop() {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }

    function startLoop() {
      if (raf || isStaticMode || document.hidden) return;
      prevTs = 0;
      raf = requestAnimationFrame(loop);
    }

    function loop(ts: number) {
      if (document.hidden) {
        raf = 0;
        return;
      }

      const dt = Math.min((ts - (prevTs || ts)) / 1000, 0.05);
      prevTs = ts;

      const cfg = cfgRef.current;
      globalAngle += cfg.orbitSpeed * dt;

      const timeSinceLeave = hovering ? 0 : Math.max(0, ts - leaveTs) / 1000;
      const decay = hovering ? 1 : smoothstep(Math.max(0, 1 - timeSinceLeave * 1.5));

      renderFrame(decay);

      // Pause loop completely when not hovering and decay has finished
      if (!hovering && decay <= 0.001) {
        mouse.x = -9999;
        mouse.y = -9999;
        renderFrame(0);
        raf = 0;
        return;
      }

      // If revolving is off and mouse hasn't moved while hovering, no need to redraw every frame
      if (hovering && !cfg.enableRevolve) {
        raf = 0;
        return;
      }

      raf = requestAnimationFrame(loop);
    }

    function resize() {
      if (!canvas || !ctx) return;
      cachedRect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cachedRect.width || window.innerWidth;
      H = cachedRect.height || window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
      renderFrame(hovering ? 1 : 0);
    }

    redrawRef.current = () => {
      if (!raf) {
        renderFrame(hovering ? 1 : 0);
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX - cachedRect.left;
      mouse.y = e.clientY - cachedRect.top;
      hovering = true;
      if (cfgRef.current.enableRevolve) {
        startLoop();
      } else {
        renderFrame(1);
      }
    };

    const handleMouseLeave = () => {
      if (!hovering) return;
      hovering = false;
      leaveTs = performance.now();
      startLoop();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else if (hovering) {
        startLoop();
      } else {
        renderFrame(0);
      }
    };

    if (!isStaticMode) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    return () => {
      stopLoop();
      redrawRef.current = null;
      ro.disconnect();
      window.removeEventListener("resize", resize);
      if (!isStaticMode) {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      }
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
