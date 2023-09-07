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
  const navigate = useNavigate();
  const handleApprove = () => {
    // Implement your approval logic here
    // You can also access data related to this row if needed.
  };
  useEffect(() => {
       const getLoans = async () => {
      await axios
        .get("https://shebnks.com/seedFund/denyloan/{}/{}")
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
 
}
