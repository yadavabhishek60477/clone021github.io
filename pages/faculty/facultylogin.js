import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

const facultylogin = () => {
  const router = useRouter();
  const [faculty, setFaculty] = useState({
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("../api/Faculty/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(faculty),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          localStorage.setItem("FacultyToken", res.token);
          router.push("/faculty/dashboard");
        } else {
          alert("Enter correct credentials");
        }
      });
    // if (username === "faculty" && password === "password") {
    // const data = await response.json();
    // const token = data.token;
    // localStorage.setItem("FacultyToken", token);
    // router.push("/faculty/dashboard");
    // } else {
    //   setError("Invalid username or password");
    // }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty({
      ...faculty,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#141415]">
      <div className="flex absolute top-5 left-5 text-black font-bold text-xl bg-gray-300 hover:bg-gray-400  p-3 rounded-full">
        <Link href="/">
          <span>
            <FaArrowLeft />
          </span>
        </Link>
      </div>
      <div className="max-w-md w-full space-y-8 bg-gray-300 p-5 rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">
            Faculty Login
          </h2>
          <br />
          <h2 className="text-center text-[140px]">
            <FaChalkboardTeacher />
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={faculty.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                placeholder="Password"
                value={faculty.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <span>
                    <FaEye />
                  </span>
                ) : (
                  <span>
                    <FaEyeSlash />
                  </span>
                )}
              </button>
            </div>
          </div>
          {error && <p className="mt-2 text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default facultylogin;
