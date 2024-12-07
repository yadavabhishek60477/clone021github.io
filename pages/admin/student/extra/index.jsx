import React from "react";
import { useRouter } from "next/router";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { PersonAdd, Update, Delete, Group } from "@mui/icons-material";
import AdminCard from "../../../../components/AdminCard";

const cards = [
  { title: "All Students", icon: <Group />, route: "/admin/student/students" },
  { title: "Add Student", icon: <PersonAdd />, route: "/admin/student/addstudent" },
  { title: "Remove Student", icon: <Delete />, route: "/admin/student/removestudent" },
  { title: "Update Student", icon: <Update />, route: "/admin/student/updatestudent" },
];

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  margin: theme.spacing(2),
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Dashboard = () => {
  const router = useRouter();

  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <AdminCard>
      <Box display="flex" flexWrap="wrap" justifyContent="center" height={"100%"} width={"100%"} alignItems={"center"}>
        {cards.map((card) => (
          <StyledCard
            onClick={() => handleCardClick(card.route)}
            key={card.title}
          >
            <CardContent>
              {card.icon}
              <Typography variant="h6">{card.title}</Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </AdminCard>
  );
};

export default Dashboard;

