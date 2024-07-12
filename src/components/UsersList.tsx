"use client";
import React from "react";
import GridView from "./Views/GridView";
import KanbanView from "./Views/KanbanView";
import ListView from "./Views/ListView";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { setView } from "@/Redux/Slices/Customize-slice";
import SortByUser from "@/components/SortByUser";
import {UserType} from "@/types/UserType"

interface UsersListProps {
  users: UserType[];
}


const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const view = useSelector((state: RootState) => state.customize.view);

  return (
    <>
      {view === "Grid" && <SortByUser />}

      <div className=" w-full  h-screen overflow-x-hidden ">
        {/* <ListView/> */}
        {view === "Kanban" && <KanbanView users={users} />}
        {view === "Grid" && <GridView users={users} />}
      </div>
    </>
  );
};

export default UsersList;
