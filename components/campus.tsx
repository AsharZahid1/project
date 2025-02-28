"use client";
import { motion } from "framer-motion";
import { campuses } from "@/data/campuses";
import bgImage from "@/assets/rm378-02.jpg";

export default function Campus() {
  return (
    <div 
      className="py-16 md:py-24 relative min-h-screen"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: '150% 150%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fixed Heading Column */}
          <div className="relative h-fit md:h-auto">
            <div className="md:sticky top-24 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Vertical Line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-[3px] bg-white absolute left-0 top-0 h-full"
                  viewport={{ once: true }}
                />
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Roboto_Condensed']">
                  Our Campuses
                </h2>
                <p className="mt-4 text-lg text-white font-['Open_Sans']">
                  Explore our network of educational excellence across multiple locations
                </p>
              </motion.div>
            </div>
          </div>

          {/* Cards Column - No Scroll */}
          <div className="grid gap-6">
            {campuses.map((campus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-2 font-['Roboto_Condensed']">
                  {campus.name}
                </h3>
                <div className="space-y-2 text-white/80 font-['Open_Sans']">
                  <p>Head: {campus.headName}</p>
                  <p>Contact: {campus.contact}</p>
                  <p>Address: {campus.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 