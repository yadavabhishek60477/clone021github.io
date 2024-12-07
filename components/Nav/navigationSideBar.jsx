import React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

const NavigationSideBar = () => {
  const NavigationSideBar = [
    { name: "Dashboard", path: "/admin/home" },
    // { name: "Profile", path: "/admin/profile" },
    // { name: "Add Admin", path: "/" },
    // { name: "Delete Admin", path: "/" },
    { name: "Student", path: "/admin/student" },
    { name: "Faculty", path: "/admin/faculty" },
    { name: "Courses", path: "/admin/course" },
    { name: "Attendance records", path: "/" },
    { name: "Grading", path: "/" },
    { name: "Feedback analysis", path: "/" },
    {name:"Add Branch", path:"/admin/addbranch"}
  ];

  return (
    <List>
      {NavigationSideBar.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          underline="none"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default NavigationSideBar;
