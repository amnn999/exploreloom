// ExploreLoom Travel Website - Homepage
// Tech: React + Tailwind CSS

import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529335764857-3f1164d1cb24')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ExploreLoom</h1>
          <p className="text-lg md:text-xl">Trekking | Adventure | Homestays | Resorts</p>
          <a href="#packages" className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg">Explore Packages</a>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Treks</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Valley of Flowers */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1598435485127-43b71830b599" alt="Valley of Flowers" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Valley of Flowers Trek</h3>
              <p className="text-gray-700 mb-3">4 Days / 3 Nights | Start/Drop: Joshimath</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>✔ ₹6,999 per person</li>
                <li>✔ All meals (B/L/D + Tea/Snacks)</li>
                <li>✔ Hotel + Camping stay</li>
                <li>✔ Guided trek through floral meadows</li>
              </ul>
              <a href="#contact" className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full">Enquire Now</a>
            </div>
          </div>

          {/* Kuari Pass Trek */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1602584161334-e1b1ee8fa52c" alt="Kuari Pass" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Kuari Pass Trek</h3>
              <p className="text-gray-700 mb-3">4 Days / 3 Nights | Start/Drop: Joshimath</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>✔ ₹6,999 per person</li>
                <li>✔ Meals included + Tea/Snacks</li>
                <li>✔ Hotel + Camp stay</li>
                <li>✔ Panoramic views of Himalayan peaks</li>
              </ul>
              <a href="#contact" className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full">Enquire Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-xl">
          <p className="text-lg mb-4">For bookings or queries, reach out to us directly:</p>
          <ul className="text-gray-700 space-y-2">
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/919760119208" className="text-blue-600 hover:underline">+91 9760119208</a></li>
            <li><strong>Email:</strong> comingsoon@exploreloom.in</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        © 2025 ExploreLoom. All rights reserved.
      </footer>
    </div>
  );
}