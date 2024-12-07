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

const UpdateStudent = () => {
  const router = useRouter();
  const [searchCriteria, setSearchCriteria] = useState("branch");
  const [searchDetails, setSearchDetails] = useState("");
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setSearchDetails(event.target.value);
  };

  useEffect(() => {
    // Fetch students from API and setStudents
  }, []);

  useEffect(() => {
    setFilteredStudents(
      students.filter((student) =>
        student[searchCriteria].includes(searchDetails)
      )
    );
  }, [searchDetails, searchCriteria, students]);

  const handleRowClick = (studentId) => {
    router.push(`/admin/student/${studentId}`);
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
      {/* Display the filtered students */}
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
            ) : filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <TableRow
                  key={student.id}
                  onClick={() => handleRowClick(student.id)}
                  sx={{cursor: "pointer"}}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.branch}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No students
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminCard>
  );
};

export default UpdateStudent;
