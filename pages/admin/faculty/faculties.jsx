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
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const fields = ["name", "email", "joiningYear", "branch"];

// Dummy data
const dummyfaculties = [
  {
    id: 1,
    name: "John Doe",
    email: "john@mail.com",
    joiningYear: 2001,
    // subjects: ["Math-1", "Math-2"],
    branch: "EE",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@mail.com",
    joiningYear: 1990,
    // subjects: ["Math-1", "Math-2"],
    branch: "EE",
  },
  // Add more faculties as needed
];

const Faculties = () => {
  const [loading, setLoading] = useState(false);
  const [faculties, setfaculties] = useState([]);
  const [page, setPage] = useState(1);
  const facultiesPerPage = 4; // Change this to the number of faculties you want per page

  const router = useRouter();

  useEffect(() => {
    const fetchfaculties = async () => {
      setLoading(true);

      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setfaculties(dummyfaculties);
      setLoading(false);
    };

    fetchfaculties();
  }, []);

  const handlefacultyClick = (faculty) => {
    router.push(`/admin/faculty/${faculty.id}`);
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
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}><CircularProgress /></div>
        
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">All faculties</Typography>
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
                  {faculties
                    .slice((page - 1) * facultiesPerPage, page * facultiesPerPage)
                    .map((faculty) => (
                      <TableRow
                        onClick={() => handlefacultyClick(faculty)}
                        key={faculty.id}
                        style={{ cursor: "pointer" }}
                      >
                        {fields.map((field) => (
                          <TableCell>{faculty[field]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledBox>

          <Pagination
            count={Math.ceil(faculties.length / facultiesPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </AdminCard>
  );
};

export default Faculties;
