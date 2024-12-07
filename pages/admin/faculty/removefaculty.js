import React,{useState} from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

const RemoveFacultyComponent = ({ Faculty, setFaculty }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    rollno: ''
  });
  const [email, setEmail] = useState("")

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

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, rollno } = formData;
    if (!localStorage.getItem("adminToken")) {
      alert("You are not authorized to do so")
      router.push("/admin/adminlogin")
    }
    await fetch("../../api/Admin/deleteFaculty", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        instructorEmail: email,
        adminToken: localStorage.getItem("adminToken")
      })
    }).then(res => res.json())
    .then(res => console.log(res))
    // Check if Faculty exists in the list
     //write logic for removing Faculty
      // alert(`Faculty with roll number ${rollno} removed successfully.`);
    

  };

  return (
    <div className="container mx-auto px-4">
      <button className='font-bold text-sm text-yellow-500'><Link href="/admin/facultys"> <ArrowBackIosIcon/>Back </Link></button>
      <h1 className="mt-4 text-2xl font-bold mb-4 text-red-500">Remove Faculty</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            type="text"
            id="username"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Remove Faculty
          </button>
        </div>
      </form>
    </div>
  );
};

function RemoveFaculty() {
  return (
    <Adminlayout>
        <RemoveFacultyComponent/>
    </Adminlayout>
  )
}

export default RemoveFaculty