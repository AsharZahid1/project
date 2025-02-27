"use client";
import Image from "next/image";
import heroImage from "../assets/heroimage.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="flex flex-col items-center text-center -mt-16 sm:-mt-32 z-10">
        <h1 className="pb-4 sm:pb-6 text-3xl sm:text-4xl md:text-7xl font-black tracking-tight">
          <span className="text-gray-900">Al-Aziz</span>{" "}
          <span className="text-white">Leaders</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display -mt-2 sm:-mt-3">
          School & College of
        </h2>
        <h2 className="pt-2 sm:pt-3 text-xl sm:text-2xl md:text-4xl font-black tracking-tight leading-[1.15] font-display text-gray-900 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-gray-900 w-fit">
          Modern Sciences
        </h2>
      </div>

      <Button className="flex items-center mt-8 sm:mt-16 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transform transition-all duration-300 hover:scale-105 rounded-full font-bold text-sm sm:text-base px-4 py-2">
        <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-900" />
        <Link href="/signup">Apply Now</Link>
      </Button>

      <Image
        src={heroImage}
        alt="blogs"
        className="w-screen h-screen object-cover object-top opacity-80 absolute top-0 -z-10 animate-zoom-brightness"
        priority
      />
    </div>
  );
}
