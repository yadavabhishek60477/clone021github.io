import React from "react";
import { Card, CardContent, CardHeader, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import NavigationSideBar from "./Nav/navigationSideBar";

const AdminCard = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Here you would typically handle the logout process, e.g., removing the user's session
    router.push("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Card
        sx={{
          width: "80%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          title={
            <Box display="flex" justifyContent="center" width="100%">
              Admin Panel
            </Box>
          }
          action={
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          }
        />

        <Box display={"flex"} flexDirection={"row"} gap={"4%"} height={"100%"}>
          <CardContent
            sx={{
              width: "25%",
              height: "80%",
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
            }}
          >
            <NavigationSideBar />
          </CardContent>
          <CardContent
            sx={{ width: "70%", height: "80%", overflow: "auto"}}
          >
            {children}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default AdminCard;
