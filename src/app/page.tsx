import Image from 'next/image'
import { GetServerSideProps } from 'next';
import Customize from '@/components/Customize'
import SortByUser from '@/components/SortByUser'
import UsersList from '@/components/UsersList'
import mongoose from 'mongoose'
import {coonectionStr} from "@/lib/db"
import { User } from '@/lib/model/user'

export const dynamic = "force-dynamic";

export default async function Home() {

  await mongoose.connect(coonectionStr);

  const usersArray = await User.find().exec();

  const users = JSON.parse(JSON.stringify(usersArray));
  
  return (
    <div className=' w-full h-screen '>
      <Customize/>
      <UsersList users={users}/>
    </div>
  )
}

