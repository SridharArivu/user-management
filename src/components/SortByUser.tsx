"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { Badge } from "@/components/ui/badge";
import { setUser } from "@/Redux/Slices/Customize-slice";

type Props = {};

const SortByUser = (props: Props) => {
  const user = useSelector((state: RootState) => state.customize.user);
  const dispatch = useDispatch();

  const handleUserClick = (value: string) => () => {
    dispatch(setUser(value));
  };


  return (
    <div
      style={{ borderBottom: "1px solid #aeaeae" }}
      className="h-fit p-3 flex flex-row pl-10 items-center justify-between pr-10"
    >
      <ul
        style={{ color: "#848484" }}
        className="flex flex-row text-1xl gap-8 items-center "
      >
        <li onClick={handleUserClick("AllContacts")} className="cursor-pointer">
          {user === "AllContacts" ? (
            <Badge
              className="rounded-2xl w-fit p-2 px-4 text-black font-semibold text-sm bg-[#efe5e5]"
              variant="secondary"
            >
              All Contacts
            </Badge>
          ) : (
            "All Contacts"
          )}
        </li>
        <li onClick={handleUserClick("Employee")} className="cursor-pointer">
          {user === "Employee" ? (
            <Badge
              className="rounded-2xl w-fit p-2 px-4 text-black font-semibold text-sm bg-[#efe5e5]"
              variant="secondary"
            >
              Employee
            </Badge>
          ) : (
            "Employee"
          )}
        </li>
        <li onClick={handleUserClick("Partner")} className="cursor-pointer">
          {user === "Partner" ? (
            <Badge
              className="rounded-2xl w-fit p-2 px-4 text-black font-semibold text-sm bg-[#efe5e5]"
              variant="secondary"
            >
              Partners
            </Badge>
          ) : (
            "Partners"
          )}
        </li>
        <li onClick={handleUserClick("Customer")} className="cursor-pointer">
          {user === "Customer" ? (
            <Badge
              className="rounded-2xl w-fit p-2 px-4 text-black font-semibold text-sm bg-[#efe5e5]"
              variant="secondary"
            >
              Customers
            </Badge>
          ) : (
            "Customers"
          )}
        </li>
      </ul>

      <Button variant="ghost" style={{ color: "#0070c0" }}>
        <FaPlus className="text-1xl mr-1.5" />
        Add Categories
      </Button>
    </div>
  );
};

export default SortByUser;
