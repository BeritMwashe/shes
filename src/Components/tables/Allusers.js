import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Allusers({ users }) {
  const navigate = useNavigate();
  // const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <div className="users">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">userId</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">Mobile</TableCell>
                <TableCell align="right">MiddleName</TableCell>
                <TableCell align="right">email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.userId}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.mobile}</TableCell>
                  <TableCell align="right">{row.middleName}</TableCell>

                  <TableCell align="right">{row.email}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
