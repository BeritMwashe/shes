"use client";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';
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

export default function SeedFund() {
  // Add this component inside your SheLoan component
function PopupNotification() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        display: isLoanApproved ? "block" : "none",
      }}
    >
      {popupMessage}
    </div>
  );
}

  const navigate = useNavigate();
  const [seedFund, setSeedFund] = useState([]);
  const [sheLoans, setSheLoans] = useState([]);
  const [popupMessage, setPopupMessage] = useState(""); // To store the popup message
  const [isLoanApproved, setIsLoanApproved] = useState(false); // To track whether the loan is approved

  const handleApprove = async (userid,loanId) => {
    try {
      const response = await axios.put(`https://shebnks.com/seedFund/approveLoan/${userid}/${loanId}`);
      // Handle the response as needed
      console.log("Loan approved:", response.data);
  
      // Optionally, you can update the loan status in your local state
      // Update the loan status to 'Approved' in your sheLoans state
      const updatedSheLoans = sheLoans.map((loan) =>
        loan.id === loanId ? { ...loan, loanStatus: 'Approved' } : loan
      );
      setSheLoans(updatedSheLoans);

    // Show the popup message and mark the loan as approved
    setPopupMessage("Loan Approved!");
    setIsLoanApproved(true);
    } catch (error) {
      console.error("Error approving loan:", error);
    }
  };
  useEffect(() => {
    const getSeedFund = async () => {
      await axios
        .get("https://shebnks.com/seedFund/all-loans")
        .then((seedFund) => {
          setSeedFund(seedFund?.data?.data);
          console.log(seedFund);
        })
        .catch((error) => {});
    };

    

    getSeedFund();
  
  }, []);

  if (seedFund.length === 0 ) {
    return (
      <>
        <div>fetching data</div>
      </>
    );
  }
  return (
    <>
   
      <div>
        <h1>Seed Fund</h1>
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
               
             
            
                <TableCell align="right">application_date</TableCell>
             
               
          
             
                <TableCell align="right">application_status</TableCell>

                {/* <TableCell align="right">assigned_judge</TableCell> */}
               
                <TableCell align="right">business_founders</TableCell>
                <TableCell align="right">business_impact</TableCell>

                <TableCell align="right">business_initiative</TableCell>
                <TableCell align="right">business_market</TableCell>
            
                <TableCell align="right">business_problems</TableCell>
         
                <TableCell align="right">bussiness_about</TableCell>
               

                <TableCell align="right">bussiness_sectors</TableCell>
                <TableCell align="right">bussiness_target</TableCell>
              

                <TableCell align="right">ownedbywomen</TableCell>
                
                <TableCell align="right">proven_traction</TableCell>
               <TableCell align="right">stemGap</TableCell>
            
                <TableCell align="right">approve</TableCell>
                <TableCell align="right">Deny</TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {seedFund.map((row) => (
                <StyledTableRow
                  key={row.userId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                   <TableCell align="right">{row.application_date}</TableCell>
   
      <TableCell align="right">{row.application_status}</TableCell>
      {/* <TableCell align="right">{row.assigned_judge}</TableCell> */}
  
      <TableCell align="right">{row.business_founders}</TableCell>
      <TableCell align="right">{row.business_impact}</TableCell>
      <TableCell align="right">{row.business_initiative}</TableCell>
      <TableCell align="right">{row.business_market}</TableCell>
      {/* <TableCell align="right">{row.business_name}</TableCell>
                <TableCell align="right">{row.business_other_info}</TableCell> */}

                <TableCell align="right">{row.business_problems}</TableCell>
                {/* <TableCell align="right">{row.business_share_capital}</TableCell> */}
                <TableCell align="right">{row.bussiness_about}</TableCell>
              

               

                <TableCell align="right">{row.bussiness_sectors}</TableCell>
                <TableCell align="right">{row.bussiness_target}</TableCell>
                
                <TableCell align="right">{row.ownedbywomen ? 'Yes' : 'No'}</TableCell>

               
                <TableCell align="right">{row.proven_traction}</TableCell>
                

                <TableCell align="right">{row.stemGap}</TableCell>
            
             
                  <TableCell align="right">
                    <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleApprove(row.userId,row.application_id)}>
                    {isLoanApproved ? "Disburse" : "Approve"}
  </Button>
        </TableCell>
        <TableCell align="right"> <Button variant="contained" style={{ backgroundColor: 'pink', color: 'white' }}  onClick={() => handleApprove(row.userId,row.application_id)}>
   Deny
  </Button>
        </TableCell>
                
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <PopupNotification /> {/* Render the popup */}
    </>
  );
}
