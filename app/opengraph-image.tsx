import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tusflow - Modern File Upload Infrastructure';
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
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(128,128,128,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.07) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Orange Gradient Top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background:
              'linear-gradient(180deg, rgba(251, 146, 60, 0.2) 0%, transparent 100%)',
            opacity: 0.15,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '20px 40px',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          {/* Logo & Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #EA580C, #DC2626)',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.2,
              }}
            >
              Tusflow
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#374151',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Modern File Upload Infrastructure for the Edge
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '16px',
            }}
          >
            {['Open Source', 'Edge Powered', 'TUS Protocol'].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '20px',
                  fontWeight: '500',
                  color: '#EA580C',
                  background: 'rgba(251, 146, 60, 0.1)',
                  border: '1px solid rgba(251, 146, 60, 0.2)',
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '24px',
            color: '#6B7280',
          }}
        >
          tusflow.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cal Sans',
          data: await fetch(
            new URL('../public/fonts/CalSans-SemiBold.woff', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          style: 'normal',
          weight: 600,
        },
      ],
    }
  );
}
