'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedCounter = ({ target, label }: { target: number, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;
        const currentCount = Math.round(progress * target);

        if (currentStep === steps) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(currentCount);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div className="text-center border-r border-gray-400 last:border-none">
      <motion.div 
        ref={ref}
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-white mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {count}+
        </motion.h2>
        <motion.div 
          className="w-16 h-1 bg-white mb-3"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p 
          className="text-white text-lg uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {label}
        </motion.p>
      </motion.div>
    </div>
  );
};

const CountBox = () => {
  const stats = [
    { value: 3500, label: "Students" },
    { value: 250, label: "Faculty Members" },
    { value: 10, label: "Programs" },
    { value: 11, label: "Campuses" }
  ];

  return (
    <div className="w-full bg-[#003366] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} target={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountBox; 