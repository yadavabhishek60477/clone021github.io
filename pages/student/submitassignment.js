import React,{useState} from 'react'
import StudentLayout from '../components/studentlayout'
// const image = require("./")
import a from './a.jpg'
import Image from "next/image"

function SubmitAssignmentContent(){
    const [formData, setFormData] = useState({
        assignmentNo: '',
        subjectCode: '',
        branch: '',
        file: null
      });
    
      // Function to handle form input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Function to handle file upload
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, file });
      };
    
      // Function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission here
        console.log(formData);
        // Reset form fields
        setFormData({
          assignmentNo: '',
          subjectCode: '',
          branch: '',
          file: null
        });
      };
    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-green-500 mb-4">Assignment Submission</h1>
          <Image 
            src={a}
            width={500}
          height={500}
          alt="Picture of the author" 
          />
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-4 gap-y-2">
            {/* <div className="mb-2">
              <label htmlFor="assignmentNo" className="block text-gray-700 text-sm font-bold mb-2">Assignment No.:</label>
              <input
                type="text"
                id="assignmentNo"
                placeholder="Assignment No"
                value={formData.assignmentNo}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="subjectCode" className="block text-gray-700 text-sm font-bold mb-2">Subject Code:</label>
              <input
                type="text"
                id="subjectCode"
                placeholder="Subject Code"
                value={formData.subjectCode}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              /> */}
            {/* </div> */}
            {/* <div className="mb-4"> */}
              {/* <label htmlFor="branch" className="block text-gray-700 text-sm font-bold mb-2">Branch:</label>
              <input
                type="text"
                id="branch"
                placeholder="Branch"
                value={formData.branch}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div> */}
            <div className="mb-4 col-span-2">
              <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Upload File</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      );
}

function SubmitAssignment() {
  return (
    <> 
      <StudentLayout>
        <SubmitAssignmentContent/>
      </StudentLayout>
    </>
  )
}

export default SubmitAssignment
