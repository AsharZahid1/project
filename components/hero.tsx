import Image from "next/image";
import heroImage from "../assets/heroimage.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center text-center -mt-32">
        <h1 className="pb-2 text-4xl sm:text-7xl font-black tracking-tight">
          <span className="text-gray-900">Al-Aziz</span>{" "}
          <span className="text-white">Leaders</span>
        </h1>
        <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display -mt-2">
          School & College of
        </h2>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-[1.15] font-display text-gray-900 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-gray-900">
          Modern Sciences
        </h2>
      </div>

      <Button className="flex items-center mt-16 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transform transition-all duration-300 hover:scale-105 rounded-full font-bold">
        <Mail className="mr-2 h-4 w-4" />
        <Link href="/signup">Apply Now</Link>
      </Button>

      <Image
        src={heroImage}
        alt="blogs"
        className="w-screen h-screen object-cover object-top opacity-80 absolute top-0 -z-10 brightness-50 animate-breathe"
      />
    </div>
  );
}
