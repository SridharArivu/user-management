import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DraggableUser from "./DraggableUser";
import { UserType } from "./../../types/UserType";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Badge } from "@/components/ui/badge";

interface KanbanColumnProps {
  id: string;
  title: string;
  items: UserType[];
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ id, title, items }) => {
  return (
    <div className="flex flex-col gap-6 w-fit p-4 border-2 mt-4 rounded-md h-fit ">
      <div className="flex flex-row mb-4 justify-between">
        <div className="flex flex-row items-center w-2/4 justify-between">
          <Badge
            className="rounded-m w-9 h-9 pt-1 pb-1 text-sm"
            style={{ backgroundColor: "#f4edf7" }}
            variant="secondary"
          >
            <IoIosArrowUp className="text-zinc-500"/>
          </Badge>

          <Badge
            className="rounded-sm w-fit pt-1 pb-1 text-sm"
            style={{ backgroundColor: "#f4edf7", color: "#0070c0" }}
            variant="secondary"
          >
            {title}
          </Badge>
          <p className="font-semibold">{items.length}</p>
        </div>
        <FaPlus />
      </div>
      <SortableContext
        id={id}
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item) => (
          <DraggableUser key={item.id} user={item} />
        ))}
      </SortableContext>
    </div>
  );
};

export default KanbanColumn;
