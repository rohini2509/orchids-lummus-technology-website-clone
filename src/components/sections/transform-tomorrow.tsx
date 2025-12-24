import React from 'react';

const TransformTomorrow = () => {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1DB14B 0%, #008289 100%)',
        paddingTop: '120px',
        paddingBottom: '120px'
      }}
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source 
            src="https://d1g1fbp5o5wtrg.cloudfront.net/videos/LummusHeroVideo.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Darkening Gradient Overlay to ensure text readability */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)'
          }}
        />
      </div>

      <div className="container relative z-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px]">
          
          {/* Content Wrapper */}
          <div className="flex flex-col items-start text-white">
            <h1 className="mb-8 text-white" style={{ fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: '400', lineHeight: '1.1' }}>
              Let’s transform tomorrow.
            </h1>
            
            <div className="mb-10 max-w-[500px]">
              <p className="text-[18px] leading-[1.6] text-white/90">
                For solutions, support, and inspiration, Lummus can show you the way. It starts with a conversation. So, let’s have one.
              </p>
            </div>

            <a 
              href="/contact" 
              className="pill-button bg-white text-[#006570] hover:bg-white/90 transition-all duration-200 shadow-lg"
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '0.75rem 2.5rem',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Contact us
            </a>
          </div>

          {/* Decorative Right Side (Alignment match for 50/50 layout) */}
          <div className="hidden lg:block">
            {/* Keeping layout balanced as per high-level design 50/50 rule */}
          </div>
        </div>
      </div>

      {/* Decorative Border/Inner Box Effect seen in screenshots */}
      <div 
        className="absolute left-10 right-10 top-10 bottom-10 border border-white/10 rounded-[30px] pointer-events-none"
        style={{ margin: '20px' }}
      />
    </section>
  );
};

export default TransformTomorrow;