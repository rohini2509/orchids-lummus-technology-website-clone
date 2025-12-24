import React from 'react';
import Image from 'next/image';

/**
 * Hero component for Lummus Technology website.
 * Features a vibrant green-to-blue gradient background, a large H1 headline,
 * interactive circular icons, and an embedded background video on the right.
 */
const Hero = () => {
  return (
    <section 
      className="relative min-h-[720px] lg:h-[100vh] w-full flex items-center overflow-hidden bg-hero-gradient"
      data-banner="hero"
    >
      {/* Background container for the gradient/media overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1db14b_0%,#008289_100%)] opacity-100"></div>
        {/* Abstract background elements if needed or transparent overlays */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-20 lg:pt-0">
        {/* Left Content Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-white mb-12 max-w-[600px] leading-[0.9] lg:leading-[1.1]">
            Potential&rsquo;s Energy
          </h1>
          
          {/* Quick Links / Icons Section */}
          <div className="flex flex-wrap items-start gap-8 lg:gap-12 mt-4">
            {/* Technologies */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative w-[120px] h-[120px] lg:w-[159px] lg:h-[159px] rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white/10">
                <Image 
                  src="https://d2d7ml4rk6sevp.cloudfront.net/eyJidWNrZXQiOiJsdW1tdXN0ZWNobm9sb2d5LXByb2QtYnVja2V0LWFzc2V0cyIsImtleSI6IlRlY2hub2xvZ2llcy5zdmciLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMjB9fX0="
                  alt="Technologies"
                  width={90}
                  height={90}
                  className="w-auto h-[60%] object-contain"
                />
              </div>
              <span className="text-white text-[16px] font-medium tracking-wide">Technologies</span>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white/10">
                <Image 
                  src="https://d2d7ml4rk6sevp.cloudfront.net/eyJidWNrZXQiOiJsdW1tdXN0ZWNobm9sb2d5LXByb2QtYnVja2V0LWFzc2V0cyIsImtleSI6IlNlcnZpY2VzLnN2ZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODV9LCJyZXNpemUiOnsid2lkdGgiOjMyMH19fQ=="
                  alt="Services"
                  width={90}
                  height={90}
                  className="w-auto h-[60%] object-contain"
                />
              </div>
              <span className="text-white text-[16px] font-medium tracking-wide">Services</span>
            </div>

            {/* Innovations */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative w-[120px] h-[120px] lg:w-[162px] lg:h-[162px] rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white/10">
                <Image 
                  src="https://d2d7ml4rk6sevp.cloudfront.net/eyJidWNrZXQiOiJsdW1tdXN0ZWNobm9sb2d5LXByb2QtYnVja2V0LWFzc2V0cyIsImtleSI6Iklubm92YXRpb25zLnN2ZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODV9LCJyZXNpemUiOnsid2lkdGgiOjM4NH19fQ=="
                  alt="Innovations"
                  width={90}
                  height={90}
                  className="w-auto h-[60%] object-contain"
                />
              </div>
              <span className="text-white text-[16px] font-medium tracking-wide">Innovations</span>
            </div>
          </div>
        </div>

        {/* Right Content / Video Side */}
        <div className="flex flex-col gap-8 lg:pl-10">
          {/* Embedded Video Player */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black/20 group">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-auto max-w-[600px] mix-blend-screen scale-125 lg:scale-150"
            >
              <source src="https://d1g1fbp5o5wtrg.cloudfront.net/videos/Amorphous-Video_h264.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="max-w-[480px]">
            <p className="text-white text-[18px] leading-[1.6] mb-8 font-normal opacity-90">
              At Lummus, we make the world work better, bringing together the best minds in science, technology, and business. Together, we give potential the energy to transform possibility into progress.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/about" 
                className="pill-button bg-white/10 hover:bg-white/20 text-white border border-white/40 backdrop-blur-sm px-10 py-4 uppercase tracking-wider text-[14px]"
              >
                Who we are
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Vertical Line Motif offset matches High Level Design */}
      <div className="brand-line">
        <div className="brand-line-segment-top" />
        <div className="brand-line-segment-middle" />
        <div className="brand-line-segment-bottom" />
      </div>
    </section>
  );
};

export default Hero;