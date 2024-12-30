"use client";

import React, { useState } from "react";
import Link from "next/link";
import ServiceNav from "@/app/components/ServiceNav";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa"; // Importing react-icons


const Contact = () => {
  const [selectedService, setSelectedService] = useState("Wedding and Pre Wedding");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white">
     <Navigation/>
      {/* Rest of your component code remains unchanged */}
      {/* Main Container */}
      <div className="container mx-auto px-4">
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

          {/* Content Section */}
          <div className="flex-1">
            <div className="text-center mb-8">
              <h1 className="font-bold text-4xl mb-4">Contact Us</h1>
              <p className="text-gray-600">
                We'd love to hear from you. Reach out to us through the form below or contact details.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-lg font-bold mb-2 flex align-middle place-items-center"><FaPhoneAlt className="pr-1"/> Phone</h2>
                <p className="text-gray-700">09026357854</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-lg font-bold mb-2 flex place-items-center"><FaEnvelope className="pr-1"/> Email</h2>
                <p className="text-gray-700">buusoladeleke@gmail.com</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-lg font-bold mb-2 flex align-middle place-items-center"><FaInstagram className="pr-1" /> Instagram</h2>
                <p className="text-gray-700">@Buaxbeauty</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-lg font-bold mb-2 flex align-middle place-items-center"> <FaFacebookF className="pr-1"/>Facebook</h2>
                <p className="text-gray-700">Busola Adeleke</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;