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

const Removefaculty = () => {
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [searchDetails, setSearchDetails] = useState("");
  const [faculties, setFaculties] = useState([]); // This will hold all faculties
  const [filteredFaculties, setFilteredFaculties] = useState([]); // This will hold the faculties that match the search
  const [selectedFaculties, setSelectedFaculties] = useState([]); // This will hold the selected faculties

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

  // Fetch faculties from dummy data when the component mounts
  useEffect(() => {
    const fetchFaculties = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: "John Doe", branch: "Computer Science" },
            { id: 2, name: "Jane Doe", branch: "Electrical Engineering" },
            // Add more dummy faculties
          ]);
        }, 1000);
      });
    };
    const fetchData = async () => {
        setIsLoading(true);
      const data = await fetchFaculties();
      setFaculties(data);
      setFilteredFaculties(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Update the filtered faculties when the search criteria or details change
  useEffect(() => {
    const lowerCaseSearchDetails = searchDetails.toLowerCase();

    setFilteredFaculties(
      faculties.filter((faculty) => {
        if (searchCriteria === "branch") {
          return faculty.branch.toLowerCase().includes(lowerCaseSearchDetails);
        } else if (searchCriteria === "name") {
          return faculty.name.toLowerCase().includes(lowerCaseSearchDetails);
        } else {
          return true;
        }
      })
    );
  }, [searchCriteria, searchDetails, faculties]);

  const handleCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setSearchDetails(event.target.value);
  };

  const handleCheckboxChange = (event, faculty) => {
    if (event.target.checked) {
      setSelectedFaculties((prev) => [...prev, faculty]);
    } else {
      setSelectedFaculties((prev) => prev.filter((s) => s.id !== faculty.id));
    }
  };

  const removeSelectedFaculties = () => {
    setFaculties((prev) =>
      prev.filter((faculty) => !selectedFaculties.includes(faculty))
    );
    setSelectedFaculties([]);
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
          {"Remove Selected Faculties"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove the selected faculties?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={removeSelectedFaculties} color="primary" autoFocus>
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
          Faculties removed successfully
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
      {/* Display the filtered faculties */}
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
            ) : filteredFaculties.length > 0 ? (
              filteredFaculties.map((faculty) => (
                <TableRow key={faculty.id}>
                  <TableCell>
                    <Checkbox
                      onChange={(event) => handleCheckboxChange(event, faculty)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>{faculty.name}</TableCell>
                  <TableCell>{faculty.branch}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No faculties
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
        disabled={selectedFaculties.length === 0}
      >
        Remove
      </Button>
    </AdminCard>
  );
};

export default Removefaculty;
