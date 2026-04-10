'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const InteractiveGlobe = () => {
  const globeRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState({ features: [] });

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
    
    // Fetch GeoJSON for the landmass polygons
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => setCountries(data));
      
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Since react-globe.gl hydrates controls asynchronously, we poll for them quickly and initialize once available
    const initInterval = setInterval(() => {
      if (globeRef.current && globeRef.current.controls()) {
        const controls = globeRef.current.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.2;
        controls.enableZoom = false;
        globeRef.current.pointOfView({ altitude: 2.2 });
        
        clearInterval(initInterval);
      }
    }, 100);

    return () => clearInterval(initInterval);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing pb-20">
      {dimensions.width > 0 && typeof window !== 'undefined' && countries.features.length > 0 && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          
          // Core globe hollow out
          backgroundColor="rgba(0,0,0,0)"
          {...({ showGlobe: true, globeColor: "#030712" } as any)}
          showAtmosphere={true}
          atmosphereColor="#818cf8"
          atmosphereAltitude={0.15}
          
          // Hexagon-tessellated landmass giving a premium digital feel
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.2}
          hexPolygonAltitude={0.015} // slight 3D pop
          hexPolygonColor={() => '#6366f1'} // lumina-accent
        />
      )}
    </div>
  );
};

export default InteractiveGlobe;
