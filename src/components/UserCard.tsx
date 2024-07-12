import React from "react";
import Image from "next/image";
import { SlOptionsVertical } from "react-icons/sl";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IoMailOpenOutline, IoCallOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import {UserType} from "@/types/UserType"

import { Draggable } from "react-beautiful-dnd";

interface UserCardProps {
  user: UserType;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  
  return (
    <Card className=" font-sans ">
      <CardHeader className=" flex flex-row w-full justify-between bg-black-50">
        <div className="flex flex-row">
          <Image
            src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720569600&semt=ais_user"
            height="35"
            width="40"
            style={{ objectFit: "cover", borderRadius: "50%" }}
            alt="profile"
          />
          <div className="flex flex-col ml-4">
            <CardTitle className="font-normal">{user?.username}</CardTitle>
            <CardDescription>{user?.location}</CardDescription>
          </div>
          </div>
          <SlOptionsVertical />
       
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <Badge
          className="rounded-sm w-fit pt-1 pb-1"
          style={{ backgroundColor: "#f4edf7", color: "#0070c0" }}
          variant="secondary"
        >
          {user?.role}
        </Badge>

        <div className="flex flex-row items-center gap-2">
            <IoMailOpenOutline/>
            {user?.email}
        </div>
     
          <CardDescription className="flex -flex-row items-center gap-2"> 
            <IoCallOutline/>
            {user?.phone}
        </CardDescription>
       
      
          <CardDescription className="flex -flex-row items-center gap-2">
            <BsBuildings/> 
            {user?.companyName}
        </CardDescription>
        
      </CardContent>

      <CardFooter className="flex flex-row gap-6">
        <Button style={{border:'2px solid black'}} variant="outline" className="gap-2 items-center pl-6 pr-6" >
          <IoCallOutline className="text-black text-md"/>
          Call
        </Button>
        <Button style={{border:'2px solid black'}} variant="outline" className="gap-2 items-center pl-6 pr-6">
          <IoMailOpenOutline className="text-black text-md"/>
          Mail
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
