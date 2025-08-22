import { AiFillBell } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { Outlet, Link } from 'react-router-dom';
import { IoMenuOutline } from 'react-icons/io5';
import React, { useState, useRef, useEffect } from 'react';
import Notification from './pages/DashBoardPages/Notification.tsx';


const sideMenuData = [
    { name: 'Feed', path: '/feed' },
    { name: 'My Course', path: '/my-course' },
    { name: 'Assessments', path: '/assessment' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Certification', path: '/certification' },
    { name: 'Messages', path: '/messages' },
    { name: 'Course', path: '/course' },
    { name: 'Settings', path: '/settings' },
    { name: 'Tools', path: '/tools' },

]

const DashBoard = () => {
    const [openNotification, setOpenNotification] = useState(false);
    // const [openMenu, setOpenMenu] = useState(false);
    const dropdownRef = useRef(null);
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenNotification(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <>
            <div className=' flex h-screen'>
                <div className="bg-blue-600 w-2/12 p-2  h-screen text-white  hidden lg:flex lg:flex-row flex-col">
                    <ul className="flex flex-col gap-2 my-6 w-full">
                        {sideMenuData.map((item, index) => (
                            <Link to={item.path} className="flex items-center">
                                <li key={index} className="text-white p-2 hover:bg-white hover:text-black cursor-pointer w-full rounded-md transition-colors">

                                    <span className="text-lg">{item.name}</span>

                                </li>
                            </Link>

                        ))}

                    </ul>
                </div>
                <div className="w-full lg:w-10/12 h-screen">
                    <div className=" px-2 lg:px-8 mb-2 lg:my-4 border-b-[1px] border-gray-300 flex  lg:justify-between items-center lg:h-16 bg-blue-700 text-white lg:bg-white lg:text-black ">

                        <div className='my-2 w-full flex  h-full items-center '>
                            <div className='lg:hidden p-2 font-bold text-white' onClick={() => alert("Menu clicked!")}>
                                <IoMenuOutline size={30} />
                            </div>
                            <div className='flex flex-col lg:flex-row  p-1'>
                                <h1 className='lg:hidden text-xl font-bold'>EduVerse</h1>
                                <div>
                                    <h1 className='font-bold text-md capitalize lg:hidden flex'>Welcome Back Rolake</h1>
                                    <h1 className='font-bold text-2xl capitalize hidden lg:flex '>Welcome back, <span className='text-blue-600'>Rolake</span> !</h1>
                                    <h5 className='text-[11px]'>Here is what is happening with your studies today.</h5>
                                </div>
                            </div>
                        </div>
                        {/* // <img src={eduverseLabsLogo} alt="Eduverse Labs Logo" className='max-w-20' />  */}
                        <div className='flex items-center  '>
                            <div className='p-4 lg:p-2 cursor-pointer' onClick={() => setOpenNotification((prev) => (!prev))} ><AiFillBell size={25} /></div>
                            <div className='items-center  text-black px-1 mr-10  h-10 p-4 rounded-lg border border-black hidden lg:flex'>
                                <p className='px-4 py-2  '>Rolake</p>
                                <p className='  text-2xl text-[#0CF37F]'><BsDot size={35} />
                                </p>
                            </div>

                        </div>
                    </div>
                    <Outlet />
                    <div className=''>
                        <div className={`absolute right-0 -top-4 w-full h-full md:w-1/2 lg:w-1/3  rounded-lg shadow-lg border border-gray-200 z-50 bg-white ${openNotification ? 'block' : 'hidden'}`} ref={dropdownRef}>
                            <Notification />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashBoard