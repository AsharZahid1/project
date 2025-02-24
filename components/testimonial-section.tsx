'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Student",
    image: "/zahidaziz.jpg", // You'll need to add these images
    quote: "KIPS has provided me with an excellent learning environment and opportunities to grow both academically and personally.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Parent",
    image: "/testimonial2.jpg",
    quote: "The faculty's dedication to student success and the quality of education here is remarkable.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Alumni",
    image: "/testimonial3.jpg",
    quote: "My time at KIPS laid the foundation for my successful career. The practical knowledge and skills I gained are invaluable.",
  },
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">What People Say About Us</h2>
          <div className="w-24 h-1 bg-[#003366] mx-auto"></div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 -ml-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 -mr-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 relative">
                <Image
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 text-lg italic mb-6">
                "{testimonials[currentSlide].quote}"
              </p>
              <h3 className="text-xl font-semibold text-[#003366]">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-gray-500">
                {testimonials[currentSlide].role}
              </p>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
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

export default TestimonialSection; 