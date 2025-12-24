import React from 'react';
import Image from 'next/image';

/**
 * NewsGrid Component
 * Clones the "Making news" section with a light beige background, a "View all news" button,
 * and a horizontal grid of three news cards.
 */
export default function NewsGrid() {
  const newsItems = [
    {
      id: 1,
      title: 'Lummus Technology and Advanced Ionics Break Ground on Green Hydrogen Pilot Plant',
      tagline: 'Next phase of partnership will accelerate the availability of cost-effective green hydrogen.',
      date: 'December 15, 2025',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f707325-df69-455e-b6ec-0657fd619104-lummustechnology-com/assets/images/images_1.png',
      href: '/news/lummus-technology-and-advanced-ionics-break-ground-on-green-hydrogen-pilot-plant'
    },
    {
      id: 2,
      title: 'Erika Taurel Named Chief Financial Officer of Lummus Technology',
      tagline: 'New CFO will help strengthen Lummus’ strategic growth, financial performance and long-term value creation',
      date: 'November 4, 2025',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f707325-df69-455e-b6ec-0657fd619104-lummustechnology-com/assets/images/images_2.png',
      href: '/news/erika-taurel-named-chief-financial-officer-of-lummus-technology'
    },
    {
      id: 3,
      title: 'Lummus and InnoVent Renewables Partner to Accelerate Global Deployment of Tire Pyrolysis Technology',
      tagline: 'Next phase of partnership will increase global availability of circular solution to reduce tire waste and environmental impact',
      date: 'October 30, 2025',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f707325-df69-455e-b6ec-0657fd619104-lummustechnology-com/assets/images/images_3.png',
      href: '/news/lummus-and-innovent-renewables-partner-to-accelerate-global-deployment-of-tire-pyrolysis-technology'
    }
  ];

  return (
    <section className="bg-brand-pale py-[120px] px-8 md:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-[#333333] text-[48px] leading-[1.2] font-normal m-0 p-0">
            Making news
          </h2>
          <a
            href="/news"
            className="pill-button bg-primary text-white text-[16px] font-semibold flex items-center justify-center min-w-[180px] hover:brightness-90 transition-all"
          >
            View all news
          </a>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group flex flex-col h-full bg-transparent border-b border-[#e0e0e0] pb-8 transition-colors hover:border-brand-green"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-[8px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Visual Overlay Motif on Hover */}
                <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-[#333333] text-[20px] leading-[1.3] font-medium mb-4 group-hover:text-brand-teal transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <div className="text-[#737373] text-[16px] leading-[1.6] mb-6 line-clamp-3">
                    <p>{item.tagline}</p>
                  </div>
                </div>
                
                {/* Date */}
                <div className="text-[14px] font-normal text-[#333333] mt-auto">
                  {item.date}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}