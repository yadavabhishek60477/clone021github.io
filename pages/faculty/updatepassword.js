import Facultylayout from '../components/facultylayout'
import React, { useState } from 'react';

function UpdatePasswordBody() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword && localStorage.getItem("facultyToken")) {
            setErrorMessage("New password and confirm new password do not match");
        } else {
            await fetch("../api/Faculty/updatePassword", {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newPassword: newPassword,
                    confirmNewPassword: confirmNewPassword,
                    token: localStorage.getItem("facultyToken")
                })
            })
            // Add your password update logic here
            alert("Password Updated Successfully")
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 ">
            <h2 className="text-3xl text-blue-600 font-bold mb-4">Update Password</h2>
            <form onSubmit={handleFormSubmit}>
                {/* <div className="mb-4">
                    <label htmlFor="oldPassword" className="block mb-1 font-semibold">Old Password:</label>
                    <input type="text" id="oldPassword" name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" autoComplete='off' />
                </div> */}
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block mb-1 font-semibold">New Password:</label>
                    <input type="text" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" autoComplete='off'/>
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmNewPassword" className="block mb-1 font-semibold">Confirm New Password:</label>
                    <input type="text" id="confirmNewPassword" name="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200" autoComplete='off'/>
                    {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
                </div>
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300">Update Password</button>
            </form>
        </div>
    );
}




function updatepassword() {
  return (
    <Facultylayout>
        <UpdatePasswordBody />
      </Facultylayout>
  )
}

export default updatepassword
