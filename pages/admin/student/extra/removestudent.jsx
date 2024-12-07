import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  MenuItem,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import AdminCard from "../../../components/AdminCard";

const Removestudent = () => {
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [searchDetails, setSearchDetails] = useState("");
  const [students, setStudents] = useState([]); // This will hold all students
  const [filteredStudents, setFilteredStudents] = useState([]); // This will hold the students that match the search
  const [selectedStudents, setSelectedStudents] = useState([]); // This will hold the selected students

  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  // Fetch students from dummy data when the component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: "John Doe", branch: "Computer Science" },
            { id: 2, name: "Jane Doe", branch: "Electrical Engineering" },
            // Add more dummy students
          ]);
        }, 1000);
      });
    };
    const fetchData = async () => {
        setIsLoading(true);
      const data = await fetchStudents();
      setStudents(data);
      setFilteredStudents(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Update the filtered students when the search criteria or details change
  useEffect(() => {
    const lowerCaseSearchDetails = searchDetails.toLowerCase();

    setFilteredStudents(
      students.filter((student) => {
        if (searchCriteria === "branch") {
          return student.branch.toLowerCase().includes(lowerCaseSearchDetails);
        } else if (searchCriteria === "name") {
          return student.name.toLowerCase().includes(lowerCaseSearchDetails);
        } else {
          return true;
        }
      })
    );
  }, [searchCriteria, searchDetails, students]);

  const handleCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setSearchDetails(event.target.value);
  };

  const handleCheckboxChange = (event, student) => {
    if (event.target.checked) {
      setSelectedStudents((prev) => [...prev, student]);
    } else {
      setSelectedStudents((prev) => prev.filter((s) => s.id !== student.id));
    }
  };

  const removeSelectedStudents = () => {
    setStudents((prev) =>
      prev.filter((student) => !selectedStudents.includes(student))
    );
    setSelectedStudents([]);
    handleCloseDialog();
    handleOpenSnackbar();
  };

  return (
    <AdminCard>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove Selected Students"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove the selected students?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={removeSelectedStudents} color="primary" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Students removed successfully
        </Alert>
      </Snackbar>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            select
            label="Search Criteria"
            value={searchCriteria}
            onChange={handleCriteriaChange}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="branch">Branch</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            {/* Add more MenuItem components for other search criteria */}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={`Enter ${searchCriteria} here`}
            value={searchDetails}
            onChange={handleDetailsChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      {/* Display the filtered students */}
      <TableContainer component={Paper} sx={{ margin: "5px 0px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Branch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <Checkbox
                      onChange={(event) => handleCheckboxChange(event, student)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.branch}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No students
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="error"
        onClick={handleOpenDialog}
        disabled={selectedStudents.length === 0}
      >
        Remove
      </Button>
    </AdminCard>
  );
};

export default Removestudent;
