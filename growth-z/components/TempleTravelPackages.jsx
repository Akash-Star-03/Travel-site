'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TempleTravelPackages() {
  return (
    <section className="bg-white px-2 sm:px-4 md:px-8 lg:px-20 xl:px-32 py-8">
      {/* Aligned Title */}
      <div className="max-w-[400px] mx-auto sm:mx-0">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6 mx-20">Temple Travel Packages</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((_, i) => (
          <Link
            href="/explore"
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col max-w-[250px] mx-auto block hover:opacity-90  hover:shadow-lg transition-shadow text-sm "
          >
            <Image
              src="/image (6).png"
              alt="Somnath Temple"
              width={500}
              height={300}
              className="w-full h-36 object-cover"
              loading="lazy"
            />
            <div className="p-2 flex flex-col gap-1">
              <span className="bg-gray-100 text-gray-800 text-[11px] px-2 py-[2px] rounded-full w-fit">Gujarat</span>
              <h3 className="font-medium text-sm text-gray-900 leading-tight">
                Somnath Mandir Rd, Somnath, Prabhas Patan, Gujarat
              </h3>
              <div className="text-xs text-gray-600 mt-1">
                <div>
                  <span className="font-semibold text-black">₹ 13,800</span> <span className="text-gray-500">Onwards</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-black">Excellent</span>
                  <span className="text-orange-500">⭐⭐⭐</span>
                  <span className="text-[11px] text-gray-500">(1 Review)</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center mt-8">
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-md text-sm">
          See all
        </button>
      </div>
    </section>
  );
}
