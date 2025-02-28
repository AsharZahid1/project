"use client";
import Image from "next/image";
import React from "react";
import Menu from "./menu";
import SidebarMenu from "./sheet";
import Logo from "@/assets/schoollogo-removebg-preview.png";
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";

export default function navbar() {
  return (
    <header className="grid grid-cols-[auto,1fr,auto] justify-between items-center px-2 py-1 sm:px-3 sm:py-2">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          className="pl-2 sm:pl-3 
            h-[30px] w-[60px]                    // mobile size
            sm:h-[40px] sm:w-[80px]             // small screens (640px+)
            md:h-[50px] md:w-[90px]             // medium screens (768px+)
            lg:h-[60px] lg:w-[100px]            // large screens (1024px+)
            xl:h-[70px] xl:w-[110px]            // extra large screens (1280px+)
            object-contain"
          src={Logo}
          alt="logo"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 flex justify-center -mt-1 sm:-mt-2"
      >
        <div className="hidden md:flex justify-center gap-x-1">
          <Menu />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-x-2 sm:gap-x-4 pr-2 sm:pr-3"
      >
        <IoNotifications className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 cursor-pointer hover:text-gray-600 transition-colors" />
        <div>
          <SidebarMenu />
        </div>
      </motion.div>
    </header>
  );
}
