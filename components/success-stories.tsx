'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const successStories = [
  {
    id: 1,
    name: "Ali Ahmed",
    achievement: "MBBS - King Edward Medical University",
    marks: "1090/1100",
    year: "2023",
    image: "/success1.jpg",
  },
  {
    id: 2,
    name: "Sara Khan",
    achievement: "Engineering - NUST",
    marks: "1085/1100",
    year: "2023",
    image: "/success2.jpg",
  },
  {
    id: 3,
    name: "Muhammad Hassan",
    achievement: "BBA - LUMS",
    marks: "1080/1100",
    year: "2023",
    image: "/success3.jpg",
  },
  // Add more success stories as needed
];

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="bg-[#f5f5f5] py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-[#003366] mx-auto mb-6"></div>
        </div>

        {/* Success Stories Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 -ml-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 -mr-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Success Story Content */}
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 relative h-[400px]">
                <Image
                  src={successStories[currentSlide].image}
                  alt={successStories[currentSlide].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                <div className="border-l-4 border-[#003366] pl-6">
                  <h3 className="text-3xl font-bold text-[#003366] mb-4">
                    {successStories[currentSlide].name}
                  </h3>
                  <p className="text-xl text-gray-600 mb-4">
                    {successStories[currentSlide].achievement}
                  </p>
                  <p className="text-2xl font-semibold text-[#003366] mb-2">
                    Marks: {successStories[currentSlide].marks}
                  </p>
                  <p className="text-lg text-gray-500">
                    Year: {successStories[currentSlide].year}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#003366] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories; 