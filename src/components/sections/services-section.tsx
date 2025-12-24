import React from 'react';
import Image from 'next/image';

/**
 * ServicesSection component
 * 
 * Clones the reversed split-layout section with text on the left describing "Services" 
 * and a high-quality image of someone using a stylus on a digital display on the right.
 * 
 * Layout: 50/50 split, reversed (image on right, text on left)
 */
const ServicesSection: React.FC = () => {
  // Using the specific asset provided for this section
  const serviceImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f707325-df69-455e-b6ec-0657fd619104-lummustechnology-com/assets/images/images_6.png";

  return (
    <section className="relative w-full overflow-hidden bg-white py-[80px] lg:py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-[60px] lg:gap-[100px]">
          
          {/* Text Content Column (Left Side) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h3 className="mb-6 text-[32px] font-medium leading-[1.3] text-[#333333]">
              Services
            </h3>
            
            <div className="mb-8 max-w-[540px]">
              <p className="text-[18px] font-normal leading-relaxed text-[#333333]">
                Lummus innovates with an eye on tomorrow, focused on outcomes. 
                But we always keep market opportunities clearly in our field of vision. 
                With agile process planning and development, consulting, life-cycle 
                services, and digitalization capabilities, we perfectly complement 
                and empower your business objectives while enabling a sustainable future.
              </p>
            </div>
            
            <a 
              href="/services#services"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-[30px] bg-[#006570] px-[32px] py-[12px] text-[16px] font-semibold text-white transition-all duration-300 hover:brightness-90 active:scale-[0.98]"
            >
              <span>Learn more</span>
            </a>
          </div>

          {/* Image Content Column (Right Side) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px]">
              <Image
                src={serviceImageUrl}
                alt="Stylus use on digital display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Brand Accent Overlay Element (The Yellow Stripe seen in screenshots) */}
              <div className="absolute right-0 top-0 bottom-0 w-[24px] bg-[#E2E82E]/80 backdrop-blur-sm pointer-events-none"></div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Brand Vertical Line Motif - Mirroring the layout but not fixed for section scope */}
      <div className="absolute left-0 top-0 bottom-0 w-[10px] hidden lg:flex flex-col">
        <div className="h-1/3 bg-[#003057]"></div>
        <div className="h-1/3 bg-[#E2E82E]"></div>
        <div className="h-1/3 bg-[#1DB14B]"></div>
      </div>
    </section>
  );
};

export default ServicesSection;