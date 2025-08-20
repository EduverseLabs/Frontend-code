import React from 'react'
// import { AiFillBell } from "react-icons/ai";
// import { BsDot } from "react-icons/bs";
import Feed from './pages/DashBoardPages/Feed.tsx';
// import { Route, Routes } from 'react-router-dom';

//@ts-ignore



const sideMenuData = [
    { name: 'Feed', path: '/dashboard/feed' },
    { name: 'My Course', path: '/dashboard/my-course' },
    { name: 'Assessments', path: '/dashboard/assessment' },
    { name: 'Attendance', path: '/dashboard/attendance' },
    { name: 'Certification', path: '/dashboard/certification' },
    { name: 'Messages', path: '/dashboard/messages' },
    { name: 'Course', path: '/dashboard/course' },
    { name: 'Settings', path: '/dashboard/settings' },
    { name: 'Tools', path: '/dashboard/tools' },

]

const DashBoard = () => {
    return (
        <>
            <div className=' flex h-screen'>
                <div className="bg-blue-600 w-2/12 p-4 h-screen text-white  hidden lg:flex lg:flex-row flex-col">
                    <ul className="flex flex-col gap-2 my-6 w-full">
                        {sideMenuData.map((item, index) => (
                            <li key={index} className="text-white p-2 hover:bg-white hover:text-black cursor-pointer w-full rounded-md transition-colors">
                                {item.name}
                            </li>

                        ))}

                    </ul>
                </div>
                <div className="w-full lg:w-10/12 h-screen">
                    
                    <div >
                        <Feed/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard