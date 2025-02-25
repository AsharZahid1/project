"use client"

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { campuses } from "@/data/campuses";
import { notFound } from "next/navigation";
import { use } from 'react';

export default function CampusPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params using React.use()
  const resolvedParams = use(params);
  const campus = campuses.find((c) => c.id === resolvedParams.id);

  if (!campus) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] w-full"
      >
        <Image
          src={campus.images[0]}
          alt={campus.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-10 left-10 text-5xl font-bold"
        >
          {campus.name}
        </motion.h1>
      </motion.div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Details */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Campus Information</h2>
              <div className="space-y-3">
                <p><span className="font-semibold">Campus Head:</span> {campus.headName}</p>
                <p><span className="font-semibold">Contact:</span> {campus.contact}</p>
                <p><span className="font-semibold">Address:</span> {campus.address}</p>
              </div>
            </div>
            
            {campus.description && (
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4">About Campus</h2>
                <p>{campus.description}</p>
              </div>
            )}
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src={campus.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* Image Gallery */}
        {campus.images.length > 1 && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-8">Campus Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {campus.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    hover: { duration: 0.2 }
                  }}
                  className="relative h-64 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${campus.name} image ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">
                      {image.split('/').pop()?.split('.')[0].replace(/-/g, ' ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 