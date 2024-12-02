import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/im.avif")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-6">Your Reliable Ride, Anytime</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Professional taxi service available 24/7. Experience comfortable, safe, and punctual rides with TaxiBit.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#FEE119] text-gray-900 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-yellow-300 transition-colors">
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}