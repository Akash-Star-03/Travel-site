import Image from 'next/image';


export default function HeroSection() {
  return (
    <section className="relative w-full h-screen md:h-[80vh] overflow-hidden ">
  {/* Background Image with white side gaps */}
  <div className="absolute inset-0 z-[-1] flex justify-center items-center">
    <div className="w-full max-w-[95%] h-full relative rounded-xl overflow-hidden">
      <Image
        src="/bg.png"
        alt="Temple Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  </div>




      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white ml-4 md:ml-10">



        {/* Text Section */}
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#FFF9BB]">
            Explore the sights <br className="hidden md:block" /> of the Temples
          </h1>
          <p className="mt-4 text-base md:text-xl text-white">A place which makes your travel easy</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white w-full max-w-5xl mt-10 rounded-xl shadow-lg p-4 flex flex-col gap-4 md:flex-row md:items-center">
          {/* Temple Search */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 flex-1">
          <Image src="/common/location.svg" alt="temple" width={20} height={20} className="mr-2" />

            <input
              type="text"
              placeholder="Search temple here"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Accommodation Search */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 flex-1">
          <Image src="/common/bed.svg" alt="temple" width={20} height={20} className="mr-2" />
            <input
              type="text"
              placeholder="Search Accommodations here"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Transport Search */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 flex-1">
          <Image src="/common/ticket.svg" alt="temple" width={20} height={20} className="mr-2" />
            <input
              type="text"
              placeholder="Search Transport here"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg flex items-center justify-center">
          <Image src="/common/search.png" alt="temple" width={20} height={20} className="mr-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
