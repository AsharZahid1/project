"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Rector() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const paragraphs = [
    "I take this opportunity to welcome you as a prospective admission seeker in our college. There is a great vision behind this edifice of excellence, which has attained this status in a short time by the grace of Allah Almighty.",
    "Our College provides a balanced blend of academic, social, moral, and intellectual development to its students. We are providing quality education compared to the best institutions at an affordable cost. We aim at giving our nation good citizens, competent individuals, and Muslims of good faith.",
    "Our college offers its students the best available facilities and an open, forward-looking mindset to enable the young to realize their potentials and grow into self-respecting and self-confident patriotic Pakistanis.",
    "In the end, I assure you that my dedicated team is working with full devotion, sincerity, and utmost hard work to achieve a level of excellence. May Allah be with all of us.",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % paragraphs.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + paragraphs.length) % paragraphs.length
    );
  };

  return (
    <div className="relative bg-white py-8 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Image positioned to overlap - adjusted dimensions */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-4 sm:left-12 -top-16 sm:-top-24 md:-top-28 lg:-top-32 z-10"
          >
            <div
              className="h-[35vh] w-[25vh] 
                          sm:h-[45vh] sm:w-[35vh] 
                          md:h-[55vh] md:w-[40vh] 
                          lg:h-[75vh] lg:w-[55vh] 
                          xl:h-[85vh] xl:w-[65vh] 
                          overflow-hidden rounded-3xl sm:rounded-[3rem] border-4 sm:border-8 border-white shadow-xl"
            >
              <Image
                src="/zahidaziz.jpg"
                alt="Prof. Abdul Aziz Haqqani"
                width={1000}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Main content div - adjusted padding */}
          <motion.div
            className="bg-gray-900 rounded-3xl overflow-hidden pt-[40vh] sm:pt-[35vh] md:pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {/* Empty column for image spacing */}
              <div className="hidden sm:block relative" />

              {/* Content column */}
              <div className="col-span-1 sm:col-span-2 p-6 sm:p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 sm:mb-6">
                    Message from Chief Executive
                  </h2>

                  {/* Mobile Slider */}
                  <div className="block sm:hidden">
                    <div className="relative min-h-[200px]">
                      <motion.p
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="text-base leading-7 text-gray-300"
                      >
                        {paragraphs[currentSlide]}
                      </motion.p>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                      {paragraphs.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentSlide === index
                              ? "bg-white w-4"
                              : "bg-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Desktop View */}
                  <div className="hidden sm:block space-y-4 text-gray-300">
                    {paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-base leading-7">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-lg font-semibold text-white">
                      Prof. Abdul Aziz Haqqani
                    </p>
                    <p className="text-base text-gray-300">Chief Executive</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
