"use client";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   // [`&.${tableCellClasses.head}`]: {
//     :{
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SheLoan() {
  const [seedFund, setSeedFund] = useState([]);
  const [sheLoans, setSheLoans] = useState([]);

  useEffect(() => {
       const getLoans = async () => {
      await axios
        .get("https://shebnks.com/sheloans/all-loans")
        .then((sheloans) => {
          console.log("Loans", sheloans?.data?.data);
          setSheLoans(sheloans?.data?.data);
          // navigate("/dashboard", { replace: true });
        })
        .catch((error) => {});
    };

   
    getLoans();
  }, []);

  if (sheLoans.length === 0) {
    return (
      <>
        <div>fetching data</div>
      </>
    );
  }
  return (
    <>
      <div>
        <h1>She Loans</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>amount</TableCell>
                <TableCell align="right">womanOwned</TableCell>
                <TableCell align="right">FhowLong</TableCell>
                <TableCell align="right">legal</TableCell>
                <TableCell align="right">industry</TableCell>

                <TableCell align="right">loanPurpose</TableCell>
                <TableCell align="right">loanUse</TableCell>
                <TableCell align="right">estTime</TableCell>
                <TableCell align="right">businessOverview</TableCell>

                <TableCell align="right">annualRevenue</TableCell>
                <TableCell align="right">existingLoans</TableCell>
                <TableCell align="right">collateral</TableCell>
                <TableCell align="right">previouslyApplied</TableCell>

                <TableCell align="right">statement</TableCell>
                <TableCell align="right">employeeNo</TableCell>
                <TableCell align="right">financialChallenges</TableCell>
                <TableCell align="right">competitor</TableCell>

                <TableCell align="right">women</TableCell>
                <TableCell align="right">marketing</TableCell>
                <TableCell align="right">reliability</TableCell>
                <TableCell align="right">training</TableCell>

                <TableCell align="right">mentor</TableCell>
                <TableCell align="right">otherInfo</TableCell>
                <TableCell align="right">loanStatus</TableCell>
                <TableCell align="right">phoneNumber</TableCell>

                <TableCell align="right">bplan</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sheLoans.map((row) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.amount}</TableCell>
                  <TableCell align="right">{row.womanOwned}</TableCell>
                  <TableCell align="right">{row.FhowLong}</TableCell>
                  <TableCell align="right">{row.legal}</TableCell>
                  <TableCell align="right">{row.industry}</TableCell>

                  <TableCell align="right">{row.loanPurpose}</TableCell>
                  <TableCell align="right">{row.loanUse}</TableCell>
                  <TableCell align="right">{row.estTime}</TableCell>
                  <TableCell align="right">{row.businessOverview}</TableCell>

                  <TableCell align="right">{row.annualRevenue}</TableCell>
                  <TableCell align="right">{row.existingLoans}</TableCell>
                  <TableCell align="right">{row.collateral}</TableCell>
                  <TableCell align="right">{row.previouslyApplied}</TableCell>

                  <TableCell align="right">{row.statement}</TableCell>
                  <TableCell align="right">{row.employeeNo}</TableCell>
                  <TableCell align="right">{row.financialChallenges}</TableCell>
                  <TableCell align="right">{row.competitor}</TableCell>

                  <TableCell align="right">{row.women}</TableCell>
                  <TableCell align="right">{row.marketing}</TableCell>
                  <TableCell align="right">{row.reliability}</TableCell>
                  <TableCell align="right">{row.training}</TableCell>

                  <TableCell align="right">{row.mentor}</TableCell>
                  <TableCell align="right">{row.otherInfo}</TableCell>
                  <TableCell align="right">{row.loanStatus}</TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>

                  <TableCell align="right">{row.bplan}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  );
}
