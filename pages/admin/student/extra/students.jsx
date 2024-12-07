import React, { useEffect, useState } from "react";
import AdminCard from "../../../../components/AdminCard";
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
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const fields = ["name", "email", "year", "branch"];

// Dummy data
const dummyStudents = [
  {
    id: 1,
    name: "John Doe",
    email: "john@mail.com",
    year: 2,
    // subjects: ["Math-1", "Math-2"],
    branch: "EE",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@mail.com",
    year: 3,
    // subjects: ["Math-1", "Math-2"],
    branch: "EE",
  },
  // Add more students as needed
];

const Students = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const studentsPerPage = 4; // Change this to the number of students you want per page

  const router = useRouter();

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);

      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStudents(dummyStudents);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  const handleStudentClick = (student) => {
    router.push(`/admin/student/${student.id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

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
        <CircularProgress />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">All Students</Typography>
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
                  {students
                    .slice((page - 1) * studentsPerPage, page * studentsPerPage)
                    .map((student) => (
                      <TableRow
                        onClick={() => handleStudentClick(student)}
                        key={student.id}
                        style={{ cursor: "pointer" }}
                      >
                        {fields.map((field) => (
                          <TableCell>{student[field]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledBox>

          <Pagination
            count={Math.ceil(students.length / studentsPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </AdminCard>
  );
};

export default Students;
