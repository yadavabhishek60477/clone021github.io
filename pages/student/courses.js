import React, {useState, useEffect } from 'react'
import StudentLayout from '../components/studentlayout'



function CoursesContent(){
  const [student, setStudent] = useState({});
  const [showCourses, setShowCourses] = useState(true)
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [availableCourses,setAvailableCourses] = useState([]);
  const [courses, setCourses] = useState([])
  useEffect(() => {
    if (!localStorage.getItem("studentToken")) router.push("../student/studentlogin")
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
  useEffect(() => {
    const fetchStudent = async () => {
      await fetch("../api/Admin/getStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: localStorage.getItem("studentToken")
        })
      }).then(res => res.json())
      .then(res => {
        setStudent(res.result)
        if (courses.length!== 0) {
          const arr = courses.filter(course => {
            return (
              course.department === res.result.branch && course.year == res.result.year
            )
          })
          console.log(arr)
          setAvailableCourses(arr)
        }
      })
    }
    fetchStudent()
  }, [courses])
  
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

    const dummySubjects = [
      {
        subjectName: 'Mathematics',
        subjectCode: 'MATH101',
        branch: 'Mathematics',
        totalLectures: 30,
        year: 2022,
        attendance: '75%',
        instructorName: 'Dr. Smith',
        credits: 3
      },
      {
        subjectName: 'Computer Science',
        subjectCode: 'CS101',
        branch: 'Computer Science',
        totalLectures: 35,
        year: 2022,
        attendance: '80%',
        instructorName: 'Prof. Johnson',
        credits: 4
      },
      {
        subjectName: 'Electrical Circuits',
        subjectCode: 'EE101',
        branch: 'Electrical Engineering',
        totalLectures: 28,
        year: 2022,
        attendance: '70%',
        instructorName: 'Dr. Anderson',
        credits: 3
      },
      {
        subjectName: 'Digital Electronics',
        subjectCode: 'EE201',
        branch: 'Electrical Engineering',
        totalLectures: 32,
        year: 2022,
        attendance: '75%',
        instructorName: 'Prof. Smith',
        credits: 4
      },
      {
        subjectName: 'Thermodynamics',
        subjectCode: 'ME101',
        branch: 'Mechanical Engineering',
        totalLectures: 27,
        year: 2022,
        attendance: '68%',
        instructorName: 'Dr. Brown',
        credits: 3
      },
      {
        subjectName: 'Fluid Mechanics',
        subjectCode: 'ME201',
        branch: 'Mechanical Engineering',
        totalLectures: 31,
        year: 2022,
        attendance: '72%',
        instructorName: 'Prof. Taylor',
        credits: 4
      },
      {
        subjectName: 'Structural Engineering',
        subjectCode: 'CE101',
        branch: 'Civil Engineering',
        totalLectures: 30,
        year: 2022,
        attendance: '75%',
        instructorName: 'Dr. Martinez',
        credits: 3
      },
      {
        subjectName: 'Transportation Engineering',
        subjectCode: 'CE201',
        branch: 'Civil Engineering',
        totalLectures: 32,
        year: 2022,
        attendance: '78%',
        instructorName: 'Prof. Wilson',
        credits: 4
      },
      {
        subjectName: 'Chemical Reactions',
        subjectCode: 'CH101',
        branch: 'Chemical Engineering',
        totalLectures: 28,
        year: 2022,
        attendance: '70%',
        instructorName: 'Dr. Jackson',
        credits: 3
      },
      {
        subjectName: 'Organic Chemistry',
        subjectCode: 'CH201',
        branch: 'Chemical Engineering',
        totalLectures: 32,
        year: 2022,
        attendance: '75%',
        instructorName: 'Prof. White',
        credits: 4
      }
    ];

  useEffect(()=>{
    setStudent(dummyStudent);
    const coursesMatched = dummySubjects.filter(course => course.branch === dummyStudent.branch);
    setAvailableCourses(coursesMatched)
    console.log(availableCourses)    
    const { branch, year } = student;
},[])

  // Function to handle course selection
  const handleCourseSelect = (e) => {
    const courseId = e.target.value;
    setSelectedCourses((prevSelectedCourses) => {
      // Check if the course is already selected
      const isSelected = prevSelectedCourses.includes(courseId);
      // If not selected, add to the selected courses array
      if (!isSelected) {
        return [...prevSelectedCourses, courseId];
      } else {
        // If selected, remove from the selected courses array
        return prevSelectedCourses.filter((id) => id !== courseId);
      }
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setShowCourses(!showCourses)
    alert("Course Selected Successfully")
  }
  
  
  return(
    
  <div className="container mx-auto p-4">
     <h1 className="text-2xl font-bold text-blue-600 mb-4">Available Courses</h1>
    { showCourses && (<form onSubmit={handleSubmit}>
  
  <table className="min-w-full divide-y divide-gray-200 wrap">
    <thead className="bg-gray-50 ">
      <tr>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Subject Code</th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Subject Name</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {availableCourses.map((course) => (
        <tr key={course.subjectCode}>
          <td className="px-6 py-4 whitespace-nowrap text-xl text-center">
            <input
              type="checkbox"
              id={course.subjectCode}
              value={course.subjectCode}
              onChange={handleCourseSelect}
              className="mr-2 leading-tight"
            />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">{course.subjectCode}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{course.subjectName}</td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* Button to submit selected courses */}
  <button
    type="submit"
    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Register
  </button>
  </form>)}
</div>

  )
}

function Courses() {
  return (
    <StudentLayout>
      <CoursesContent/>
    </StudentLayout>
  );
}

export default Courses
