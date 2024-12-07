import React, { useState } from 'react'
import Facultylayout from '../components/facultylayout'
import EditNoteIcon from '@mui/icons-material/EditNote';

function UpdateProfileBody(){

    const facultyInfo = { //fetch data from backend here
        name: "John Doe",
        email: "johndoe@example.com",
        gender: "Male",
        branch: "Computer Science",
        designation: "Professor",
        contactNumber: "+1234567890",
        dob: "January 1, 1980",
        joiningYear: "2010",
      };

    const [name, setName] = useState(facultyInfo.name);
    const [gender, setGender] = useState(facultyInfo.gender);
    const [branch, setBranch] = useState(facultyInfo.branch);
    const [designation, setDesignation] = useState(facultyInfo.designation);
    const [contactNumber, setContactNumber] = useState(facultyInfo.contactNumber);
    const [dob, setDob] = useState(facultyInfo.dob);
    const [joiningYear, setJoiningYear] = useState(facultyInfo.joiningYear);

    const handleSubmit=()=> {
        alert("updated")
        //push data to backend
    }


    return(
        
        <div className="max-w-screen-lg mx-auto px-4 ">          
            <form onSubmit={handleSubmit}>  
      <h2 className="text-2xl font-bold mb-4 text-blue-600"><EditNoteIcon className='text-4xl pb-1'/> Update Faculty Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="email"
            value={facultyInfo.email}
            readOnly
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 font-bold mb-2">Gender:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Branch:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Designation:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Number:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Date of Birth:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required           
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Joining Year:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            value={joiningYear}
            onChange={(e) => setJoiningYear(e.target.value)}
            required
          />
          </div>
          
        </div>
        <div className='flex items-center justify-center w-full mt-4'>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
      </div>
      </form>
      </div>
     

      
    )
}

function updateprofile() {
  return (
    <Facultylayout>
        <UpdateProfileBody/>
    </Facultylayout>
  )
}

export default updateprofile
