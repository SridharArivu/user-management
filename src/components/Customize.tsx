"use client";
import React from "react";
//Assets
import { TbLayoutKanban, TbLayoutList } from "react-icons/tb";
import { FiGrid } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { CgSortAz } from "react-icons/cg";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { setView } from "@/Redux/Slices/Customize-slice";

type Props = {};

const Customize = (props: Props) => {
  const view = useSelector((state: RootState) => state.customize.view);

  const dispatch = useDispatch();

  const handleViewClick = (value: string) => () => {
    dispatch(setView(value));
  };

  return (
    <div
      style={{ borderBottom: "1px solid #aeaeae" }}
      className="h-16 flex flex-row pl-10 items-center justify-between pr-10"
    >
      <div
        className="flex flex-row text-1xl gap-8 h-full"
        style={{ color: "#848484" }}
      >
        <div
          className="flex flex-row  items-center gap-2 relative justify-center cursor-pointer "
          onClick={handleViewClick("List")}
        >
          <TbLayoutKanban className=" text-1xl " />
          List
          {view === "List" && (
            <span
              style={{
                position: "absolute",
                height: "2px",
                width: "140%",
                bottom: "0",
                backgroundColor: "#0070c0",
              }}
            ></span>
          )}
        </div>
        <div
          className="flex flex-row  items-center gap-2 relative justify-center cursor-pointer"
          onClick={handleViewClick("Kanban")}
        >
          <TbLayoutList className=" text-1xl " />
          Kanban
          {view === "Kanban" && (
            <span
              style={{
                position: "absolute",
                height: "2px",
                width: "140%",
                bottom: "0",
                backgroundColor: "#0070c0",
              }}
            ></span>
          )}
        </div>
        <div
          className="flex flex-row  items-center gap-2 relative justify-center cursor-pointer"
          onClick={handleViewClick("Grid")}
        >
          <FiGrid className=" text-1xl " />
          Grid
          {view === "Grid" && (
            <span
              style={{
                position: "absolute",
                height: "2px",
                width: "140%",
                bottom: "0",
                backgroundColor: "#0070c0",
              }}
            ></span>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-5 ">
        <Button
          style={{ border: "1px solid #848484", color: "#848484" }}
          variant="outline"
        >
          <CgSortAz className="text-xl mr-1" />
          Sort By
        </Button>
        <Button
          className="mr-8"
          style={{ border: "1px solid #848484", color: "#848484" }}
          variant="outline"
        >
          <CiFilter className="text-xl mr-1" />
          Filter
        </Button>

        <Button style={{ backgroundColor: "#0070c0" }}>
          <FaPlus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>
    </div>
  );
};

export default Customize;
