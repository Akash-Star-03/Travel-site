'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sara Jay',
    role: 'Traveller',
    text: '“I am a traveler and ON TRIP Travels truly help a lot in finding interesting tourist destinations and of course the price offers is very worth it.”',
    rating: 5,
  },
  {
    name: 'Adarsh Mishra',
    role: 'Traveller',
    text: 'Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us.',
    rating: 5,
  },
  {
    name: 'Deepanshu',
    role: 'Traveller',
    text: 'Before we define any approach, we need to define the brand’s overall goal. We then need to dive.',
    rating: 5,
  },
  {
    name: 'Alok Yadav',
    role: 'Traveller',
    text: 'Efficient, user-friendly website with clear booking steps, secure payment, and excellent customer support.',
    rating: 5,
  },
  {
    name: 'Second Set 1',
    role: 'Traveller',
    text: 'Efficient, user-friendly website with clear booking steps, secure payment, and excellent customer support.',
    rating: 5,
  },
  {
    name: 'Second Set 2',
    role: 'Traveller',
    text: 'Efficient, user-friendly website with clear booking steps, secure payment, and excellent customer support.',
    rating: 5,
  },
  {
    name: 'Second Set 3',
    role: 'Traveller',
    text: 'Efficient, user-friendly website with clear booking steps, secure payment, and excellent customer support.',
    rating: 5,
  },
  {
    name: 'Second Set 4',
    role: 'Traveller',
    text: 'Efficient, user-friendly website with clear booking steps, secure payment, and excellent customer support.',
    rating: 5,
  },
];

export default function TestimonialSection() {
  const groupSize = 4;
  const totalGroups = Math.ceil(testimonials.length / groupSize);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalGroups]);

  const currentTestimonials = testimonials.slice(
    currentGroup * groupSize,
    currentGroup * groupSize + groupSize
  );

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20 xl:px-32">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xs text-gray-400 uppercase tracking-wider">Testimonial</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">What Travelers Are Saying</h3>
          <p className="text-xs text-gray-500 mt-1">Create a visual identity for your company and brand</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups)}
            className="w-8 h-8 rounded-full bg-white shadow text-gray-600 hover:bg-gray-100"
          >
            &lt;
          </button>
          <button onClick={() => setCurrentGroup((prev) => (prev + 1) % totalGroups)}
            className="w-8 h-8 rounded-full bg-white shadow text-gray-600 hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentTestimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 text-sm flex flex-col text-center max-w-[260px] mx-auto">
          <Image  src="/client 1.png" alt={t.name}  width={48}  height={48}  className="rounded-full object-cover mx-auto mb-2"/>
           <h4 className="font-semibold text-sm text-black">{t.name}</h4>
            <span className="text-gray-500 text-xs">{t.role}</span>
            <div className="text-orange-500 mb-2 text-sm">
              {'★'.repeat(t.rating)}
            </div>
            <p className="text-xs text-gray-600">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
