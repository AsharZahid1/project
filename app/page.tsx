"use client"
import Image from "next/image";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
     <Hero/>

     <section className="min-h-screen mt-[40vh]">
      <div className="flex justify-center items-center min-h-screen">
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
      
     <section className="min-h-screen">
      <div>hello</div>

     </section>
   </>
  );
}
