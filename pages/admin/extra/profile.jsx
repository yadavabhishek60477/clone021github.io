import React, { useState, useEffect } from "react";
import AdminCard from "../../../components/AdminCard";
import { Box, TextField, Grid, InputLabel } from "@mui/material";
import { textFieldStyle } from "../../login/adminLogin";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter()
  const [data, setData] = useState({
    
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("adminToken")) {
          router.push("../login/adminLogin");
          return;
        }

        const response = await fetch("../api/Admin/getAdminProfile", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: localStorage.getItem("adminToken"),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const responseData = await response.json();
        // Remove any circular references from the fetched data
        const sanitizedData = removeCircularReferences(responseData);
        setData(sanitizedData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);
  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email" },
    { name: "dob", label: "DOB" },
    { name: "username", label: "Username" },
    { name: "department", label: "Department" },
    { name: "contactno", label: "Contact No" },
    { name: "joiningyr", label: "Joining Year" },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/api/user"); // Replace with your API endpoint
  //     const data = await response.json();
  //     setData(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <AdminCard>
      <Box>
        {data && (
          <Grid container spacing={2}>
            {fields.map((field) => (
              <Grid
                item
                xs={6}
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <InputLabel
                  htmlFor={field.name}
                  sx={{
                    fontWeight: "bold",
                    padding: 1,
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#000080",
                    color:"white",
                    height:"80%",
                    width:"45%",
                    borderRadius:"7px",
                  }}
                >
                  {field.label}:
                </InputLabel>
                <TextField
                  id={field.name}
                  type="text"
                  variant="outlined"
                  value={data[field.name]}
                  fullWidth
                  sx={{ ...textFieldStyle, width: "50%" }}
                />
              </Grid>
            ))}

            {/* <Grid item xs={6}>
              <TextField label="Email" value={data.email} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="DOB" value={data.dob} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Username" value={data.username} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Department" value={data.department} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Contact No" value={data.contactno} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Joining Year"
                value={data.joiningyr}
                fullWidth
              />
            </Grid> */}
          </Grid>
        )}
      </Box>
    </AdminCard>
  );
};

export default Profile;
