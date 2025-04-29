'use client';

import Image from 'next/image';

export default function PopularTemples() {
  return (
    <section className="bg-white px-2 sm:px-4 md:px-8 lg:px-20 xl:px-32 py-8">
      <div className="px-3 sm:px-4 md:px-8 lg:px-15 xl:px-20">


      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">Popular Temples</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['Month', 'Theme', 'Budget', 'Travel duration', 'Place'].map((filter) => (
          <button
            key={filter}
            className="border border-gray-300 rounded-lg px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
          >
            {filter} ▾
          </button>
        ))}
      </div>
      </div>
      {/* Temple Cards */}
      <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Temple Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col text-sm max-w-[250px] mx-auto">
  <Image
    src="/image (3).png"
    alt="Kedarnath Temple"
    width={500}
    height={300}
   
    className="w-full h-32 object-cover"
  />
  <div className="p-2 flex flex-col gap-1">
    <div className="flex justify-between items-center">
      <h3 className="text-xs font-semibold text-gray-900">Shri Kedarnath Jyotirlinga Temple</h3>
      <span className="text-[9px] text-gray-500">4.8 ⭐ (374)</span>
    </div>
    <p className="text-[10px] text-gray-600">
      Kedarnath Temple is a Hindu temple... located on the Garhwal Himalayan range near the Mandakini river.
    </p>
    <div className="flex justify-between items-center mt-1.5">
      <a href="#" className="text-[10px] text-blue-600 hover:underline">Explore more</a>
      <button className="bg-[linear-gradient(90.12deg,#FE0202_1.93%,#FF9705_99.91%)] hover:bg-orange-600 text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
        Book now
      </button>
    </div>
  </div>
</div>

  {/* Temple Card 2 */}

        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col text-sm max-w-[250px] mx-auto">
          <Image
            src="/image (5).png"
            alt="Vaishno Devi Temple"
            width={500}
            height={300}
             loading="lazy"
            className="w-full h-36 object-cover"
          />
          <div className="p-2 flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900">Vaishno Devi</h3>
              <span className="text-[10px] text-gray-500">4.6 ⭐ (478)</span>
            </div>
            <p className="text-xs text-gray-600">
              Vaishno Devi is an incarnation of the Hindu mother goddess... located in the Trikuta Mountains.
            </p>
            <div className="flex justify-between items-center mt-2">
              <a href="#" className="text-xs text-blue-600 hover:underline">Explore more</a>
              <button className="bg-[linear-gradient(90.12deg,#FE0202_1.93%,#FF9705_99.91%)] hover:bg-orange-600 text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
                Book now
              </button>
            </div>
          </div>
        </div>

        {/* Temple Card 3 */}
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col text-sm max-w-[250px] mx-auto">
          <Image
            src="/image (4).png"
            alt="Badrinath Temple"
            width={500}
            height={300}
             loading="lazy"
            className="w-full h-36 object-cover"
          />
          <div className="p-2 flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900">Shree Badrinath Temple</h3>
              <span className="text-[10px] text-gray-500">4.9 ⭐ (826)</span>
            </div>
            <p className="text-xs text-gray-600">
              The temple is approximately 100 ft tall... dedicated to the god Vishnu.
            </p>
            <div className="flex justify-between items-center mt-2">
              <a href="#" className="text-xs text-blue-600 hover:underline">Explore more</a>
              <button className="bg-[linear-gradient(90.12deg,#FE0202_1.93%,#FF9705_99.91%)] hover:bg-orange-600 text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* See all button */}
      <div className="flex justify-center mt-8">
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-5 py-1.5 rounded-md text-sm">
          See all
        </button>
      </div>
    </section>
  );
}
