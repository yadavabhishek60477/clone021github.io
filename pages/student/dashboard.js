import React,{useState,useEffect} from 'react'
import StudentLayout from '../components/studentlayout'

function DashboardContent(){
  const [student, setStudent] = useState({});

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
    setStudent(dummyStudent)
  },[])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Student Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={student.email}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNo">
            Roll No
          </label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={student.rollNo}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
            Year
          </label>
          <input
            type="text"
            id="year"
            name="year"
            value={student.year}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjects">
            Subjects
          </label>
          <input
            type="text"
            id="subjects"
            name="subjects"
            value={student.subjects}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={student.gender}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
            Branch
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={student.branch}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={student.contactNumber}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth (DOB)
          </label>
          <input
            type="text"
            id="dob"
            name="dob"
            value={student.dob}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
    </div>
  );
}

function dashboard() {
  return (
    <> 
      <StudentLayout>
        <DashboardContent/>
      </StudentLayout>
    </>
  )
}

export default dashboard
