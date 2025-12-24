import React from 'react';

const IntroText = () => {
  return (
    <section 
      className="bg-white py-[80px] md:py-[120px] px-6 md:px-10 lg:px-20"
      style={{
        backgroundColor: '#ffffff'
      }}
    >
      <div className="max-w-[1200px] mx-auto ml-[40px] md:ml-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Eyebrow Text */}
          <div 
            className="eyebrow inline-block"
            style={{
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#1db14b',
              marginBottom: '8px'
            }}
          >
            What We Do
          </div>

          {/* Large Mission Statement Text */}
          <h2 
            className="text-balance"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#333333',
              maxWidth: '1000px',
              margin: 0
            }}
          >
            A global leader in value-driven energy solutions, we channel our energies into transforming our business and yours. Let&rsquo;s move the world forward, intelligently.
          </h2>
        </div>
      </div>

      {/* Vertical Brand Line Motif Visual Representation (usually handled by a global or layout component, but keeping context here) */}
      <style jsx global>{`
        .page_leftLine__xn2d6 {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 10px;
          z-index: 50;
        }
        .line-segment {
          height: 33.333%;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default IntroText;