import React from 'react';
import { Shield, Award, ThumbsUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Happy Customers'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience'
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Safety Record'
  },
  {
    icon: ThumbsUp,
    value: '4.9/5',
    label: 'Customer Rating'
  }
];

function page() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Transportation Partner Since 2008</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                TAXIBIT has been serving our community with pride and dedication for over 15 years. 
                What started as a small fleet of just five cars has grown into one of the city&apos;s most 
                reliable and respected taxi services.
              </p>
              <p>
                Our commitment to safety, punctuality, and customer satisfaction has earned us the trust 
                of thousands of regular customers. Every driver in our team undergoes rigorous training 
                and background checks, ensuring you&lsquo;re always in safe hands.
              </p>
              <p>
                We&apos;ve embraced modern technology while maintaining the personal touch that our customers 
                value. From our easy-to-use booking system to our 24/7 customer support, we&apos;re always 
                here to serve you.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose TAXIBIT?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Professional, licensed, and vetted drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Modern, well-maintained vehicle fleet</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Competitive rates with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>24/7 availability and support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
            <div className="col-span-2">
              <img
                src="/cab.svg"
                alt="Our taxi fleet"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page