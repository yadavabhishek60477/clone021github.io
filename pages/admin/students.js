import React from 'react'
import Adminlayout from '../components/adminlayout';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useRouter } from 'next/router';

function StudentsBody() {
  const router = useRouter()
  return (
    <div className="container mx-auto px-4">
      <h1 className='text-3xl text-center text-blue-600 font-bold mb-4'>Students Info</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Card 1: All Students */}
        <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">All Students</h2>
          <GroupIcon className="w-16 h-16"/>
          {/* Add onClick event handler to navigate to the page showing all students */}
          <button onClick={()=>{router.push("/admin/student/allstudents")}} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">View All Students</button>
        </div>
        {/* Card 2: Add Student */}
        <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Add Student</h2>
          <PersonAddAlt1Icon className="w-16 h-16"/>
          {/* Add onClick event handler to navigate to the page for adding a new student */}
          <button onClick={()=>{router.push("/admin/student/addstudent")}} className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">Add Student</button>
        </div>
        {/* Card 3: Remove Student */}
        <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Remove Student</h2>
          <PersonRemoveIcon className="w-16 h-16" />
          {/* Add onClick event handler to navigate to the page for removing a student */}
          <button onClick={()=>{router.push("/admin/student/removestudent")}} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full">Remove Student</button>
        </div>
        {/* Card 4: Update Student */}
        <div className="flex flex-col items-center justify-center bg-gray-400 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Update Student</h2>
          <BorderColorIcon className="w-16 h-16"/>
          {/* Add onClick event handler to navigate to the page for updating a student */}
          <button onClick={()=>{router.push("/admin/student/updatestudent")}} className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-full">Update Student</button>
        </div>
      </div>
    </div>
  );
}

function students() {
  return (
    <Adminlayout>
      <StudentsBody/>
    </Adminlayout>
  )
}

export default students

