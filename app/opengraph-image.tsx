import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nexalis - Intelligent Digital Solutions & AI Engineering';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030712',
          position: 'relative',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Logo SVG */}
        <svg width="160" height="160" viewBox="0 0 200 200" fill="none">
          <path
            d="M 63.5 136.5 V 63.5 L 96.82369979491291 85.34015289959805"
            stroke="#6366f1"
            strokeWidth="47"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 136.5 63.5 V 136.5 L 103.17630020508709 114.65984710040195"
            stroke="#818cf8"
            strokeWidth="47"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Title */}
        <div
          style={{
            marginTop: '40px',
            fontSize: '80px',
            fontWeight: 'bold',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Nexalis
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: '20px',
            fontSize: '32px',
            color: '#9ca3af',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Intelligent Digital Solutions & AI Engineering
        </div>

        {/* Accent line */}
        <div
          style={{
            marginTop: '30px',
            width: '700px',
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
            borderRadius: '2px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
