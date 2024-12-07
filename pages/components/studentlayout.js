import React from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';
import AddIcon from '@mui/icons-material/Add';
// import HomeIcon from '@mui/icons-material/Home';
import PublishIcon from '@mui/icons-material/Publish';
import PersonIcon from '@mui/icons-material/Person';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DescriptionIcon from '@mui/icons-material/Description';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function StudentLayout({children}) {

    const router = useRouter();
  const logoutFunction = async() => {
    
    const logoutinput = window.confirm("Do You really want to Logout ?");
    if(logoutinput){
      await router.push("/").then()
    }
  }

    return (
        
        <div className="flex mx-[2vw] my-[2vh] h-[96vh] w-[96vw] shadow-lg shadow-transparent rounded-2xl">
          {/* Sidebar */}
          <div className="bg-gray-800 text-white w-1/4 rounded-l-3xl border-2 border-white">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Student Dashboard</h2>
              <ul className="text-white ">
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href="/student/profile" ><div className='py-2 '><PersonIcon className='pb-1'/> Profile</div></Link> </li>
                  {/* <li className="my-2  px-4 hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href="/admin/students" ><div className='py-2'><PersonIcon className='pb-1'/> Students</div></Link> </li> */}
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href='/student/courses' ><div className='py-2'><AutoStoriesIcon className='pb-1'/> Courses</div></Link></li>
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href='/student/attendance' ><div className='py-2'><DescriptionIcon className='pb-1'/> Attendance</div></Link></li>
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer"> <Link href="/student/result" ><div className='py-2'><CreditScoreIcon className='pb-1'/> Result</div></Link> </li>
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer">  <Link href="/student/feedback" ><div className='py-2'><ChecklistIcon className='pb-1'/> Feedback </div></Link></li>
                  <li className="my-2 px-4  hover:bg-gray-700 hover:rounded-lg cursor-pointer">  <Link href="/student/submitassignment" ><div className='py-2'><PublishIcon className='pb-1'/> Submit Assignment</div></Link></li>
                </ul>
            </div>

            <div className="flex w-full items-start justify-center flex-col py-4 gap-2 pl-6 mb-4">
                <button onClick={()=>{
                  router.push("/student/updatepassword")
                }} className="bg-gray-700 text-yellow-500 py-2 px-4 rounded-lg hover:bg-gray-600">
                  Update Password
                </button>
                <button onClick={logoutFunction} className="bg-gray-700 font-semibold text-red-500 py-2 px-4 rounded-lg hover:bg-gray-600 ">
                  Logout
                </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-4 bg-gray-200 rounded-r-3xl overflow-auto">
            
            
              {children}
            
          </div>
        </div>
        
      );
}

export default StudentLayout;