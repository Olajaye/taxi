import React from 'react';
import { Car, Users, Briefcase, Clock } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'City Rides',
    description: 'Quick and comfortable rides within the city limits with experienced drivers.'
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Spacious vehicles for group transportation and special events.'
  },
  {
    icon: Briefcase,
    title: 'Airport Transfer',
    description: 'Reliable airport pickup and drop-off services with flight tracking.'
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Available round the clock for your transportation needs.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 diagonal-split">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-black">Comprehensive transportation solutions for every need</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-[#FEE119] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}