"use Client"
import React from 'react'
import UserCard from '../UserCard'
import { useSelector } from 'react-redux'
import { RootState } from "@/Redux/store";
import { UserType } from '@/types/UserType';

interface GridViewProps {
  users: UserType[];
}

const GridView: React.FC<GridViewProps> = ({ users }) => {

  const userState = useSelector((state: RootState) => state.customize.user);

  const usersArray = users.filter((user:UserType) => user.role == userState)
  const sortedUsers = (usersArray.length === 0) ? users : usersArray;

  return (
    <div className='grid grid-cols-4 pl-5 mt-5 gap-6'>
      {sortedUsers.map((user,index) => (
          <UserCard 
          user={user}
          key={index}
          />
      ))}
    </div>
  )
}

export default GridView