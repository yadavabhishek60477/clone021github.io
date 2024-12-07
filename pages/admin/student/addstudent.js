import React, { useEffect, useState } from 'react';
import Adminlayout from '../../components/adminlayout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';

const AddStudentForm = () => {
  const [student, setStudent] = useState({
    name:'',
    email:'',
    dob:'',
    rollNumber: '',
    branchName: '',
    year: '',
    contactNumber: ''
  });
  const [branches, setBranches] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value
    }));
  };
  // useEffect(() => {
  //   console.log("Students:", student)
  //   console.log("branches", branches)
  // }, [student, branches])

  useEffect(() => {
      fetchBranch()
  }, [])
  const fetchBranch = async () => {
    await fetch("../../api/Admin/getAllBranch", {
      method: "GET",
      mode: "cors",
  }).then(res => res.json())
  .then(res => setBranches(res))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!student.rollNumber || !student.name || !student.branchName || !student.year || student.contactNumber.length !== 10) {
      alert('Please fill in all fields');
      return;
    }
    // Call the parent component's function to add the new student
    await fetch("../../api/Admin/addStudent", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student)
    }).then(res => res.json())
    .then(res => console.log(res))
    // Clear form fields after submission
    // setStudent({
    //   name:'',
    //   email:'',
    //   dob:'',
    //   rollNumber: '',
    //   branch: '',
    //   year: '',
    //   contactNumber: 0
    // });
  };

  return (
    <div className="container mx-auto px-4">
      <button className='font-bold text-sm text-yellow-500'><Link href="/admin/students"> <ArrowBackIosIcon/>Back </Link></button>
  <h1 className="text-2xl font-bold mb-2 text-center text-green-500">Add New Student</h1>
  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
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
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollno">
        Email
      </label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={student.email}
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
        name="rollNumber"
        value={student.rollNumber}
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
        name="dob"
        value={student.dob}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
        Branch Name
      </label>
      <select name='branchName' value={student.branchName} onChange={handleChange} className="border rounded px-3 py-2 w-full">
                      <option value="">Select Branch</option>
                      {branches.map((branch,index)=> (
                          <option key={index} value={branch.departmentName}>{branch.departmentName}</option>
                        ))}    
                  </select>
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
        Contact Number
      </label>
      <input
        type="text"
        placeholder="Contact Number"
        name="contactNumber"
        value={student.contactNumber}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="col-span-full">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Add Student
      </button>
    </div>
  </form>
</div>

  );
};

function AddStudent() {
  return (
    <Adminlayout>
        <AddStudentForm/>
    </Adminlayout>
  )
}

export default AddStudent

