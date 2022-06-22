import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import ModalAddNewEmployee from "./ModalAddNewEmployee.jsx";
export default function NavbarEmployee() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ marginRight: "20rem" }} variant="h4">
            Employee
          </Typography>
          <ModalAddNewEmployee></ModalAddNewEmployee>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
