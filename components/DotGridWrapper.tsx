// components/DotGridWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import type { DotGridProps } from '@/components/Dot_Grid_BG';

const DotGridBackground = dynamic(
  () => import('@/components/Dot_Grid_BG'),
  { ssr: false }
);

interface DotGridWrapperProps extends DotGridProps {
  lightDotColor?: string;
  darkDotColor?: string;
}

export function DotGridWrapper({
  lightDotColor = '#000000', // Warna saat Light Mode
  darkDotColor = '#f5f5f5',  // Warna saat Dark Mode
  dotColor,
  ...props
}: DotGridWrapperProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Menentukan warna dot berdasarkan tema aktif (Light / Dark)
  const isDark = mounted ? resolvedTheme === 'dark' : true;
  const activeDotColor = dotColor || (isDark ? darkDotColor : lightDotColor);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1, 
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <DotGridBackground 
        dotColor={activeDotColor}
        dotSize={1.5}
        dotSpacing={28}
        orbitSpeed={1.5}
        impactRadius={120}
        scaleOnHover={1.8}
        enableRevolve={true}
        {...props}
      />
    </div>
  );
}

export default DotGridWrapper;
