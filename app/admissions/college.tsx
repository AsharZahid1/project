"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, ScrollText, Shield, FileText, ClipboardCheck, School } from "lucide-react"
import Image from "next/image"
import { CircularDecoration } from "@/components/CircularDecoration"

export default function CollegePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Banner */}
      <div className="relative h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/journey1.jpg" // Use a relevant image for college
            alt="College Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004b87]/90 to-[#004b87]/80" />
          <CircularDecoration />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Text Content */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
              >
                College Admissions
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Begin Your Journey to Excellence
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <p className="text-lg text-gray-300 mb-12">
            {/* Add your content here for college admissions */}
            Welcome to the College Admissions page. Here you will find all the necessary information to enroll in our college program.
          </p>
        </motion.div>
      </section>
    </div>
  )
} 