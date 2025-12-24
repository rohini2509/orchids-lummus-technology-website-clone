import React from 'react';
import Image from 'next/image';

/**
 * CareersSection Component
 * 
 * Clones the careers section of the Lummus Technology website.
 * Features:
 * - Green eyebrow "CAREERS"
 * - H1 "Unleash your own potential."
 * - Descriptive paragraph
 * - "Find open positions" pill button
 * - Side-by-side layout with a wide-format background image of people collaborating
 */
export default function CareersSection() {
  const careerImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f707325-df69-455e-b6ec-0657fd619104-lummustechnology-com/assets/images/images_4.png";

  return (
    <section className="bg-white py-[120px] relative overflow-hidden">
      {/* Main Container */}
      <div className="container mx-auto px-8 md:px-12 max-w-[1240px]">
        
        {/* Top Header Block: Full Width */}
        <div className="mb-[60px]">
          <span className="block text-[#1db14b] text-[14px] font-bold uppercase tracking-[0.1em] mb-4">
            Careers
          </span>
          <h2 className="text-[clamp(40px,6vw,120px)] font-normal text-[#333333] leading-[1.1] tracking-[-0.02em] max-w-[900px]">
            Unleash your own potential.
          </h2>
        </div>

        {/* Content Block: 50/50 Sidebar Flipped Layout */}
        <div className="flex flex-col lg:flex-row-reverse gap-[60px] items-start">
          
          {/* Text Column (Right/Top on Mobile) */}
          <div className="w-full lg:w-[40%] flex flex-col justify-start pt-4">
            <div className="text-[#333333] text-[18px] leading-[1.6] mb-8">
              <p>
                A great company takes great people. Sound like someone you know? 
                To attract and keep the best talent, Lummus offers competitive 
                salaries and benefits packages, career growth opportunities, and 
                a collaborative environment where your ideas matter. It’s time to 
                make a real impact on your future. And to the world in general.
              </p>
            </div>
            
            <div className="mt-2">
              <a 
                href="https://lummustechnology.wd501.myworkdayjobs.com/LummusTechnology"
                className="inline-flex items-center justify-center bg-[#006570] text-white font-semibold text-[16px] px-8 py-3 rounded-[30px] transition-all duration-200 hover:brightness-90"
              >
                Find open positions
              </a>
            </div>
          </div>

          {/* Image Column (Left/Bottom on Mobile) */}
          <div className="w-full lg:w-[60%] order-2 lg:order-1">
            <div className="relative rounded-[8px] overflow-hidden shadow-sm aspect-[2100/1102]">
              <Image
                src={careerImage}
                alt="People collaborating in a modern office environment"
                width={2100}
                height={1102}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* The Brand motifs are typically handled by a global overlay or parent layout component 
          as per high_level_design ("brand-line" fixed position). In this section we focus on internal layout. */}
    </section>
  );
}