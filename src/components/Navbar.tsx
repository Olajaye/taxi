import React from 'react';
import {  Phone, Menu } from 'lucide-react';
import Link from 'next/link';
import LOGOSVG from './svg/LogoSVG';

export function Navbar() {
  return (
    <header className="diagonal-split shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center overflow-hidden">
            <Link href={'/'}>
             <LOGOSVG className={''}/>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-900 hover:text-gray-700">Services</Link>
            <Link href="#booking" className="text-gray-900 hover:text-gray-700">Book Now</Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-700">About</Link>
            <Link href="#contact" className="text-gray-900 hover:text-gray-700">Contact</Link>
          </nav>

          <div className="flex items-center">
            <a href="tel:+1234567890" className="hidden md:flex items-center text-gray-900 hover:text-gray-700">
              <Phone className="h-5 w-5 mr-2" />
              <span>123-456-7890</span>
            </a>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}