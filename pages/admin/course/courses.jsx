import React, { useEffect, useState } from "react";
import AdminCard from "../../../components/AdminCard";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  CircularProgress,
  Grid,
  TextField,
  MenuItem
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const fields = ["id", "subjectName", "subjectCode", "year", "department"];

// Dummy data
const dummycourses = [
  {
    id: 1,
    subjectName: "Math-1",
    subjectCode: "MA101",
    year: 1,
    department: "EE",
  },
  {
    id: 2,
    subjectName: "Math-2",
    subjectCode: "MA102",
    year: 2,
    department: "EE",
  },
];

const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setcourses] = useState([]);
  const [searchCriteria1, setSearchCriteria1] = useState("department");
  const [searchDetails1, setSearchDetails1] = useState("");
  const [searchCriteria2, setSearchCriteria2] = useState("year");
  const [searchDetails2, setSearchDetails2] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchcourses = async () => {
      setLoading(true);

      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setcourses(dummycourses);
      setFilteredCourses(dummycourses);
      setLoading(false);
    };

    fetchcourses();
  }, []);

  const handlecourseClick = (course) => {
    router.push(`/admin/course/${course.id}`);
  };

  const handleCriteriaChange1 = (event) => {
    setSearchCriteria1(event.target.value);
  };

  const handleDetailsChange1 = (event) => {
    setSearchDetails1(event.target.value);
  };

  const handleCriteriaChange2 = (event) => {
    setSearchCriteria2(event.target.value);
  };

  const handleDetailsChange2 = (event) => {
    setSearchDetails2(event.target.value);
  };

  useEffect(() => {
    setFilteredCourses(
      courses.filter(
        (course) =>
          String(course[searchCriteria1]).includes(searchDetails1) &&
          String(course[searchCriteria2]).includes(searchDetails2)
      )
    );
  }, [
    searchDetails1,
    searchCriteria1,
    searchDetails2,
    searchCriteria2,
    courses,
  ]);

  const StyledBox = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }));

  return (
    <AdminCard>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">All courses</Typography>

          <Grid container spacing={3}>
            <Grid item xs={6} >
              <TextField
                select
                label="Search Criteria 1"
                value={searchCriteria1}
                onChange={handleCriteriaChange1}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="department">Department</MenuItem>
                <MenuItem value="subjectName">Subject Name</MenuItem>
                <MenuItem value="year">Year</MenuItem>
                {/* Add more MenuItem components for other search criteria */}
              </TextField>
              <TextField
                label={`Enter ${searchCriteria1} here`}
                value={searchDetails1}
                onChange={handleDetailsChange1}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                label="Search Criteria 2"
                value={searchCriteria2}
                onChange={handleCriteriaChange2}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="department">Department</MenuItem>
                <MenuItem value="subjectName">Subject Name</MenuItem>
                <MenuItem value="year">Year</MenuItem>
                {/* Add more MenuItem components for other search criteria */}
              </TextField>
              <TextField
                label={`Enter ${searchCriteria2} here`}
                value={searchDetails2}
                onChange={handleDetailsChange2}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <StyledBox>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {fields?.map((field) => (
                      <TableCell>
                        {field?.charAt(0)?.toUpperCase() + field?.slice(1)}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCourses
                    .map((course) => (
                      <TableRow
                        onClick={() => handlecourseClick(course)}
                        key={course.id}
                        style={{ cursor: "pointer" }}
                      >
                        {fields.map((field) => (
                          <TableCell>{course[field]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledBox>
        </Box>
      )}
    </AdminCard>
  );
};

export default Courses;
