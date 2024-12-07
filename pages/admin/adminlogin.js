import React, { useState } from 'react';
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import {useRouter} from 'next/router';
import Link from 'next/link';

const AdminLogin = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError  ] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (admin.password.length !== 8 || !admin.email) {
      alert("Enter all the details")
    }
    // const newErrors = validate(admin);
    await fetch("/api/Admin/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(admin)
    }).then(res => res.json())
    .then(res => {
      if (res.message === "Login Successful") {
        localStorage.setItem("adminToken", res.adminToken)
        router.push("/admin/dashboard")
      } else {
        alert("Enter correct credentials")
      }
    })
    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    // } else {
    //   // Here you would typically send the form data to your server, e.g., using fetch or axios
    //   console.log(`Logging in with: ${username} and password: ${password}`);
    //   setLoginSuccessful(true);
    // }

  };
  const handleChange = (e) => {
    const {name, value} = e.target
    setAdmin({
      ...admin,
      [name]: value 
    })
  }
  const validate = (admin) => {
    const newErrors = {};
    if (!admin.email) newErrors.email = "Email cannot be blank";
    if (!admin.password) newErrors.password = "Password cannot be blank";
    return newErrors;
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#141415]">
      <div className='flex absolute top-5 left-5 text-black font-bold text-xl bg-gray-300 hover:bg-gray-400  p-3 rounded-full'><Link href="/"><span><FaArrowLeft/></span></Link></div>
      <div className="max-w-md w-full space-y-8 bg-gray-300 p-5 rounded-xl">
      <div className='flex flex-col items-center justify-center'>
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">Admin Login</h2>
          <br />
          <h2 className='text-center text-[140px]'><FaChalkboardTeacher/></h2>
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
                value={admin.email}
                onChange={handleChange}
                autoComplete='off'
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                placeholder="Password"
                value={admin.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (                 
                  <span><FaEye/></span>
                ) : (
                    <span><FaEyeSlash /></span>
                )}
              </button>
              
            </div>

          </div>
          {/* {error && <p className="mt-2 text-red-600">{error}</p>} */}
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
