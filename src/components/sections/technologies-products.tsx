import React from 'react';
import Image from 'next/image';

const TechnologiesProductsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-[60px] md:py-[120px] overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-8 md:px-0">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[40px] md:gap-[120px]">
          {/* Left Column: Image with Accent */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-[8px] overflow-hidden aspect-[16/10] w-full shadow-lg">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f707325-df69-455e-b6ec-0657fd619104-lummustechnology-com/assets/images/images_5.png"
                alt="Professional woman looking at multiple monitors with data visualizations"
                width={1896}
                height={1185}
                className="object-cover w-full h-full grayscale-0 hover:grayscale-[0.2] transition-all duration-500"
                priority
              />
              {/* Teal Accent Bar on the left of the image as seen in screenshots */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[40px] h-full" 
                style={{ 
                  background: 'linear-gradient(to right, rgba(0, 163, 173, 0.8) 0%, rgba(0, 163, 173, 0) 100%)',
                  mixBlendMode: 'multiply'
                }}
              ></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-[32px] font-medium leading-[1.3] text-[#333333] mb-6">
              Technologies and Products
            </h3>
            <p className="text-[18px] leading-[1.6] text-[#333333] mb-8 max-w-[540px]">
              With a best-in-class technology portfolio of proprietary equipment and technology, we help you meet the challenges of a changing industry. Our support covers petrochemical and polymer processes, heaters and heat transfer equipment, clean fuels, catalysts and modules, hydrogen gas, and natural gas processing—all to keep you strategically ahead of necessity.
            </p>
            <div>
              <a
                href="/services#technologies"
                className="inline-flex items-center justify-center bg-[#006570] text-white font-semibold text-[16px] px-[32px] py-[14px] rounded-[30px] hover:bg-[#004d55] transition-colors duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesProductsSection;