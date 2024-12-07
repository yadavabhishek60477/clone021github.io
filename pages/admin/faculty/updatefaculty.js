import React, { useState } from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function UpdateFacultyComponent(){
    const [rollno, setRollno] = useState('');
    const [Faculty, setFaculty] = useState();
   

    const dummyFaculty = [
      { rollno: 1, username:'johndoe', name: 'John Doe', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
      { rollno: 2, username:'alicesmith', name: 'Alice Smith', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
      { rollno: 3, username:'michaeljohnson', name: 'Michael Johnson', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
      { rollno: 4, username:'emilybrown', name: 'Emily Brown', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
      { rollno: 5, username:'emmawilson', name: 'Emma Wilson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] },
      { rollno: 6, username:'danieltaylor', name: 'Daniel Taylor', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
      { rollno: 7, username:'oliviawhite', name: 'Olivia White', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
      { rollno: 8, username:'matthewmatrinez', name: 'Matthew Martinez', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
      { rollno: 9, username:'sophiaanderson', name: 'Sophia Anderson', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
      { rollno: 10, username:'jamesjackson', name: 'James Jackson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] }
  ];



    const handleSubmit=(rollno)=>{
      const filteredFaculty = dummyFaculty.filter(Faculty => {
        return (
            Faculty &&
            Faculty.rollno == rollno
        );
    })
    setFaculty(filteredFaculty[0]);
    console.log(filteredFaculty[0])
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty(prevFaculty => ({
      ...prevFaculty,
      [name]: value
    }));
  };

    return(
        <>
        <button className='font-bold text-sm text-yellow-500'><Link href="/admin/facultys"> <ArrowBackIosIcon/>Back </Link></button>
        <div className="container mx-auto px-4">
      <h1 className="mt-4 text-2xl font-bold mb-4 text-yellow-500">Update Faculty</h1>
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
            Fetch Faculty
          </button>
        </div>
      </div>
      <hr /><hr />
 
    {Faculty && (
    <div className='grid grid-cols-2 gap-3 mt-4'>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Username
      </label>
      <input
        type="text"
        placeholder="Username"
        name="rollno"
        value={Faculty.username}
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
        value={Faculty.password}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Roll No
      </label>
      <input
        type="text"
        placeholder="Rollno"
        name="rollno"
        value={Faculty.rollno}
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
        value={Faculty.name}
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
        value={Faculty.dob}
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
        value={Faculty.branch}
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
        value={Faculty.year}
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
        value={Faculty.subjects}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    </div>) }
    </div>
        </>
    )
}

function UpdateFaculty() {
  return (
    <Adminlayout>
        <UpdateFacultyComponent/>
    </Adminlayout>
  )
}

export default UpdateFaculty
