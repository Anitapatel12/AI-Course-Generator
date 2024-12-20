"use client"

import { Progress } from '@/components/ui/progress';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { BsStack } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";


function SideBar() {
    const Menu=[
        {
           id:1,
           name:'Home',
           icon:<FaHome />,
           path:'/dashboard'
        },
        {
            id:1,
            name:'Explore',
            icon:<BsStack />,
            path:'/dashboard/explore'
         },
         {
            id:1,
            name:'Upgrade',
            icon:<GoShieldCheck />,
            path:'/dashboard/upgrade'
         },
         {
            id:1,
            name:'Logout',
            icon:<IoMdLogOut />,
            path:'/dashboard/logout'
         }
    ]

    const path=usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/logo.svg'} width={160} height ={100}/>
        <hr className='my-5'/>

        <ul>
            {Menu.map((item, index) => (
                <Link key={item.id || index}  href={item.path}>
                <div className={`flex items-center gap-2 text-gray-600 
                p-3 cursor-pointer hover:bg-gray-100
                 hover:text-black rounded-lg mb-2 ${item.path==path && 'bg-gray-100 text-black'}`}>
                <div className='text-2xl'>{item.icon}</div>
                    <h2>{item.name}</h2>
                </div>
                </Link>
            ))}

        </ul>
        <div className='absolute bottom-10 w-[80%]'>
          <Progress value={55} />
          <h2 className='text-sm my-2'>3 Out of 5 course created</h2>
          <h2 className='text-xs text-gray-500'> Upgrade your plan for unlimited course generation</h2>
        </div>
    </div>
  )
}

export default SideBar