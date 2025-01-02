
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ServiceNav from '@/app/components/ServiceNav'
import { imageData } from '@/app/components/portfolioData';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const About = () => {
  
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedService, setSelectedService] = useState('Wedding and Pre Wedding');


  return (
    <div className="min-h-screen bg-white">
      <Navigation/>

      <div className="container mx-auto px-4 pt-10">
        {/* Mobile Services */}
        <div className="md:hidden overflow-x-auto mb-8">
          <ServiceNav
            selectedService={selectedService}
            onServiceSelect={setSelectedService}
            variant="mobile"
          />
        </div>

        {/* Desktop Layout */}
        <div className="flex gap-8">
          {/* Desktop Services */}
          <div className="hidden md:block w-1/6">
            <ServiceNav
              selectedService={selectedService}
              onServiceSelect={setSelectedService}
              variant="desktop"
            />
          </div>

          {/* Image Grid */}
          <div className="flex-1 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             
                <div className="col-span-1 row-span-1">
                  <div className="relative h-98 overflow-hidden group">
                    <img 
                      src="/busola.png"
                      alt="CEO"
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 }`} />
                  </div>
                </div>
                <div className="col-span-2 pr-12">
                  <div className="relative overflow-hidden group text-lg">
                    <h1 className='font-bold text-3xl mb-2'>Meet Buaxbeauty</h1>
                    
                    Welcome to Buaxbeauty, a premier beauty brand dedicated to enhancing natural beauty through innovative; high-quality services. Our mission is to empower individuals to feel confident and radiant in their own skin. As a celebrity and bridal makeup artist, I believe that beauty is more than skin deep; it’s about embracing one’s unique features and expressing individuality. Our  team focuses and specializes in enhancing one’s natural beauty, making each brushstroke intentional, each look uniquely tailored to reflect your inner radiance. We are committed to providing an exceptional customer and ensuring that every client receives personalized attention. Let’s help serve you right with the best care you deserve!
                  </div>
                </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default About;