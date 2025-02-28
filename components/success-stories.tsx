"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/heroimage.jpg";
import zahidAziz from "@/assets/zahidaziz.jpg";

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
    setCurrentSlide(
      (prev) => (prev - 1 + successStories.length) % successStories.length
    );
  };

  return (
    <div className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-6 font-['Roboto_Condensed']">
              Our Success Story
            </h2>
            <div className="prose prose-lg mb-8 relative flex">
              {/* Animated Vertical Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[3px] bg-[#003366] absolute left-0 top-0"
                viewport={{ once: true }}
              />

              {/* Content with left padding for line */}
              <div className="pl-8">
                <p className="text-base sm:text-lg leading-relaxed text-[#666666] font-['Open_Sans']">
                  Al-Aziz Education System, established 30 years ago under the
                  patronage of retired principal Abdul Aziz Haqqani, is now the
                  largest educational network in Tehsil Taxila, with 10
                  campuses, a Board of Directors, and over 250 qualified staff
                  members. The institution boasts modern, purpose-built
                  campuses, including a three-story building near Taxila Museum
                  and a state-of-the-art facility with 30 rooms.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mt-4 text-[#666666] font-['Open_Sans']">
                  Recognized by the Federal Board Islamabad, Al-Aziz School
                  consistently achieves excellent matriculation results and has
                  become an official examination center. Upgraded to an
                  intermediate college in 2018, it has acquired land near Taxila
                  Cantt for a future model campus.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mt-4 text-[#666666] font-['Open_Sans']">
                  The school prioritizes religious and moral education through
                  its "Zad-e-Momin" course and adopts modern teaching
                  methodologies by discouraging rote learning and implementing
                  Cambridge-based curricula from Kantab Publishers and Oxford.
                </p>
              </div>
            </div>
            <div className="pl-8">
              <Button className="bg-[#003366] text-white hover:bg-[#002244] transition-all duration-300 px-8 py-3 rounded-full text-sm font-semibold font-['Open_Sans']">
                Read More
              </Button>
            </div>
          </motion.div>

          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative h-[300px] sm:h-[400px] md:h-[500px]"
          >
            {/* Background Image */}
            <div className="absolute left-0 w-[65%] h-full">
              <div className="relative h-full rounded-[20%] overflow-hidden shadow-xl">
                <Image
                  src={heroImage}
                  alt="Campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Foreground Image */}
            <div className="absolute right-6 top-20 w-[65%] h-[100%] ">
              <div className="relative h-full rounded-[20%] overflow-hidden shadow-xl border-8 border-white">
                <Image
                  src={zahidAziz}
                  alt="Prof. Abdul Aziz Haqqani"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
