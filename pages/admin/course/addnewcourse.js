import React,{useEffect, useState} from 'react'
import Adminlayout from '../../components/adminlayout'
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function AddNewCourseComponent(){
    const [formData, setFormData] = useState({
        subjectName: '',
        subjectCode: '',
        department: '',
        totalLectures: '',
        year: '',
        instructorName: '',
        credits: ''
      });
      const [branches, setBranches] = useState([]);
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
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        await fetch("../../api/Admin/createCourse", {
          body: JSON.stringify(formData),
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
        .then(res => console.log(res))
        // Reset form fields after submission
      };
    
      return (
        <div className="container mx-auto px-4">
            <button className='font-bold text-sm text-yellow-500'><Link href="/admin/courses"> <ArrowBackIosIcon/>Back </Link></button>
          <h1 className="text-2xl font-bold mb-4 text-green-500">Create New Course</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjectName">
                Subject Name
              </label>
              <input
                type="text"
                id="subjectName"
                name="subjectName"
                value={formData.subjectName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjectCode">
                Subject Code
              </label>
              <input
                type="text"
                id="subjectCode"
                name="subjectCode"
                value={formData.subjectCode}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                Department
              </label>
              <select name='department' value={formData.department} onChange={handleChange} className="border rounded px-3 py-2 w-full">
                      <option value="">Select Branch</option>
                      {branches.map((branch,index)=> (
                          <option key={index} value={formData.departmentName}>{branch.departmentName}</option>
                        ))}    
                  </select>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalLectures">
                Total Lectures
              </label>
              <input
                type="number"
                id="totalLectures"
                name="totalLectures"
                value={formData.totalLectures}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">
                Instructor Name
              </label>
              <input
                type="text"
                id="instructorName"
                name="instructorName"
                value={formData.instructorName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credits">
                Credits
              </label>
              <input
                type="text"
                id="credits"
                name="credits"
                value={formData.credits}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Create Course
              </button>
            </div>
          </form>
        </div>
      );
}

function AddNewCourse() {
  return (
    <Adminlayout>
        <AddNewCourseComponent/>
    </Adminlayout>
  )
}

export default AddNewCourse
