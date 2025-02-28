"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import { motion } from "framer-motion";
import Rector from "@/components/rector";
import { App } from "@/components/card";
import { Montserrat } from "next/font/google";
import CountBox from "@/components/count-box";
import SuccessStories from "@/components/success-stories";
import TestimonialSection from "@/components/testimonial-section";
import Positions from "@/components/positions";
import Campus from "@/components/campus";

const mont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

export default function Home() {
  return (
    <>
      <Hero />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen"
      >
        <div className="flex justify-center items-center min-h-screen bg-gray-900 py-14">
          <video
            autoPlay
            muted
            loop
            className="custom-control z-40 w-auto rounded-[20px] ssm:h-[20rem] md:h-[25rem] md:rounded-[40px] lg:h-[32rem] xl:h-[40rem]"
          >
            <source src="/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.section>

      <section className="flex justify-center shadow-lg h-auto bg-white mt-20">
        <div className="bg-white w-auto rounded-sm mt-4">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            className={`${mont.className} text-center mt-3 font-extrabold text-5xl font-display`}
          >
            Office Bearers
          </motion.h1>
          <motion.div
            className="h-[2px] bg-gray-900 mx-auto mt-2"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <App />
        </div>
      </section>

      <Rector />
      <CountBox />
      <TestimonialSection />
      <SuccessStories />
      <Positions />
      <Campus />
    </>
  );
}
