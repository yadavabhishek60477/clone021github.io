import React, { useEffect, useState } from "react";
import Adminlayout from "../components/adminlayout";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      Router.push("/admin/adminlogin");
    }
    fetchAdmin();
  }, []);
  const fetchAdmin = async () => {
    await fetch("../api/Admin/getAdminProfile", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("adminToken"),
      }),
    })
      .then((res) => res.json())
      .then((res) => setAdmin(res.admin));
  };

  const adminDetails = {
    name: "John Doe",
    contactNumber: "+1234567890",
    gender: "male",
    email: "john.doe@example.com",
    dob: "03-10-1993",
    joiningYear: "2015",
    department: "Administration",
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 ">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="text"
            value={admin.name}
            readOnly
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight cursor-not-allowed"
            type="email"
            value={admin.email}
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
            value={admin.contactNumber}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

function dashboard() {
  return (
    <Adminlayout>
      <AdminDashboard />
    </Adminlayout>
  );
}

export default dashboard;
