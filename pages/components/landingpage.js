import React from 'react'
import Link from 'next/link'
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Landingpage() {
  return (
    <div className='flex flex-col min-h-screen text-white items-center py-12 px-6 gap-10'>
      <div className='text-5xl font-bold'>Indian Institute of Technology</div>
      <div className='flex gap-10'>

      <div className="flex gap-10 overflow-hidden ">

      <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6 shadow-xl rounded-2xl bg-[#393e46]">
        <h3 className="text-3xl text-center font-bold text-white mb-2">Student Login</h3>
        <div className='flex text-6xl justify-center items-center rounded-full border-4 aspect-square w-1/2 my-4 '><PiStudent/></div>
        <p className="text-md text-gray-200 mb-4">Login to access student features.</p>
        <Link
          href="/student/studentlogin"
          className="transition-all shadow-xl group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-700 hover:bg-purple-800 focus:outline-none hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6 shadow-xl rounded-2xl bg-[#393e46] ">
        <h3 className="text-3xl text-center font-bold text-white mb-2">Faculty Login</h3>
        <div className='flex text-6xl justify-center items-center rounded-full border-4 aspect-square w-1/2 my-4 '><FaChalkboardTeacher/></div>
        <p className="text-md text-gray-200 mb-4">Login to access faculty features.</p>
        <Link
          href="/faculty/facultylogin"
          className=" transition-all shadow-xl group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-700 hover:bg-purple-800 focus:outline-none hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </Link>
      </div>

      <div className='flex fixed top-5 right-5 shadow-xl'>
        <Link href='/admin/adminlogin'>
        <button className='pl-4 pr-2 py-2 rounded-xl bg-purple-700 hover:bg-purple-600 hover:scale-105 transition-all'>
          Admin Login<KeyboardArrowRightIcon/>
        </button>
        </Link>
        </div>


    </div>
  </div>
</div>

  )
}

export default Landingpage


