"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-hero.jpeg)' }}>
      <div className="absolute inset-0 bg-blue-50 bg-opacity-75" style={{ mixBlendMode: 'multiply' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <div className="md:flex items-center justify-center bg-white bg-opacity-75 rounded-lg shadow-lg p-8">
          <div className="w-full md:w-1/2 md:p-4 text-left">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <img src="/images/logo.jpeg" alt="Logo ApotekCare" className="h-20 mx-auto md:mx-0 mb-4 md:mb-0" />
              <h1 className="text-4xl font-bold text-blue-600 ml-0 md:ml-4 text-center md:text-left">ApotekCare</h1>
            </div>
            <p className="text-lg md:text-xl text-black font-semibold mb-4 text-center md:text-left">Menguatkan kesehatan, satu resep pada satu waktu.</p>
            <p className="text-black font-semibold mb-8 text-center md:text-left">ApotekCare adalah apotek modern yang berkomitmen untuk memberikan layanan kesehatan terbaik dengan menyediakan berbagai macam produk obat dan suplemen berkualitas tinggi. Kami percaya bahwa kesehatan adalah aset terbesar, dan misi kami adalah memastikan setiap individu memiliki akses mudah ke produk kesehatan yang mereka butuhkan, serta layanan konsultasi kesehatan yang profesional.</p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
                About Us
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src="/images/hero.jpeg" alt="Hero Image" className="w-full max-w-md h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
