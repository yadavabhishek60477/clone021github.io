import React, { useEffect,useState} from "react";
import Facultylayout from "../components/facultylayout";
import PersonIcon from "@mui/icons-material/Person";

function ProfileBody() {
  // const facultyInfo = {
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   gender: "Male",
  //   branch: "Computer Science",
  //   designation: "Professor",
  //   contactNumber: "+1234567890",
  //   dob: "January 1, 1980",
  //   joiningYear: "2010",
  // };
  const [userData, setUserData] = useState({ name: "", email: "",branch:"",contact:"",dob:"",joining:""});


  useEffect(() => {
    const token = localStorage.getItem("FacultyToken");
    if (token) {
      // Call your API to fetch details using the token
      fetchDetails(token);
    }
  }, []);

  const fetchDetails = async (token) => {
    try {
      const response = await fetch("/api/token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(
          (data) => 
          setUserData({
            name: data.faculty.name,
            email: data.faculty.email,
            branch:data.faculty.branch,
            contact:data.faculty.contactNumber,
             dob:data.faculty.dob,
            joining:data.faculty.joiningYear,
          })
        );
      // if (response.ok) {
      // const data = await response.json();
      // // Do something with the fetched details
      // console.log("Fetched details:", data);
      // } else {
      //   throw new Error("Failed to fetch details");
      // }
    } catch (error) {
      console.error("Error fetching details:", error);
      // Handle error
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto px-4 ">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        <PersonIcon className="text-4xl pb-1" /> Faculty Profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={userData.name}
            readOnly
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="email"
            value={userData.email}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Branch:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={userData.branch}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Designation:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value="Professor"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Number:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={userData.contact}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Date of Birth:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={userData.dob}
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">
            Joining Year:
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={userData.joining}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

function profile() {
  return (
    <>
      <Facultylayout>
        <ProfileBody />
      </Facultylayout>
    </>
  );
}

export default profile;
