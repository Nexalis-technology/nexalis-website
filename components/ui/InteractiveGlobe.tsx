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
      controls.autoRotateSpeed = 1.0;
      controls.enableZoom = false;
      globeRef.current.pointOfView({ altitude: 2.2 });
      
      // We can access the scene and add an ambient light to dramatically increase visibility
      const scene = globeRef.current.scene();
      // Only add light if we haven't already to avoid infinitely adding lights
      if (!scene.userData.hasExtraLight) {
        // import three dynamically to avoid SSR issues
        import('three').then((THREE) => {
          // Massively boosted lighting 
          const ambientLight = new THREE.AmbientLight(0xffffff, 5.0); // Doubled ambient brightness
          const directionalLight = new THREE.DirectionalLight(0xa855f7, 10.0); // Huge purple directional light
          directionalLight.position.set(1, 1, 2); // Angled directly at the front
          
          // Pure white spotlight hitting the globe dead center for maximum brightness
          const spotLight = new THREE.SpotLight(0xffffff, 15.0);
          spotLight.position.set(0, 0, 50);

          scene.add(ambientLight);
          scene.add(directionalLight);
          scene.add(spotLight);
          scene.userData.hasExtraLight = true;
        });
      }
    }
  }, [globeRef.current]);

  // Cybernetic connecting arcs covering the globe
  const N = 80; // massively increased arcs for tech feel
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ['#6366f1', '#a855f7', '#818cf8', '#ffffff'][Math.floor(Math.random() * 4)]
  }));

  const ringsData = [...Array(20).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    maxR: Math.random() * 25 + 10,
    propagationSpeed: (Math.random() - 0.5) * 2 + 1.5,
    repeatPeriod: Math.random() * 1500 + 500,
  }));

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing pb-20">
      {dimensions.width > 0 && typeof window !== 'undefined' && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="#818cf8"
          atmosphereAltitude={0.25}
          
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.5}
          arcDashGap={1}
          arcDashInitialGap={() => Math.random() * 5}
          arcDashAnimateTime={2500}
          
          ringsData={ringsData}
          ringColor={() => (t: number) => `rgba(168,85,247,${1-t})`}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
        />
      )}
    </div>
  );
};

export default InteractiveGlobe;
