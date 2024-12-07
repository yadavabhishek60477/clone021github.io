import React,{ useState } from 'react'
import Adminlayout from '../components/adminlayout'
import { useRouter } from 'next/router'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function CoursesComponent(){
  const router = useRouter();

  return(
    <div className="container mx-auto px-4">
    <h1 className='text-3xl text-center text-blue-600 font-bold mb-4'>Courses Info</h1>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">All Courses</h2>
        <AddCircleOutlineIcon className="w-16 h-16"/>
        <button onClick={()=>{router.push("/admin/course/allcourses")}} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">View All Courses</button>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Add Course</h2>
        <RemoveCircleOutlineIcon className="w-16 h-16"/>
        <button onClick={()=>{router.push("/admin/course/addnewcourse")}} className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">Add Course</button>
      </div>
      </div>
      </div>
  )
};

function Courses () {
  return (
    <Adminlayout>
        <CoursesComponent/>
    </Adminlayout>
  )
}

export default Courses;