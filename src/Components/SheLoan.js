"use client";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import Button from '@mui/material/Button';
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

export default function SheLoan() {
  const [seedFund, setSeedFund] = useState([]);
  const [sheLoans, setSheLoans] = useState([]);
  const [allusers, setAllUsers] = useState([]);
  const [popupMessage, setPopupMessage] = useState(""); // To store the popup message
  const [isLoanApproved, setIsLoanApproved] = useState(false); // To track whether the loan is approved

  const navigate = useNavigate();
  const handleApprove = async (loanId) => {
    try {
      const response = await axios.put(`https://shebnks.com/seedFund/approveLoan/${loanId}`);
      // Handle the response as needed
      console.log("Loan approved:", response.data);
  
      // Optionally, you can update the loan status in your local state
      // Update the loan status to 'Approved' in your sheLoans state
      const updatedSheLoans = sheLoans.map((loan) =>
        loan.id === loanId ? { ...loan, loanStatus: 'Approved' } : loan
      );
      setSheLoans(updatedSheLoans);
    } catch (error) {
      console.error("Error approving loan:", error);
    }
  };
  
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
        <Button
          variant="contained"
          style={{ backgroundColor: 'pink', color: 'white', marginBottom: '16px' }}
          onClick={() => navigate('/home')} // Navigate to the home page
        >
          Back to Home
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
            
              <TableCell align="right">amount</TableCell>
              <TableCell align="right">womanOwned</TableCell>
              <TableCell align="right">loanPurpose</TableCell>
              <TableCell align="right">loanUse</TableCell>
              <TableCell align="right">annualRevenue</TableCell>
              <TableCell align="right">existingLoans</TableCell>
              <TableCell align="right">collateral</TableCell>
              <TableCell align="right">employeeNo</TableCell>
              <TableCell align="right">competitor</TableCell>
              <TableCell align="right">loanStatus</TableCell>
              <TableCell align="right">bplan</TableCell>
              <TableCell align="right">Disburse</TableCell>
              <TableCell align="right">Deny</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sheLoans.map((row) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.amount}</TableCell>
                  <TableCell align="right">{row.womanOwned ? 'Yes' : 'No'}</TableCell>
                    <TableCell align="right">{row.loanPurpose}</TableCell>
                    <TableCell align="right">{row.loanUse}</TableCell>
                    <TableCell align="right">{row.annualRevenue}</TableCell>
                    <TableCell align="right">{row.existingLoans ? 'Yes' : 'No'}</TableCell>
                    <TableCell align="right">{row.collateral ? 'Yes' : 'No'}</TableCell>
                    <TableCell align="right">{row.employeeNo}</TableCell>
                    <TableCell align="right">{row.competitor ? 'Yes' : 'No'}</TableCell>
                    <TableCell align="right">{row.loanStatus}</TableCell>
                    <TableCell align="right">{row.bplan ? 'Yes' : 'No'}</TableCell>
                    <TableCell align="right">
                    <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }} onClick={handleApprove}>
    Approve
  </Button>
        </TableCell>
        <TableCell align="right"> <Button variant="contained" style={{ backgroundColor: 'pink', color: 'white' }} onClick={() => handleApprove(row.id)}>
   Deny
  </Button>
        </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  );
}
