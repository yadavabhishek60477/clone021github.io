import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Snackbar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  FormLabel,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { DatePicker } from "@mui/lab";
import AdminCard from "../../../components/AdminCard";
import { textFieldStyle } from "../../login/adminLogin";

const CustomDatePicker = ({ id, name, value, onChange, error, helperText }) => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "4px",
          border: error ? "1px solid red" : "1px solid #ced4da",
          paddingLeft: "12px",
          paddingRight: "36px", // Space for the icon
          boxSizing: "border-box", // Ensure padding and border are included in the width
          fontSize: "14px", // Match font size with helper text
          backgroundColor: "#fff", // Match background color with datepicker
          color: "#495057", // Match text color with datepicker
        }}
      />
      <span
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "#495057", // Match icon color with datepicker
          pointerEvents: "none", // Ensure the icon doesn't interfere with input events
        }}
      >
        &#x1F4C5; {/* Emoji for calendar icon */}
      </span>
      {error && (
        <div style={{ color: "red", fontSize: "12px" }}>{helperText}</div>
      )}
    </div>
  );
};

const AddStudent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    joiningYear: "",
    username: "",
    gender: "",
    branch: "",
    designation: "",
    contactNo: "",
    dob: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setForm({
      ...form,
      dob: date,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = form.name ? "" : "This field is required.";
    tempErrors.email = form.email ? "" : "This field is required.";
    tempErrors.password = form.password ? "" : "This field is required.";
    tempErrors.year = form.year ? "" : "This field is required.";
    tempErrors.branch = form.branch ? "" : "This field is required.";
    tempErrors.section = form.section ? "" : "This field is required.";
    tempErrors.dob = form.dob ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleAddClick = () => {
    if (validateForm()) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    setLoading(true);
    setOpen(false);

    // Add the student
    // This is a dummy function, replace it with your actual function
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setOpenSnackbar(true);
    router.push("/admin/student/students");
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <AdminCard>
      {loading && <CircularProgress />}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Student added successfully!
        </MuiAlert>
      </Snackbar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Student"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to add this student?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Box component="form" noValidate autoComplete="off" height={"100%"}>
        <Grid container spacing={1} width={"100%"}>
          {Object.entries(form).map(([field, value], index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Grid container alignItems="center">
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    flexDirection={"row"}
                    width={"100%"}
                    justifyContent={"space-between"}
                    gap={1}
                  >
                    <InputLabel
                      htmlFor={field}
                      sx={{
                        fontWeight: "bold",
                        padding: 1,
                        display: "block",
                        textAlign: "center",
                        backgroundColor: "#000080",
                        color: "white",
                        height: "80%",
                        width: "50%",
                        borderRadius: "7px",
                      }}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </InputLabel>
                    {field === "joiningYear" ||
                    field === "branch" ||
                    field === "section" ? (
                      <FormControl fullWidth>
                        <Select
                          id={field}
                          name={field}
                          value={value}
                          onChange={handleChange}
                          error={!!errors[field]}
                          style={{ height: "70%" }}
                        >
                          {/* Replace this array with your actual data */}
                          {["Option 1", "Option 2", "Option 3"].map(
                            (option, index) => (
                              <MenuItem key={index} value={option}>
                                {option}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </FormControl>
                    ) : field === "dob" ? (
                      <Box width={"50%"}>
                        <CustomDatePicker
                          id={field}
                          name={field}
                          value={value}
                          onChange={handleChange}
                          error={!!errors[field]}
                          helperText={errors[field]}
                        />
                      </Box>
                    ) : (
                      <TextField
                        fullWidth
                        id={field}
                        name={field}
                        value={value}
                        onChange={handleChange}
                        error={!!errors[field]}
                        helperText={errors[field]}
                        sx={{ ...textFieldStyle, width: "100%" }}
                      />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <hr style={{ visibility: "hidden" }} />
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add
        </Button>
      </Box>
    </AdminCard>
  );
};

export default AddStudent;
