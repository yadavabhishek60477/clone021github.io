import React,{ useEffect, useState }  from 'react'
import StudentLayout from '../components/studentlayout'

function ResultContent(){
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
        <h1 className="text-2xl font-bold text-red-600 mb-4 text-center">Result</h1>
        <table className="min-w-full divide-x divide-y divide-gray-200 border-separate">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Sl No.</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {student.subjects.map((subject, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-center">{index+1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">B</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

function Result() {
  return (
    <> 
      <StudentLayout>
        <ResultContent/>
      </StudentLayout>
    </>
  )
}

export default Result
