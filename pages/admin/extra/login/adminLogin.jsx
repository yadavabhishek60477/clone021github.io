import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  InputLabel,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";

export const textFieldStyle = {
  marginBottom: "10px",
  width: "100%",
  "& input": {
    // targeting the input element
    height: "40px", // adjust as needed
    padding: "0 14px", // adjust as needed
  },
};

const AdminLogin = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState({
    email: null,
    password: null
  })
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate(admin);
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
        router.push("../admin/home")
      } else {
        console.log('dnks')
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
      [name]: value === "" ? null : value
    })
  }
  const validate = (admin) => {
    const newErrors = {};
    if (!admin.email) newErrors.email = "Email cannot be blank";
    if (!admin.password) newErrors.password = "Password cannot be blank";
    return newErrors;
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          textAlign: "center",
          // backgroundColor: "#f0f0f0",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box>
            <InputLabel
              htmlFor="username"
              sx={{
                fontWeight: "bold",
                marginBottom: "5px",
                display: "block",
                textAlign: "left",
              }}
            >
              Email:
            </InputLabel>
            <TextField
              id="username"
              variant="outlined"
              value={admin.email}
              name="email"
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              sx={textFieldStyle}
              // required
            />
          </Box>
          <Box>
            <InputLabel
              htmlFor="password"
              sx={{
                fontWeight: "bold",
                marginBottom: "5px",
                display: "block",
                textAlign: "left",
              }}
            >
              Password:
            </InputLabel>
            <TextField
              id="password"
              type="password"
              variant="outlined"
              value={admin.password}
              name="password"
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={textFieldStyle}
              // required
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "30%", borderRadius: 4 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
