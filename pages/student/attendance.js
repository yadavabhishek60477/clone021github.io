import React, { useEffect, useState } from 'react'
import StudentLayout from '../components/studentlayout'

function AttendanceContent(){

  const [student, setStudent] = useState({
    subjects:[]
  });

  const dummyStudent = {
    name: 'Sophia Anderson',
    email: 'sophia@example.com',
    rollNo: 'CE102',
    year: 2024,
    subjects: ['Geotechnical Engineering','Environmental Engineering'],
    gender: 'Female',
    branch: 'Civil Engineering',
    contactNumber: '9012345678',
    dob: '1998-04-10'
  }

  useEffect(()=>{
    setStudent(dummyStudent);
  },[])

    return (
      <div className="container mx-auto p-4 overflow-auto">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">Attendance</h1>
        <table className="min-w-full divide-y divide-x border-separate divide-gray-200">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Total Lectures</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Lectures Attended</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Percentage Attended</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {student.subjects.map((subject, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-center">{subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{15+((2*index)+1)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{9+((2*index)+1)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                 {(9+((2*index)+1))*100/(15+((2*index)+1))} %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

function Attendance() {
  return (
    <> 
      <StudentLayout>
        <AttendanceContent/>
      </StudentLayout>
    </>
  )
}

export default Attendance
