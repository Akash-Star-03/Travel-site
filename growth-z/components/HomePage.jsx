
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative">
      
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-b-3xl" /> */}
        <img 
          src="/bg.png" 
          alt="Temple Background" 
          className="w-full h-[600px] object-cover rounded-b-3xl"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-32">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore the sights <br /> of the Temples
          </h1>
          <p className="mt-4 text-lg font-light">
            A place which makes your travel easy
          </p>

          {/* Search Box */}
          <div className="bg-white  rounded-2xl shadow-lg p-4 mt-8 flex flex-col md:flex-row gap-4 items-start max-w-4xl w-full">
            <div className="flex items-start gap-2 flex-1 border-b md:border-b-0 md:border-r p-2">
              <img src="/common/location.svg" className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Search temple here" 
                className="outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2 flex-1 border-b md:border-b-0 md:border-r p-2">
              <img src="/common/ticket.svg" className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Search Accommodations here" 
                className="outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2 flex-1 p-2">
              <img src="/common/bed.svg" className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Search Transport here" 
                className="outline-none w-full"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3">
              <img src="/common/location.svg" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
