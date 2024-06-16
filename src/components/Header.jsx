"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 sm:px-12">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/images/logo.jpeg" alt="Logo ApotekCare" className="h-8 sm:h-10" />
          <span className="ml-2 text-lg sm:text-xl font-semibold">ApotekCare</span>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden sm:flex space-x-4 text-sm sm:text-base">
          <Link href="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500 transition duration-300">About Us</Link>
          <Link href="/products/page" className="text-gray-700 hover:text-blue-500 transition duration-300">Product</Link>
        </nav>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <nav className="absolute top-16 left-0 w-full bg-white shadow-md z-10">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition duration-300">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition duration-300">About Us</Link>
            <Link href="/products/page" className="block px-4 py-2 text-gray-700 hover:text-blue-500 transition duration-300">Product</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
