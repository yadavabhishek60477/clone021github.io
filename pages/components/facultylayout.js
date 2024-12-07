import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ChecklistIcon from '@mui/icons-material/Checklist';
import EditNoteIcon from '@mui/icons-material/EditNote';

function Facultylayout({children}) {
  const router = useRouter();
  const logoutFunction = async() => {
    
    const logoutinput = window.confirm("Do You Want to Logout Faculty ?");
    if(logoutinput){
      await router.push("/faculty/facultylogin").then()
    }
  }


  return (
        <div className='flex items-center justify-center w-full'>
        <div className="flex h-[96vh] w-[96vw] mx-[2vw] my-[2vh] bg-gray-100 rounded-3xl pr-4 shadow-xl border-2 border-gray-100">
          {/* Sidebar */}
          <aside className="w-12 sm:w-36 md:w-64 bg-gray-800 rounded-l-3xl px-4 overflow-auto ">
            <div className="h-full flex flex-col justify-between">
              {/* Sidebar content */}
              <div className="py-4">
                <h1 className="text-white text-[32px] font-bold px-4 mb-4">Faculty Portal</h1>
                <ul className="text-white ">
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href="/faculty/dashboard" ><div className='py-2 '><HomeIcon className='pb-1'/> Dashboard</div></Link> </li>
                  <li className="my-2  px-4 hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href="/faculty/profile" ><div className='py-2'><PersonIcon className='pb-1'/> Profile</div></Link> </li>
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href='/faculty/assignments' ><div className='py-2'><AddIcon/> Create Assignment</div></Link></li>
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href="/faculty/grades" ><div className='py-2'><CreditScoreIcon className='pb-1'/> Grades</div></Link> </li>
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer">  <Link href="/faculty/attendance" ><div className='py-2'><ChecklistIcon className='pb-1'/> Attendance</div></Link></li>
                  {/* <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer rounded-xl font-bold color-gray-300">  <Link href="/faculty/updateprofile" ><div className='py-2'><EditNoteIcon /> Update Profile</div></Link></li> */}
                </ul>
              </div>
              {/* Sidebar footer */}
              <div className="flex w-full items-start justify-center flex-col py-4 gap-2">
                <button onClick={()=>{
                  router.push("/faculty/updatepassword")
                }} className="bg-gray-700 text-yellow-500 py-2 px-4 rounded-lg hover:bg-gray-600">
                  Update Password
                </button>
                <button onClick={logoutFunction} className="bg-gray-700 font-semibold text-red-500 py-2 px-4 rounded-lg hover:bg-gray-600">
                  Logout
                </button>
              </div>
            </div>
          </aside>
    
          {/* Main content */}
          <main className="flex-1 p-4 overflow-auto my-2">
            
            {children}
    
          </main>
        </div>
        </div>
  )
}

export default Facultylayout
