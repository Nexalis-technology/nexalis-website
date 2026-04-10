'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const InteractiveGlobe = () => {
  const globeRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableZoom = false;
      globeRef.current.pointOfView({ altitude: 2.2 });
    }
  }, [globeRef.current]);

  // Cybernetic connecting arcs covering the globe
  const N = 30;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ['#6366f1', '#a855f7', '#818cf8'][Math.floor(Math.random() * 3)]
  }));

  const ringsData = [...Array(12).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    maxR: Math.random() * 20 + 10,
    propagationSpeed: (Math.random() - 0.5) * 2 + 1,
    repeatPeriod: Math.random() * 2000 + 1000,
  }));

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing">
      {dimensions.width > 0 && typeof window !== 'undefined' && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="#6366f1"
          atmosphereAltitude={0.2}
          
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={1}
          arcDashInitialGap={() => Math.random() * 5}
          arcDashAnimateTime={2000}
          
          ringsData={ringsData}
          ringColor={() => (t: number) => `rgba(99,102,241,${1-t})`}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
        />
      )}
    </div>
  );
};

export default InteractiveGlobe;
