"use client"
import Image from "next/image";
import Hero from "@/components/hero";

import {App} from "@/components/card"
import {Montserrat} from "next/font/google"
import CountBox from "@/components/count-box"
import SuccessStories from "@/components/success-stories"
import TestimonialSection from "@/components/testimonial-section"

const mont = Montserrat({
weight:"700",
subsets:["latin"],
style:"normal"
});
 
export default function Home() {
  return (
    <>
     <Hero/>

     <section className="min-h-screen">
      <div className="flex justify-center items-center min-h-screen bg-black">
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
      </section>
      
     <section className=" flex justify-center shadow-lg  h-auto bg-gray-800" >
      <div className="bg-white w-auto rounded-sm mt-4">
        <h1 className={`${mont.className} text-center mt-3 font-bold text-3xl`}>Office Bearers</h1>
            <App/>
      
       
          
         </div>

     </section>
     <CountBox />
     <TestimonialSection />
     <SuccessStories />
   </>
  );
}
