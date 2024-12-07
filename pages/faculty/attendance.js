import React, { useEffect, useState } from "react";
import Facultylayout from "../components/facultylayout";

function AttendanceBody() {
  const [branch, setbranch] = useState("");
  const [subject, setsubject] = useState("");
  const [year, setYear] = useState(0);
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [checkboxList, setCheckboxList] = useState([false]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [branches, setBranches] = useState([]);
  const [courses,setCourses] = useState([])
  useEffect(() => {
    fetchBranch()
    const fetchCourses = async () => {
      await fetch("../../api/Admin/getAllSubjects", {
        method: "GET"
      }).then(res => res.json())
      .then(res => {
        setCourses(res)
        console.log(res)
      })
    }
    fetchCourses();
}, [])
const fetchBranch = async () => {
  await fetch("../../api/Admin/getAllBranch", {
    method: "GET",
    mode: "cors",
}).then(res => res.json())
.then(res => setBranches(res))
}

  // Dummy data for demonstration
  const dummyStudents = [
    { rollno: 1, name: "John Doe", branch: "Computer Science", year: 2020 },
    {
      rollno: 2,
      name: "Alice Smith",
      branch: "Electrical Engineering",
      year: 2021,
    },
    {
      rollno: 3,
      name: "Michael Johnson",
      branch: "Mechanical Engineering",
      year: 2022,
    },
    { rollno: 4, name: "Emily Brown", branch: "Civil Engineering", year: 2023 },
    {
      rollno: 5,
      name: "Emma Wilson",
      branch: "Chemical Engineering",
      year: 2024,
    },
    {
      rollno: 6,
      name: "Daniel Taylor",
      branch: "Computer Science",
      year: 2020,
    },
    {
      rollno: 7,
      name: "Olivia White",
      branch: "Electrical Engineering",
      year: 2021,
    },
    {
      rollno: 8,
      name: "Matthew Martinez",
      branch: "Mechanical Engineering",
      year: 2022,
    },
    {
      rollno: 9,
      name: "Sophia Anderson",
      branch: "Civil Engineering",
      year: 2023,
    },
    {
      rollno: 10,
      name: "James Jackson",
      branch: "Chemical Engineering",
      year: 2024,
    },
  ];

  const branchNames = [
    "CSE",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Physics",
    "Mathematics",
    "Chemistry",
    "Biology",
  ];
  
  const subjectNames = ["OS", "CN", "DBMS"];

  const yearStudents = [2020, 2021, 2022, 2023, 2024];

  // Function to handle marking attendance
  const handleMarkAttendance = (branch, subject, year, selectedStudents) => {
    // Now you can use branch, subject, year, and selectedStudents in this function
    console.log("Branch:", branch);
    console.log("Subject:", subject);
    console.log("Year:", year);
    console.log("Selected Students:", selectedStudents);

    const response = fetch("/api/Faculty/markAttendace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        branch,
        subjectName: subject,
        year,
        selectedStudents: selectedStudents,
      }),
    });

    // if (!response.ok) {
    //   throw new Error("Failed to mark attendance");
    // }

    console.log("Attendance marked successfully");
  };
  // Function to fetch students based on branch and year
  async function getStudentsForYearBranchSection(year, branch) {
    try {
      // Prepare the request body
      const requestBody = {
        branch: branch, // Assuming department is equivalent to branch
        year: year,
      };
      console.log(requestBody);
      // Send a POST request to the backend API
      const response = await fetch("/api/Admin/getStudentByBranch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();
      const students = data.result;
      console.log(data.result);
      setStudents(students); // Update the state with fetched students
      setCheckboxList(Array(students.length).fill(false));
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudents([]); // Reset students state in case of an error
    }
  }
  useEffect(() => {
    console.log(selectedStudents);
  }, [selectedStudents]);
  const handleCheckbox = (student, index) => {
    console.log(student);
    // setSelectedStudents([...selectedStudents, student._id]);
  };

  const handleClickCheck = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="max-w-2xl mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Mark Attendance</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-2">
          <label
            htmlFor="creationDate"
            className="block md-1 font-semibold mb-1"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label htmlFor="branch" className="block font-semibold mb-1">
            Branch:
          </label>
          <select
            id="branch"
            name="branch"
            value={branch}
            onChange={(e) => setbranch(e.target.value)}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          >
            <option value="">Select branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch.departmentName}>
                {branch.departmentName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="year" className="block font-semibold mb-1">
            Year:
          </label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Year</option>
            {yearStudents.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="block font-semibold mb-1">
            Subject:
          </label>
          <select
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Subject</option>
            {courses.map((course, index) => (
              <option key={index} value={course.subjectName}>
                {course.subjectName}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2 flex justify-center items-center mt-2">
          <button
            onClick={() => {
              getStudentsForYearBranchSection(year, branch);
            }}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300"
          >
            Fetch Students
          </button>
        </div>
      </div>

      {students.length > 0 ? (
        <table className="w-full border-collapse border-2 border-gray-400 mt-6 rounded">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Roll no.</th>
              <th className="border border-gray-400 px-4 py-2">Student Name</th>
              <th className="border border-gray-400 px-4 py-2">Present</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.rollno}>
                <td className="border border-gray-200 text-center py-2">
                  {student.rollNumber}
                </td>
                <td className="border border-gray-200 text-center py-2">
                  {student.name}
                </td>
                <td className="border border-gray-200 text-center py-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    // checked={checkboxList[index]}
                    //checked={selectedStudents.includes(student._if)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedStudents([...selectedStudents, student._id]);
                      }
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-6">No students available.</p>
      )}
      <div className="col-span-2 flex justify-center items-center mt-2">
        <button
          onClick={() => {
            handleMarkAttendance(branch, subject, year, selectedStudents);
          }}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300"
        >
          Mark Attendance
        </button>
      </div>
    </div>
  );
}

function Attendance() {
  return (
    <>
      <Facultylayout>
        <AttendanceBody />
      </Facultylayout>
    </>
  );
}

export default Attendance;
