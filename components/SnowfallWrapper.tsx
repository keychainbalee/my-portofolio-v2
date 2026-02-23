// components/SnowfallWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

export function SnowfallWrapper() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1, // Kunci utamanya di sini: angka negatif meletakkannya di paling belakang
        pointerEvents: 'none' 
      }}
    >
      <Snowfall color="#a8a9ab" snowflakeCount={100} />
    </div>
  );
}