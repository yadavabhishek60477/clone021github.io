import React, { useEffect, useState } from "react";
import Adminlayout from "../../components/adminlayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

const AddFacultyForm = ({ onAddFaculty }) => {
  const [Faculty, setFaculty] = useState({
    name: "",
    dob: "",
    branch: "",
    contactNumber: "",
    joiningYear: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty((prevFaculty) => ({
      ...prevFaculty,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(Faculty);
  }, [Faculty]);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // Validate form fields
    // if (!Faculty.name || !Faculty.branch || !Faculty.year || !Faculty.email) {
    //   alert("Please fill in all fields");
    //   return;
    // }
    // Call the parent component's function to add the new Faculty
    // onAddFaculty(Faculty);
    e.preventDefault();
    const response = await fetch("/api/Admin/addFaculty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Faculty),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    // try {

    //   // if (!response.ok) {
    //   //   throw new Error("Failed to add faculty");
    //   // }

    //   alert("Faculty added successfully");
    //   // Clear form fields after successful submission
    //   // setFaculty({
    //   //   name: "",
    //   //   dob: "",
    //   //   branch: "",
    //   //   contactNumber: "",
    //   //   year: "",
    //   //   email: "",
    //   // });
    // } catch (error) {
    //   console.error(error);
    //   alert("Failed to add faculty");
    // }

    // // Clear form fields after submission
    // setFaculty({
    //   name: "",
    //   dob: "",
    //   branch: "",
    //   contactNumber: "",
    //   year: "",
    //   email: "",
    // });
  };

  return (
    <div className="container mx-auto px-4">
      <button className="font-bold text-sm text-yellow-500">
        <Link href="/admin/facultys">
          {" "}
          <ArrowBackIosIcon />
          Back{" "}
        </Link>
      </button>
      <h1 className="text-2xl font-bold mb-2 text-center text-green-500">
        Add New Faculty
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={Faculty.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rollno"
          >
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            name="rollno"
            value={Faculty.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> */}
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contact"
          >
            Contact
          </label>
          <input
            type="text"
            placeholder="contact"
            name="contactNumber"
            value={Faculty.contactNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={Faculty.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="branch"
          >
            Date Of Birth
          </label>
          <input
            type="date"
            placeholder="Date Of Birth"
            name="dob"
            value={Faculty.dob}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="branch"
          >
            Branch
          </label>
          <input
            type="text"
            placeholder="Branch"
            name="branch"
            value={Faculty.branch}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <input
            type="text"
            placeholder="Joining Year"
            name="joiningYear"
            value={Faculty.joiningYear}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subjects"
          >
            Subjects
          </label>
          <input
            type="text"
            placeholder="Subjects"
            name="subjects"
            value={Faculty.subjects}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> */}
        <div className="col-span-full">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Add Faculty
          </button>
        </div>
      </form>
    </div>
  );
};

function AddFaculty() {
  return (
    <Adminlayout>
      <AddFacultyForm />
    </Adminlayout>
  );
}

export default AddFaculty;
