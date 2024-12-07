import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import AdminCard from "../../../components/AdminCard";

const UpdateFaculty = () => {
  const router = useRouter();
  const [searchCriteria, setSearchCriteria] = useState("branch");
  const [searchDetails, setSearchDetails] = useState("");
  const [faculties, setFaculties] = useState([]);
  const [filteredFaculties, setFilteredFaculties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setSearchDetails(event.target.value);
  };

  useEffect(() => {
    // Fetch faculties from API and setFaculties
  }, []);

  useEffect(() => {
    setFilteredFaculties(
      faculties.filter((faculty) =>
        faculty[searchCriteria].includes(searchDetails)
      )
    );
  }, [searchDetails, searchCriteria, faculties]);

  const handleRowClick = (facultyId) => {
    router.push(`/admin/faculty/${facultyId}`);
  };

  return (
    <AdminCard>
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
              <TableCell>Sl. No.</TableCell>
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
              filteredFaculties.map((faculty, index) => (
                <TableRow
                  key={faculty.id}
                  onClick={() => handleRowClick(faculty.id)}
                  sx={{cursor: "pointer"}}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{faculty.name}</TableCell>
                  <TableCell>{faculty.branch}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No faculties
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminCard>
  );
};

export default UpdateFaculty;
