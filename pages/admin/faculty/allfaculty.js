import React,{useEffect, useState} from 'react'
import Adminlayout from '../../components/adminlayout'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';



function AllFacultyBody(){
    const [faculty, setFaculty] = useState([]);
    useEffect(() => {
      const fetchFaculty = async () => {
        await fetch("../../api/Admin/getAllFaculty", {
          method: "GET",
        }).then(res => res.json())
        .then(res => setFaculty(res))
      }
      fetchFaculty();
    }, [])
    useEffect(() => {
      console.log(faculty)
    }, [faculty])
    const dummyFaculty = [
        { rollno: 1, name: 'John Doe', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
        { rollno: 2, name: 'Alice Smith', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
        { rollno: 3, name: 'Michael Johnson', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
        { rollno: 4, name: 'Emily Brown', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
        { rollno: 5, name: 'Emma Wilson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] },
        { rollno: 6, name: 'Daniel Taylor', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
        { rollno: 7, name: 'Olivia White', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
        { rollno: 8, name: 'Matthew Martinez', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
        { rollno: 9, name: 'Sophia Anderson', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
        { rollno: 10, name: 'James Jackson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] }
    ];
    return(
        <div className="container mx-auto">
            <button className='font-bold text-sm text-yellow-500'><Link href="/admin/facultys"> <ArrowBackIosIcon/>Back </Link></button>
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">All Faculty</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md overflow-auto max-h-[450px]">
          <thead className="bg-gray-500 text-black border-white">
            <tr>
              <th className="px-4 py-2 text-center">Roll No.</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Branch</th>
              <th className="px-4 py-2 text-center">Year</th>
              <th className="px-4 py-2 text-center">Subjects</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 max-h-[450px] overflow-auto">
            {faculty.map((Faculty) => (
              <tr key={Faculty.rollno}>
                <td className="border px-4 py-2 text-center text-sm">{Faculty.rollno}</td>
                <td className="border px-4 py-2 text-sm">{Faculty.name}</td>
                <td className="border px-4 py-2 text-sm">{Faculty.branch}</td>
                <td className="border px-4 py-2 text-sm">{Faculty.year}</td>
                {/* <td className="border px-4 py-2 text-sm">{Faculty.subjects.join(', ')}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

function AllFaculty() {
  return (
    <Adminlayout>
        <AllFacultyBody/>
    </Adminlayout>
  )
}

export default AllFaculty

