// components/SnowfallWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

// Import dinamis agar tidak dijalankan di server
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
        zIndex: 50, // Letakkan di atas konten tapi di bawah navbar (jika navbar punya z-index lebih tinggi)
        pointerEvents: 'none' // PENTING: Agar salju tidak menghalangi tombol yang diklik
      }}
    >
      <Snowfall color="#a8a9ab" snowflakeCount={100} />
    </div>
  );
}