'use client';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';

export default function TravelSection() {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const allTravelData = useSelector((state) => state.travel?.data || []);
  const [filteredData, setFilteredData] = useState([]);

  const [filters, setFilters] = useState({
    travelTypes: [],
    sortBy: '',
  });

  useEffect(() => {
    if (allTravelData.length > 0) {
      setFilteredData(allTravelData);
    }
  }, [allTravelData]);

  const handleFilterChange = (type) => {
    setFilters((prev) => {
      const updated = prev.travelTypes.includes(type)
        ? prev.travelTypes.filter((t) => t !== type)
        : [...prev.travelTypes, type];
      return { ...prev, travelTypes: updated };
    });
  };

  const handleSortChange = (e) => {
    setFilters((prev) => ({ ...prev, sortBy: e.target.value }));
  };

  const applyFilters = () => {
    let data = [...allTravelData];

    if (filters.travelTypes.length > 0) {
      data = data.filter((item) => filters.travelTypes.includes(item.type));
    }

    if (filters.sortBy === 'price') {
      data.sort((a, b) => a.price - b.price);
    }

    setFilteredData(data);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      {/* Filters */}
      <aside className="w-full md:w-1/4 bg-white p-6 shadow rounded-lg text-black">
        <h2 className="text-xl font-semibold mb-6">Filter By</h2>

        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2">Travel Type</h3>
          {['Adventure', 'Family', 'Honeymoon'].map((type) => (
            <label key={type} className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleFilterChange(type)}
                checked={filters.travelTypes.includes(type)}
              />
              {type}
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2">Sort By</h3>
          <select
            onChange={handleSortChange}
            className="w-full border px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="price">Price</option>
          </select>
        </div>

        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Apply Filter
        </button>
      </aside>

      {/* Cards */}
      <div className="w-full md:w-3/4 flex flex-col gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-48 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-gray-600 mb-1">{item.description}</p>
                <p className="text-blue-600 font-semibold mb-2">Rs.{item.price}</p>
                <div className="flex gap-3">
                 <Link href="/travel/detail">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
                    View Page
                  </button></Link>
                  <button className="bg-[linear-gradient(90.12deg,#FE0202_1.93%,#FF9705_99.91%)] text-white px-4 py-1 rounded hover:bg-red-600 transition"  onClick={handleOpenModal}>
                    Book Now
                  </button>
                </div>
              </div>
              
      {/* Booking Modal */}
      <BookingModal show={showModal} onClose={handleCloseModal} />

            </div>
          ))
        ) : (
          <p className="text-gray-500">No travel packages found.</p>
        )}
      </div>
    </section>
  );
}
