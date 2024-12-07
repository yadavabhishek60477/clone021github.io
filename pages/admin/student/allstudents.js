import React, { useState, useEffect } from "react";
import Adminlayout from "../../components/adminlayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

function AllStudentsBody() {
  const [students, setStudents] = useState([]);
  // const dummyStudents = [
  //     { rollno: 1, name: 'John Doe', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
  //     { rollno: 2, name: 'Alice Smith', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
  //     { rollno: 3, name: 'Michael Johnson', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
  //     { rollno: 4, name: 'Emily Brown', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
  //     { rollno: 5, name: 'Emma Wilson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] },
  //     { rollno: 6, name: 'Daniel Taylor', branch: 'Computer Science', year: 2020, subjects: ['Introduction to Computer Science', 'Data Structures and Algorithms'] },
  //     { rollno: 7, name: 'Olivia White', branch: 'Electrical Engineering', year: 2021, subjects: ['Electrical Circuits', 'Digital Electronics'] },
  //     { rollno: 8, name: 'Matthew Martinez', branch: 'Mechanical Engineering', year: 2022, subjects: ['Thermodynamics', 'Fluid Mechanics'] },
  //     { rollno: 9, name: 'Sophia Anderson', branch: 'Civil Engineering', year: 2023, subjects: ['Structural Engineering', 'Transportation Engineering'] },
  //     { rollno: 10, name: 'James Jackson', branch: 'Chemical Engineering', year: 2024, subjects: ['Chemical Reactions', 'Organic Chemistry'] }
  // ];
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/Admin/getAllStudents");
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudents();
  }, []);
  return (
    <div className="container mx-auto">
      <button className="font-bold text-sm text-yellow-500">
        <Link href="/admin/students">
          {" "}
          <ArrowBackIosIcon />
          Back{" "}
        </Link>
      </button>
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        All Students
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md overflow-auto max-h-[450px]">
          <thead className="bg-gray-500 text-black border-white">
            <tr>
              <th className="px-4 py-2 text-center">Roll No.</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Branch</th>
              <th className="px-4 py-2 text-center">Year</th>
              {/* <th className="px-4 py-2 text-center">Subjects</th> */}
            </tr>
          </thead>
          <tbody className="bg-gray-100 max-h-[450px] overflow-auto">
            {students.map((student) => (
              <tr key={student.rollno}>
                <td className="border px-4 py-2 text-center text-sm">
                  {student.rollNumber}
                </td>
                <td className="border px-4 py-2 text-sm">{student.name}</td>
                <td className="border px-4 py-2 text-sm">{student.branch}</td>
                <td className="border px-4 py-2 text-sm">{student.year}</td>
                {/* <td className="border px-4 py-2 text-sm">
                  {student.subjects.join(", ")}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AllStudents() {
  return (
    <Adminlayout>
      <AllStudentsBody />
    </Adminlayout>
  );
}

export default AllStudents;