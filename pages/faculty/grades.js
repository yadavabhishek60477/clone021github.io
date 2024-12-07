import React from 'react'
import Facultylayout from '../components/facultylayout'
import { useState } from 'react';

function GradesBody() {
  // const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');
  const [students, setStudents] = useState([]);

  // Dummy data for demonstration
  const dummyStudents = [
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
    
    
    const dummySubjects = [
      'Introduction to Computer Science',
      'Electrical Circuits',
      'Thermodynamics',
      'Structural Engineering',
      'Chemical Reactions',
      'Data Structures and Algorithms',
      'Digital Electronics',
      'Fluid Mechanics',
      'Transportation Engineering',
      'Organic Chemistry'
  ];
  
  
    
    // const branchNames = [
    //     'Computer Science',
    //     'Electrical Engineering',
    //     'Mechanical Engineering',
    //     'Civil Engineering',
    //     'Chemical Engineering',
    //     'Biomedical Engineering',
    //     'Physics',
    //     'Mathematics',
    //     'Chemistry',
    //     'Biology',
    // ];
  
    const yearStudents = [
        2020,2021,2022,2023,2024
      ];

      const fetchStudents = () => {
        const filteredStudents = dummyStudents.filter(student => {

            return ((student.subjects.includes(subject)) && (student.year == parseInt(year)));
        });
        setStudents(filteredStudents);
    };

    const handleGradeChange = (rollno, event) => {
        const updatedStudents = students.map(student => {
            if (student.rollno === rollno) {
                return { ...student, grade: event.target.value };
            }
            return student;
        });
        setStudents(updatedStudents);
    };

    const handleSubmitGrades = () => {
        // Here you can perform actions to submit grades
        alert('Grades submitted:', students);
    };

    return (
      <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Grade Students</h2>
          <div className="flex mb-4">
              {/* <div className="mr-4">
                  <label className="block mb-2">Branch:</label>
                  <select value={branch} onChange={(e) => setBranch(e.target.value)} className="border rounded px-3 py-2 w-48">
                      <option value="">Select Branch</option>
                      {branchNames.map((branch,index)=> (
                          <option key={index} value={branch}>{branch}</option>
                        ))}
                  </select>
              </div> */}
              <div className="mr-4">
                  <label className="block mb-2">Year:</label>
                  <select value={year} onChange={(e) => setYear(e.target.value)} className="border rounded px-3 py-2 w-48">
                      <option value="">Select Year</option>
                      {yearStudents.map((year,index)=> (
                          <option key={index} value={year}>{year}</option>
                        ))}    
                  </select>
              </div>
              <div className="mr-4">
                  <label className="block mb-2">Subject:</label>
                  <select value={subject} onChange={(e) => setSubject(e.target.value)} className="border rounded px-3 py-2 w-72">
                      <option value="">Select subject</option>
                      {dummySubjects.map((subject,index)=> (
                          <option key={index} value={subject}>{subject}</option>
                        ))}    
                  </select>
              </div>
          </div>
          <button onClick={fetchStudents} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Fetch Students</button>
          {students.length > 0 &&
              <div>
                  <h3 className="text-xl font-bold mb-2">Students for Grading</h3>
                  <form action="" onSubmit={handleSubmitGrades}>
                  <table className="border-collapse w-full mb-4 border-2">
                      <thead>
                          <tr>
                              <th className="border px-4 py-2">Roll No</th>
                              <th className="border px-4 py-2">Name</th>
                              <th className="border px-4 py-2">Grade</th>
                          </tr>
                      </thead>
                      <tbody>
                          {students.map(student => (
                              <tr key={student.rollno}>
                                  <td className="border px-4 py-2 text-center">{student.rollno}</td>
                                  <td className="border px-4 py-2 text-center">{student.name}</td>
                                  <td className="border px-4 py-2 text-center">
                                      {/* <input type="option" value={student.grade} onChange={(e) => handleGradeChange(student.rollno, e)} className="border rounded px-2 py-1 w-16" /> */}
                                      <select required value={student.grade} onChange={(e) => handleGradeChange(student.rollno,e)} className="border rounded py-1 text-center px-2">
                      <option value="">Select grade</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="P">P</option>
                      <option value="F">F</option>   
                  </select>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>

                  <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit Grades</button>
                  </form>
              </div>
          }
      </div>
  );

}




function Grades() {
  return (
      <Facultylayout >
        <GradesBody/>
        </Facultylayout>
  )
}

export default Grades
