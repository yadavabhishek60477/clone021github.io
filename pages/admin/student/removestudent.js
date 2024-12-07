import React,{useState} from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const RemoveStudentComponent = ({ students, setStudents }) => {
  const [formData, setFormData] = useState({
    username: '',
    rollno: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, rollno } = formData;

    // Check if student exists in the list
     //write logic for removing student
      // alert(`Student with roll number ${rollno} removed successfully.`);
    

    // Clear the form fields
    setFormData({
      username: '',
      rollno: ''
    });
  };

  return (
    <div className="container mx-auto px-4">
      <button className='font-bold text-sm text-yellow-500'><Link href="/admin/students"> <ArrowBackIosIcon/>Back </Link></button>
      <h1 className="mt-4 text-2xl font-bold mb-4 text-red-500">Remove Student</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
            Roll No
          </label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Remove Student
          </button>
        </div>
      </form>
    </div>
  );
};

function RemoveStudent() {
  return (
    <Adminlayout>
        <RemoveStudentComponent/>
    </Adminlayout>
  )
}

export default RemoveStudent