'use client';

import Image from 'next/image';
import { useState } from 'react';



export default function TravelDetailPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      // Reset form or handle booking logic here
      setFormData({ name: '', email: '', phone: '' });
      setShowForm(false);
    }
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="rounded-lg overflow-hidden mb-6">
        <img
          src="/image (12).png"
          alt="Vaishno Devi"
          className="w-full h-72 md:h-96 object-cover"
        />
      </div>

      {/* Title & Buttons */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">Katra Vaishno Devi</h1>
          <p className="text-sm text-gray-600 mt-1 inline-flex items-center">
  <Image
    src="/common/location.svg"
    alt="temple"
    width={20}
    height={20}
    className="mr-2"
  />
  Vaishno Devi · Jammu Kashmir
</p>

          <div className="mt-2 flex flex-wrap text-sm text-blue-600 gap-6">
            <span className="cursor-pointer hover:underline">Things To Do in Vaishno Devi</span>
            <span className="cursor-pointer hover:underline">📥 Get Vaishno Devi PDF Guide</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm">
          JOIN COMMUNITY
        </button>
      </div>

      {/* Price, Rating & Actions */}
      <div className="bg-white shadow rounded-lg p-4 mb-6 flex flex-col md:flex-row items-start md:justify-between gap-4">
        {/* Left section */}
        <div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="bg-[#1A7C13] px-2 py-1 rounded font-medium text-xs">
              4.3★
            </span>
            <span className="text-gray-500 text-xs">(500k votes)</span>
          </div>
          <div className="text-xl font-bold mt-2 text-[#21569C] flex items-center gap-4">
            Rs. 5690 <span className="text-sm text-gray-500 font-normal">onwards</span>

            {/* View Packages button next to price */}
            <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded text-sm">
              View Vaishno Devi Packages
            </button>
          </div>

          {/* Book NOW button below price */}
          <button
  className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded text-sm"
  onClick={() => setShowForm(true)}
>
  Book NOW
</button>
        </div>
      </div>

      {/* Overview */}
      <div>
        <h2 className="font-bold mb-2 text-black">Vaishno Devi Temple, Overview</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Perched atop the Trikuta Mountains in the Indian state of Jammu and Kashmir, the Vaishno Devi Mandir is one of the most revered Hindu pilgrimage sites in the country. Dedicated to the Hindu goddess Vaishno Devi, also known as Mata Rani or Vaishnavi, this sacred temple draws millions of devotees each year who come to seek the blessings of the divine mother...
        </p>
        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded text-sm">
          Read more
        </button>
      </div>
      {/* Modal Popup Form */}
      {showForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4 relative">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
      >
        ×
      </button>

      <h3 className="text-lg font-semibold mb-4 text-center">Book Your Trip</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm text-black"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm text-black"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 ">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm text-black"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
