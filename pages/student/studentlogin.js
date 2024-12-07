import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash,FaArrowLeft } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import Link from 'next/link';
import { useRouter } from 'next/router';

const studentlogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [student, setStudent] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setStudent({
      ...student, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    console.log(student)
    e.preventDefault();
    await fetch("../api/Student/login", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(res => {
      if (res.token) {
        localStorage.setItem("studentToken", res.token);
        router.push("/student/profile")
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#141415]">
      <div className='flex absolute top-5 left-5 text-black font-bold text-xl bg-gray-300 hover:bg-gray-400 p-3 rounded-full'><Link href="/"><span><FaArrowLeft/></span></Link></div>
      <div className="max-w-md w-full space-y-4 bg-gray-300 p-5 rounded-xl shadow-2xl">
        <div className='flex flex-col items-center justify-center'>
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">Student Login</h2>
          <br />
          <h2 className='text-center text-[140px]'><PiStudent/></h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Email
              </label>
              <input
                id="username"
                name="email"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={student.email}
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
                value={student.password}
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

export default studentlogin;
