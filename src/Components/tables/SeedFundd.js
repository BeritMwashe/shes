"use client";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { v4 } from "uuid";

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

export default function SeedFundd({ SeedFunds, setRefreshh }) {
  // Add this component inside your SheLoan component
  const navigate = useNavigate();

  const userAddSuccess = () => toast.success("Loan Approved");
  const denied = () => toast.error("Loan Denied");
  const disbursed = () => toast.success("Loan Disbursed");

  const handleApprove = async (userid, loanId, applicationStatus) => {
    if (applicationStatus === 0) {
      await axios
        .put(`https://shebnks.com/seedFund/approveloan/${userid}/${loanId}`)
        .then((approved) => {
          userAddSuccess();
          setRefreshh(v4());
        })

        .catch((error) => {
          console.error("Error approving loan:", error);
        });
    } else if (applicationStatus === 2) {
      await axios
        .put(`https://shebnks.com/seedFund/denyloan/${userid}/${loanId}`)
        .then((approved) => {
          denied();
          setRefreshh(v4());
        })

        .catch((error) => {
          console.error("Error approving loan:", error);
        });
    } else {
    }
  };
  const handleDeny = async (userid, loanId) => {
    await axios
      .put(`https://shebnks.com/seedFund/denyloan/${userid}/${loanId}`)
      .then((approved) => {
        denied();
        setRefreshh(v4());
      })

      .catch((error) => {
        console.error("Error approving loan:", error);
      });
  };

  useEffect(() => {}, []);

  if (SeedFunds.length === 0) {
    return (
      <>
        <div>fetching data</div>
      </>
    );
  }
  return (
    <>
      <div className="seedd">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">application_date</TableCell>

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
                <TableCell align="right">application_status</TableCell>

                <TableCell align="right">approve</TableCell>
                <TableCell align="right">Deny</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SeedFunds.map((row) => (
                <StyledTableRow
                  key={row.userId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.applicationDate}</TableCell>

                  {/* <TableCell align="right">{row.assigned_judge}</TableCell> */}

                  <TableCell align="right">{row.businessFounders}</TableCell>
                  <TableCell align="right">{row.businessImpact}</TableCell>
                  <TableCell align="right">{row.businessInitiative}</TableCell>
                  <TableCell align="right">{row.businessMarket}</TableCell>
                  {/* <TableCell align="right">{row.business_name}</TableCell>
                <TableCell align="right">{row.business_other_info}</TableCell> */}

                  <TableCell align="right">{row.businessProblems}</TableCell>
                  {/* <TableCell align="right">{row.business_share_capital}</TableCell> */}
                  <TableCell align="right">{row.bussinessAbout}</TableCell>

                  <TableCell align="right">{row.bussinessSectors}</TableCell>
                  <TableCell align="right">{row.bussinessTarget}</TableCell>

                  <TableCell align="right">
                    {row.ownedbywomen ? "Yes" : "No"}
                  </TableCell>

                  <TableCell align="right">{row.provenTraction}</TableCell>

                  <TableCell align="right">{row.stemGap}</TableCell>
                  <TableCell align="right">{row.applicationStatus}</TableCell>

                  <TableCell align="right">
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "green", color: "white" }}
                      onClick={() =>
                        handleApprove(
                          row.userId,
                          row.application_id,
                          row.applicationStatus
                        )
                      }
                    >
                      {row.applicationStatus === 0
                        ? "Approve"
                        : row.applicationStatus === 1
                        ? "Approve"
                        : row.applicationStatus === 2
                        ? "Disburse"
                        : "Disbursed"}
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor:
                          row.applicationStatus === 2
                            ? "pink"
                            : row.applicationStatus === 1
                            ? "red"
                            : "purple",
                        color: "white",
                      }}
                      onClick={() => handleDeny(row.userId, row.application_id)}
                      disabled={
                        row.applicationStatus === 2
                          ? true
                          : row.applicationStatus === 1
                          ? true
                          : false
                      }
                    >
                      {row.applicationStatus === 1 ? "Denied" : "Deny"}
                    </Button>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <ToastContainer />
    </>
  );
}
