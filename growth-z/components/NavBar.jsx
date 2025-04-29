'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center p-4 shadow-lg bg-white relative z-50 mb-4">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/common/logo.png" alt="Darshan Divine Logo" className="h-12" />
      </div>

      {/* Hamburger for mobile
      <button
        className="ml-auto md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5h14a1 1 0 100-2H3a1 1 0 000 2zm14 4H3a1 1 0 000 2h14a1 1 0 100-2zm0 6H3a1 1 0 000 2h14a1 1 0 100-2z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}

      {/* Desktop Menu */}
      <ul className="hidden md:flex ml-auto gap-6 flex-wrap text-black font-500 font-medium font-poppins font-medium text-md leading-none tracking-normal text-center align-middle">
        <li><a href="/components/HomePage.jsx" className="hover:text-orange-500">Home</a></li>
        <li><a href="#" className="hover:text-orange-500">Temple</a></li>
        <li><a href="#" className="hover:text-orange-500">Accommodation</a></li>
        <li><a href="#" className="hover:text-orange-500">Transport</a></li>
        <li><a href="#" className="hover:text-orange-500">Emergency</a></li>
      </ul>

      {/* Right-side icons & button (always visible) */}
      <div className="flex items-center gap-4 ml-4">
        <div className="bg-transparent hover:bg-orange-600 border-2 border-amber-500 text-black px-4 py-2 flex gap-2 items-center rounded-full text-sm">
          <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 18.75L4.6875 10.9375L6.875 8.67187L10.9375 12.7344V0H14.0625V12.7344L18.125 8.67187L20.3125 10.9375L12.5 18.75ZM3.125 25C2.26562 25 1.53021 24.6943 0.91875 24.0828C0.307291 23.4714 0.00104167 22.7354 0 21.875V17.1875H3.125V21.875H21.875V17.1875H25V21.875C25 22.7344 24.6943 23.4703 24.0828 24.0828C23.4714 24.6953 22.7354 25.001 21.875 25H3.125Z" fill="#1E1E1E" />
          </svg>
          Get the App
        </div>

        {/* Bell Icon */}
        <svg width="20" height="20" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.68671 27.1161C1.39916 27.1159 1.11641 27.0408 0.865304 26.8978C0.614195 26.7549 0.403054 26.5488 0.251913 26.2992C0.100773 26.0496 0.0146475 25.7647 0.00170934 25.4717C-0.0112288 25.1786 0.0494497 24.8869 0.177986 24.6245L3.37432 18.1003V13.3411C3.37432 6.92193 7.67774 1.52902 13.5 0C19.3223 1.52902 23.6257 6.92193 23.6257 13.3411V18.1003L26.822 24.6245C26.9506 24.8869 27.0112 25.1786 26.9983 25.4717C26.9854 25.7647 26.8992 26.0496 26.7481 26.2992C26.5969 26.5488 26.3858 26.7549 26.1347 26.8978C25.8836 27.0408 25.6008 27.1159 25.3133 27.1161H1.68671ZM6.96219 28.8379C7.33758 30.3157 8.1833 31.6245 9.36659 32.5588C10.5499 33.4931 12.0038 34 13.5 34C14.9962 34 16.4501 33.4931 17.6334 32.5588C18.8167 31.6245 19.6624 30.3157 20.0378 28.8379H6.96219Z"
            fill="#1E1E1E"
          />
        </svg>

        {/* Menu Icon */}
        <svg  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} width="20" height="20" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.7632 30.6109C38.5944 30.6113 39.3937 30.9315 39.9953 31.5052C40.5969 32.0788 40.9547 32.8619 40.9947 33.6922C41.0346 34.5225 40.7536 35.3363 40.2098 35.9651C39.6661 36.5938 38.9013 36.9893 38.0739 37.0695L37.7632 37.0846H3.23684C2.40559 37.0842 1.60635 36.764 1.00474 36.1903C0.403141 35.6167 0.0452898 34.8336 0.00534238 34.0033C-0.0346051 33.173 0.246414 32.3592 0.790168 31.7304C1.33392 31.1017 2.09873 30.7062 2.92611 30.626L3.23684 30.6109H37.7632ZM37.7632 15.5057C38.6216 15.5057 39.4449 15.8467 40.052 16.4537C40.659 17.0607 41 17.884 41 18.7425C41 19.601 40.659 20.4243 40.052 21.0313C39.4449 21.6383 38.6216 21.9793 37.7632 21.9793H3.23684C2.37838 21.9793 1.55507 21.6383 0.948049 21.0313C0.341024 20.4243 0 19.601 0 18.7425C0 17.884 0.341024 17.0607 0.948049 16.4537C1.55507 15.8467 2.37838 15.5057 3.23684 15.5057H37.7632ZM37.7632 0.400391C38.6216 0.400391 39.4449 0.741414 40.052 1.34844C40.659 1.95547 41 2.77877 41 3.63723C41 4.4957 40.659 5.319 40.052 5.92603C39.4449 6.53305 38.6216 6.87407 37.7632 6.87407H3.23684C2.37838 6.87407 1.55507 6.53305 0.948049 5.92603C0.341024 5.319 0 4.4957 0 3.63723C0 2.77877 0.341024 1.95547 0.948049 1.34844C1.55507 0.741414 2.37838 0.400391 3.23684 0.400391H37.7632Z"
            fill="#FFA629"
          />
        </svg>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="w-full mt-4 flex flex-col gap-4 text-gray-700 font-medium md:hidden">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#" className="hover:text-orange-500">Temple</a></li>
          <li><a href="#" className="hover:text-orange-500">Accommodation</a></li>
          <li><a href="#" className="hover:text-orange-500">Transport</a></li>
          <li><a href="#" className="hover:text-orange-500">Emergency</a></li>
        </ul>
      )}
    </nav>
  );
}
