"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceNav from './ServiceNav';
import { imageData } from './portfolioData';
import Navigation from '../components/Navigation';

const ImageCard = ({ image, index, setHoveredImage, hoveredImage }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -100 : 100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1]
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="col-span-1 row-span-1"
    >
      <div 
        className="relative h-98 overflow-hidden group"
        onMouseEnter={() => setHoveredImage(index)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <Image 
          src={image.src}
          alt={image.alt}
          width={400}
          height={600}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="blur"
          blurDataURL={image.src}
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 6}
        />
        <div 
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            hoveredImage === index ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>
    </motion.div>
  );
};

const PortfolioLayout = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedService, setSelectedService] = useState('Wedding and Pre Wedding');

  return (
    <div className="min-h-screen bg-white pb-5">
      <Navigation/>
      <div className="container mx-auto px-4">
        <div className="md:hidden overflow-x-auto mb-8">
          <ServiceNav
            selectedService={selectedService}
            onServiceSelect={setSelectedService}
            variant="mobile"
          />
        </div>

        <div className="flex gap-8">
          <div className="hidden md:block w-1/6">
            <ServiceNav
              selectedService={selectedService}
              onServiceSelect={setSelectedService}
              variant="desktop"
            />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {imageData[selectedService].map((image, index) => (
                <ImageCard
                  key={index}
                  image={image}
                  index={index}
                  setHoveredImage={setHoveredImage}
                  hoveredImage={hoveredImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;