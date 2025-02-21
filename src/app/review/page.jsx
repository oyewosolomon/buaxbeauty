"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ServiceNav from '@/app/components/ServiceNav'
import { imageData } from '@/app/components/portfolioData';
import Footer from '../components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '../components/Navigation';

const Review = () => {
  const [selectedService, setSelectedService] = useState('Wedding and Pre Wedding');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    review: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      review: ''
    });
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="min-h-screen bg-white">
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
            <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4">
                <div className="">
                  <div className="relative overflow-hidden group text-lg">
                    <h1 className='font-bold text-3xl mb-2'>Drop a review</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">First Name</label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-2xl"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Last Name</label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-2xl"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-gray-600">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-2xl"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-600">Your Review</label>
                        <Textarea
                          name="review"
                          value={formData.review}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-2xl min-h-[150px]"
                          placeholder="Share your experience..."
                          required
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-black text-white py-6 rounded-full hover:bg-gray-800 transition-colors"
                      >
                        Submit Review
                      </Button>
                    </form>
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

export default Review;