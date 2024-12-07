import React, { useState } from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function UpdateStudentComponent(){
    const [rollno, setRollno] = useState('');
    const [student, setStudent] = useState();
   

    const dummyStudents = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        rollno: 'CS101',
        year: 2022,
        subjects: ['Mathematics', 'Computer Science', 'Physics'],
        gender: 'Male',
        branch: 'Computer Science',
        contactNumber: '1234567890',
        dob: '1998-05-15'
      },
      {
        name: 'Alice Smith',
        email: 'alice@example.com',
        rollno: 'EE101',
        year: 2023,
        subjects: ['Electrical Circuits', 'Digital Electronics'],
        gender: 'Female',
        branch: 'Electrical Engineering',
        contactNumber: '9876543210',
        dob: '1999-07-20'
      },
      {
        name: 'Michael Johnson',
        email: 'michael@example.com',
        rollno: 'ME101',
        year: 2024,
        subjects: ['Thermodynamics', 'Fluid Mechanics'],
        gender: 'Male',
        branch: 'Mechanical Engineering',
        contactNumber: '8765432109',
        dob: '1997-12-10'
      },
      {
        name: 'Emily Brown',
        email: 'emily@example.com',
        rollno: 'CE101',
        year: 2022,
        subjects: ['Structural Engineering', 'Transportation Engineering'],
        gender: 'Female',
        branch: 'Civil Engineering',
        contactNumber: '2345678901',
        dob: '2000-03-25'
      },
      {
        name: 'Emma Wilson',
        email: 'emma@example.com',
        rollno: 'CH101',
        year: 2023,
        subjects: ['Chemical Reactions', 'Organic Chemistry'],
        gender: 'Female',
        branch: 'Chemical Engineering',
        contactNumber: '7890123456',
        dob: '1998-09-05'
      },
      {
        name: 'Daniel Taylor',
        email: 'daniel@example.com',
        rollno: 'CS102',
        year: 2024,
        subjects: ['Data Structures and Algorithms', 'Web Development'],
        gender: 'Male',
        branch: 'Computer Science',
        contactNumber: '3456789012',
        dob: '1999-11-30'
      },
      {
        name: 'Olivia White',
        email: 'olivia@example.com',
        rollno: 'EE102',
        year: 2022,
        subjects: ['Electromagnetic Theory', 'Power Systems'],
        gender: 'Female',
        branch: 'Electrical Engineering',
        contactNumber: '8901234567',
        dob: '2001-01-20'
      },
      {
        name: 'Matthew Martinez',
        email: 'matthew@example.com',
        rollno: 'ME102',
        year: 2023,
        subjects: ['Heat Transfer', 'Machine Design'],
        gender: 'Male',
        branch: 'Mechanical Engineering',
        contactNumber: '5678901234',
        dob: '1997-08-15'
      },
      {
        name: 'Sophia Anderson',
        email: 'sophia@example.com',
        rollno: 'CE102',
        year: 2024,
        subjects: ['Geotechnical Engineering', 'Environmental Engineering'],
        gender: 'Female',
        branch: 'Civil Engineering',
        contactNumber: '9012345678',
        dob: '1998-04-10'
      },
      {
        name: 'James Jackson',
        email: 'james@example.com',
        rollno: 'CH102',
        year: 2022,
        subjects: ['Chemical Engineering Thermodynamics', 'Process Control'],
        gender: 'Male',
        branch: 'Chemical Engineering',
        contactNumber: '6789012345',
        dob: '2000-06-20'
      }
    ];



    const handleSubmit=(rollno)=>{
      const filteredStudent = dummyStudents.filter(student => {
        return (
            student &&
            student.rollno == rollno
        );
    })
    setStudent(filteredStudent[0]);
    console.log(filteredStudent[0])
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value
    }));
  };

    return(
        <>
        <button className='font-bold text-sm text-yellow-500'><Link href="/admin/students"> <ArrowBackIosIcon/>Back </Link></button>
        <div className="container mx-auto px-4">
      <h1 className="mt-4 text-2xl font-bold mb-4 text-yellow-500">Update Student</h1>
      <div className="max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
            Roll No
          </label>
          <input
            type="text"
            placeholder="Enter Roll No."
            name="rollno"
            value={rollno}
            onChange={(e)=>setRollno(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <button onClick={()=>{handleSubmit(rollno)}}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Fetch Student
          </button>
        </div>
      </div>
      <hr /><hr />
 
    {student && (
      <form onSubmit={handleSubmit}>
    <div className='grid grid-cols-2 gap-3 mt-4'>
    {/* <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Username
      </label>
      <input
        type="text"
        placeholder="Username"
        name="rollno"
        value={student.username}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Password
      </label>
      <input
        type="text"
        placeholder="Password"
        name="rollno"
        value={student.password}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div> */}
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Roll No
      </label>
      <input
        type="text"
        placeholder="Rollno"
        name="rollno"
        value={student.rollno}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={student.name}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
        Date Of Birth
      </label>
      <input
        type="date"
        placeholder="Date Of Birth"
        name="branch"
        value={student.dob}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
        Branch
      </label>
      <input
        type="text"
        placeholder="Branch"
        name="branch"
        value={student.branch}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
        Year
      </label>
      <input
        type="text"
        placeholder="Year"
        name="year"
        value={student.year}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjects">
        Subjects
      </label>
      <input
        type="text"
        placeholder="Subjects"
        name="subjects"
        value={student.subjects}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <button type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            Update Data
          </button>
    </div>
    </form>) }
    </div>
        </>
    )
}

function UpdateStudent() {
  return (
    <Adminlayout>
        <UpdateStudentComponent/>
    </Adminlayout>
  )
}

export default UpdateStudent
