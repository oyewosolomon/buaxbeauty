"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="p-4 flex justify-between md:justify-center items-center">
      <div className="w-24 h-24 mb-4 transition-transform hover:scale-105 duration-300">
        <Link href="/">
          <img src="/logo.png" alt="Binax Logo" className="rounded-full" />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4 space-y-4">
          <Link href="/" className="block text-lg text-gray-800">
            Home
          </Link>
          <Link href="/about" className="block text-lg text-gray-800">
            About
          </Link>
          <Link href="/contact" className="block text-lg text-gray-800">
            Contact
          </Link>
          <Link href="/review" className="block text-lg text-gray-800">
            Review
          </Link>
          <Link href="/classes" className="block text-lg text-gray-800">
            Classes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;