'use client';

import TravelSection from '@/components/TravelSection';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center px-30">
        {/* Left Content */}
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl  text-gray-900  font-inter font-bold text-[96px] leading-none tracking-normal">
            Explore More <br />
            Travel packages <br />
            for easy travel
          </h1>
          <button className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Discover More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/Frame 42.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>

     {/* Search Bar */}
     <div className="absolute left-1/2 transform -translate-x-1/2 bottom-24 w-[95%] md:w-[90%] lg:w-[80%] bg-white shadow-md 
rounded-[12px] px-4 py-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-2 z-10">

  {/* Individual Search Sections - static look, no input */}
  {[
    { label: 'Location', icon: '/common/location.png' },
    { label: 'Days', icon: '/common/ticket.svg' },
    { label: 'Rooms', icon: '/common/image 3 (1).png' },
    { label: 'Guests', icon: '/common/user.png' },
    { label: 'Deity', icon: '/common/filter.png' }
  ].map((item, idx) => (
    <div key={idx} className="flex items-center bg-white border rounded-md px-4 py-3 flex-1 gap-3 min-w-[130px]">
    <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
    <span className="text-gray-500 text-[18px]">{item.label}</span>
  </div>
    

  ))}

  {/* Search Button */}
  <div className="bg-blue-600 p-3 rounded-[8px] cursor-pointer flex items-center justify-center">
    <Image src="/common/search.png" alt="Search" width={20} height={20} />
  </div>
</div>


    </section>
    
  );
}
