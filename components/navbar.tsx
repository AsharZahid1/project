import Image from "next/image";
import React from "react";
import Menu from "./menu";
import SidebarMenu from "./sheet";
import Logo from "@/assets/schoollogo.jpg";
import { IoNotifications } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function navbar() {
  return (
    <header className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] justify-between items-center px-3 py-3">
      <Image
        className="pl-3"
        src={Logo}
        alt="logo"
        height={150}
        width={150}
      />
      <div className="hidden md:flex justify-center gap-x-3">
        <Menu />
      </div>
      <div className="flex justify-center gap-x-3 pr-3">
        <IoNotifications className="h-8 w-10" />
        {/* <RxHamburgerMenu className='md:hidden' /> */}
        <div>
          <SidebarMenu />
        </div>
      </div>
    </header>
  );
}
