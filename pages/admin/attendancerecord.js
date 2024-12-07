import React from 'react'
import Adminlayout from '../components/adminlayout'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

function AttendanceRecordComponent(){
    return(
        <>
        <div className='flex items-center justify-center w-full h-full pt-0'>
          <div className='flex flex-col items-center justify-center w-[40%] h-[40%]'>
              <PersonSearchIcon className='w-[80%] h-[80%] text-gray-600'/>
              <div><h1 className='text-3xl font-bold text-yellow-500'>To be Updated Soon !</h1></div>
          </div>
        </div>
        
        </>
    )
}

function AttendanceRecord() {
  return (
    <Adminlayout>
        <AttendanceRecordComponent/>
    </Adminlayout>
  )
}

export default AttendanceRecord