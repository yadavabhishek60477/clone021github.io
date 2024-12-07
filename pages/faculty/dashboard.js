import React from "react";
import Facultylayout from "../components/facultylayout";
import { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";

const subjectsData = [
  { id: 1, name: "Mathematics", code: "MATH101", lectures: 30 },
  { id: 2, name: "Physics", code: "PHYS201", lectures: 28 },
  { id: 3, name: "Chemistry", code: "CHEM301", lectures: 32 },
  { id: 4, name: "Biology", code: "BIO401", lectures: 29 },
  { id: 5, name: "English", code: "ENG501", lectures: 31 },
  { id: 6, name: "History", code: "HIST601", lectures: 27 },
  { id: 7, name: "Computer Science", code: "COMP701", lectures: 30 },
  { id: 8, name: "Economics", code: "ECON801", lectures: 28 },
  { id: 9, name: "Geography", code: "GEOG901", lectures: 32 },
  { id: 10, name: "Art", code: "ART1001", lectures: 25 },
];

function Dashboardbody() {
  const [facultyName, setFacultyName] = useState("M.K. Gupta");
  const [subjects, setSubjects] = useState([]);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [subjectData, setsubjectData] = useState([
    {
      name: "",
      code: "",
      lec: "",
    },
  ]);
  const [email, setEmail] = useState([]);
  // useEffect(() => {
  //   //Fetch data from backend
  //   setSubjects(subjectsData);
  // }, []);
  useEffect(() => {
    const token = localStorage.getItem("FacultyToken");
    if (token) {
      // Call your API to fetch details using the token
      fetchDetails(token);
    }
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const token = localStorage.getItem("FacultyToken");
        const response = await fetch("/api/Faculty/getAllSubjects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ instructorEmail: userData.email }),
        })
          .then((res) => res.json())
          .then((data) =>
            //console.log(data.response.totalLectures)
            setsubjectData({
              name: data.response.subjectName,
              code: data.response.subjectCode,
              lec: data.response.totalLectures,
            })
          );
        // if (response.ok) {
        //   const data = await response.json();
        //   setSubjects(data.subjects);
        // } else {
        //   throw new Error("Failed to fetch subjects");
        // }
      } catch (error) {
        console.error("Error fetching subjects:", error);
        // Handle error
      }
    };

    fetchSubjects();
  }, [userData.name]);

  const fetchDetails = async (token) => {
    try {
      const response = await fetch("/api/token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          setUserData({
            name: data.faculty.name,
            email: data.faculty.email,
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
    <>
      <div className="flex text-gray-400 items-center space-x-2 mb-4,mx-4">
        <HomeIcon className="text-3xl text-blue-600" />
        <h1 className="text-2xl text-blue-600 font-bold pl-1">
          {" "}
          {userData.name}
        </h1>
      </div>
      <div className="max-w-screen-md mx-auto pt-4 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">SUBJECTS TAUGHT</h2>
        <div className="table-container max-h-[430px] overflow-y-auto border-4 p-3 rounded-xl">
          <table className="w-full border-collapse border-3 rounded-xl border-gray-500 ">
            <thead className="rounded-lg">
              <tr className="bg-gray-300">
                <th className="p-3 text-left">Subject Name</th>
                <th className="p-3 text-left">Subject Code</th>
                <th className="p-3 text-left">Total Lectures</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-3 px-6 font-semibold">{subjectData.name}</td>
                <td className="p-3 px-6">{subjectData.code}</td>
                <td className="p-3 px-12">{subjectData.lec}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <Facultylayout>
        <Dashboardbody />
      </Facultylayout>
    </>
  );
}

export default Dashboard;
