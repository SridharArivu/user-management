"use client";
import { useState } from "react";
import { FaToggleOff } from "react-icons/fa";

import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

const SideNavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      style={{
        width: toggle ? "13vw" : "4.6vw",
        backgroundColor: "#0070c0",
      }}
      className="flex flex-shrink-0 statiic flex-col gap-6 items-center justify-start h-full text-white p-4 overflow-x-hidden transition-width duration-300 ease-in-out bg-0070c0"
    >
      <div onClick={() => setToggle(!toggle)} className=" cursor-pointer">
        {toggle ? (
          <div  className="flex flex-row w-full justify-around gap-4 items-center">
            {" "}
            <FaToggleOff className="text-xl " /> Datanue{" "}
            <IoIosArrowBack className="ml-auto text-xl" />{" "}
          </div>
        ) : (
          <FaToggleOff className="text-xl" />
        )}
      </div>

      <div className="flex flex-row items-center border-2 gap-2 border-white pl-2 pr-2 pt-1 pb-1 mr-auto rounded-3xl justify-between cursor-pointer ">
        <MdOutlineDashboard className="text-lg" /> {toggle && "Dashboard"}
      </div>
      
      <div className="flex flex-row items-center border-2 gap-2 border-white pl-2 pr-2 pt-1 pb-1 mr-auto rounded-3xl justify-between  cursor-pointer ">
        <RiContactsLine className="text-lg" /> {toggle && "Contacts"}
      </div>
      <div className="flex flex-row items-center border-2 gap-2 border-white pl-2 pr-2 pt-1 pb-1 mr-auto rounded-3xl justify-between  cursor-pointer ">
        <RiContactsLine className="text-lg" /> {toggle && "Contacts"}
      </div>
      <div className="flex flex-row items-center border-2 gap-2 border-white pl-2 pr-2 pt-1 pb-1 mr-auto rounded-3xl justify-between  cursor-pointer ">
        <RiContactsLine className="text-lg" /> {toggle && "Contacts"}
      </div>
      <div className="flex flex-row items-center border-2 gap-2 border-white pl-2 pr-2 pt-1 pb-1 mr-auto rounded-3xl justify-between  cursor-pointer ">
        <RiContactsLine className="text-lg" /> {toggle && "Contacts"}
      </div>
      
    </div>
  );
};

export default SideNavBar;
