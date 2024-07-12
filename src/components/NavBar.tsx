"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { RiNotification4Line } from "react-icons/ri";
import { LuHelpCircle } from "react-icons/lu";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div style={{borderBottom:'1px solid #aeaeae'}} className="flex flex-row w-full h-fit p-5 bg-white justify-between text-gray-600">
      <div className=" relative h-10 ">
        <Input type="text" placeholder="Search" className="h-10 pl-8" />
        <CiSearch className=" absolute top-1/4 ml-1 text-xl " />
      </div>

    <div className="flex flex-row gap-8">
      <div className="flex flex-row items-center gap-1">
            <RiNotification4Line/>
            Notifications
      </div>
      <div className="flex flex-row items-center gap-1">
        <LuHelpCircle/>
           Help Center
      </div>

      <div className="flex flex-row items-center gap-1">
      <Image
        src="https://i.pngimg.me/thumb/f/720/a8bd1f9386.jpg"
        width={30}
        height={30}
        className=" rounded-2xl border-2  border-black"
        
        alt="Description of image"
      />
        Dana Morris 
        <IoIosArrowDown/>
      </div>
      </div>
    </div>
    
  );
};

export default NavBar;
