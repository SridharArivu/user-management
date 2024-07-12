"use client";
import React, { useEffect, useState } from 'react';
import { DndContext, closestCenter, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import KanbanColumn from './KanbanColumn';
import { UserType } from '../../types/UserType';
import axios from "axios";

interface KanbanViewProps {
  users: UserType[];
}

const KanbanView: React.FC<KanbanViewProps> = ({ users }) => {
  const [customers, setCustomers] = useState<UserType[]>([]);
  const [employees, setEmployees] = useState<UserType[]>([]);
  const [partners, setPartners] = useState<UserType[]>([]);

  useEffect(() => {
    setCustomers(users.filter((user) => user.role === "Customer"));
    setEmployees(users.filter((user) => user.role === "Employee"));
    setPartners(users.filter((user) => user.role === "Partner"));
  }, [users]);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 10 } })
  );

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeColumn = findColumn(active.id);
      const overColumn = findColumn(over.id);

      if (activeColumn && overColumn && activeColumn !== overColumn) {
        const activeItems = [...activeColumn.items];
        const overItems = [...overColumn.items];
        const [movedItem] = activeItems.splice(activeItems.findIndex(item => item.id === active.id), 1);
        overItems.splice(overItems.findIndex(item => item.id === over.id) + 1, 0, movedItem);

        updateColumn(activeColumn.id, activeItems);
        updateColumn(overColumn.id, overItems);
        

        const columnName = overColumn.id;
        const userId = active.id;
        try {

          const response = await updateUserRole(userId, columnName);
          
          if (response && response.data && response.data.result) {
           
            setPartners(prevPartners => {
              const updatedUser = response.data.result;
              const index = prevPartners.findIndex(user => user.id === updatedUser.id);
  
              if (index !== -1) {
                const updatedPartners = [...prevPartners];
                updatedPartners[index] = updatedUser;
                return updatedPartners;
              }
              return prevPartners;
            });
            setEmployees(prevPartners => {
              const updatedUser = response.data.result;
              const index = prevPartners.findIndex(user => user.id === updatedUser.id);
  
              if (index !== -1) {
                const updatedPartners = [...prevPartners];
                updatedPartners[index] = updatedUser;
                return updatedPartners;
              }
              return prevPartners;
            });
            setCustomers(prevPartners => {
              const updatedUser = response.data.result;
              const index = prevPartners.findIndex(user => user.id === updatedUser.id);
  
              if (index !== -1) {
                const updatedPartners = [...prevPartners];
                updatedPartners[index] = updatedUser;
                return updatedPartners;
              }
              return prevPartners;
            });
          } else {
            console.error('Error: Invalid response format');
          }
        } catch (error) {
          console.error('Error updating user role:', error);
        }  
      }
    }
  };

  const findColumn = (id: string) => {
    if (customers.find(user => user.id === id)) return { id: 'Customer', items: customers };
    if (employees.find(user => user.id === id)) return { id: 'Employee', items: employees };
    if (partners.find(user => user.id === id)) return { id: 'Partner', items: partners };
    return null;
  };

  const updateColumn = (columnId: string, items: UserType[]) => {
    switch (columnId) {
      case 'Customer':
        setCustomers(items);
        break;
      case 'Employee':
        setEmployees(items);
        break;
      case 'Partner':
        setPartners(items);
        break;
    }
  };


  const updateUserRole = async (userId: string, newRole: string) => {
    try {
     const response =  await axios.put(`/api/user/${userId}`, { userId, newRole });
      return response;
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };
  

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-3 ml-14 h-screen overflow-x-scroll">
        <KanbanColumn id="Customer" title="Customer" items={customers} />
        <KanbanColumn id="Employee" title="Employee" items={employees} />
        <KanbanColumn id="Partner" title="Partner" items={partners} />
      </div>
    </DndContext>
  );
};

export default KanbanView;
