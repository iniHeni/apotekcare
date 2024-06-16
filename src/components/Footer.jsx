"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-100 py-6">
      <div className="container mx-auto text-center">
        <nav className="flex justify-center space-x-4 mb-4">
          <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
          <a href="/products/page" className="text-gray-600 hover:text-gray-800">Product</a>
        </nav>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/heni_fitriany?igsh=MWU4bGduOTlhaHJqZw==" className="text-gray-600 hover:text-purple-800">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/iniHeni" className="text-gray-600 hover:text-gray-800">
            <FaGithub size={24} />
          </a>
          <a href="https://www.youtube.com/@henifitriany1094" className="text-gray-600 hover:text-red-800">
            <FaYoutube size={24} />
          </a>
        </div>
        <p className="text-gray-500">&copy; 2024 ApotekCare</p>
      </div>
    </footer>
  );
}
