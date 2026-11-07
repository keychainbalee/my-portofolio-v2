// components/DotGridWrapper.tsx
'use client';

import dynamic from 'next/dynamic';
import type { DotGridProps } from '@/components/Dot_Grid_BG';

const DotGridBackground = dynamic(
  () => import('@/components/Dot_Grid_BG'),
  { ssr: false }
);

export function DotGridWrapper(props: DotGridProps) {
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
        dotColor="#f5f5f5"
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
