import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = () => {
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Delete</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">username</TableCell>
              <TableCell align="center">phoneNumber</TableCell>
              <TableCell align="center">gender</TableCell>
              <TableCell align="center"><DeleteIcon/></TableCell>
              <TableCell align="center"><EditIcon/></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
