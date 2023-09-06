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

export default function SeedFund() {
  const [seedFund, setSeedFund] = useState([]);
  const [sheLoans, setSheLoans] = useState([]);

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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>applicant</TableCell>
                <TableCell align="right">
                  application_admin_check_status
                </TableCell>
                <TableCell align="right">application_code</TableCell>
                <TableCell align="right">application_date</TableCell>
                <TableCell align="right">
                  application_evaluation_status
                </TableCell>

                <TableCell align="right">application_id</TableCell>
                <TableCell align="right">application_received_status</TableCell>
                <TableCell align="right">application_rules_status</TableCell>
                <TableCell align="right">application_status</TableCell>

                <TableCell align="right">assigned_judge</TableCell>
                <TableCell align="right">attachments_link</TableCell>
                <TableCell align="right">business_founders</TableCell>
                <TableCell align="right">business_impact</TableCell>

                <TableCell align="right">business_initiative</TableCell>
                <TableCell align="right">business_market</TableCell>
                <TableCell align="right">business_name</TableCell>
                <TableCell align="right">business_other_info</TableCell>

                <TableCell align="right">business_problems</TableCell>
                <TableCell align="right">business_share_capital</TableCell>
                <TableCell align="right">bussiness_about</TableCell>
                <TableCell align="right">bussiness_challenge</TableCell>

                <TableCell align="right">
                  bussiness_challenge_solution
                </TableCell>
                <TableCell align="right">bussiness_email</TableCell>
                <TableCell align="right">bussiness_goals</TableCell>
                <TableCell align="right">bussiness_level</TableCell>

                <TableCell align="right">bussiness_mobile</TableCell>

                <TableCell align="right">bussiness_sectors</TableCell>
                <TableCell align="right">bussiness_target</TableCell>
                <TableCell align="right">bussiness_vision_mission</TableCell>
                <TableCell align="right">fandraised_before</TableCell>

                <TableCell align="right">fundRaisedBefore</TableCell>
                <TableCell align="right">funding_reason</TableCell>
                <TableCell align="right">joint_statement</TableCell>
                <TableCell align="right">other_attachements</TableCell>

                <TableCell align="right">ownedbywomen</TableCell>
                <TableCell align="right">project_budget</TableCell>
                <TableCell align="right">proven_traction</TableCell>
                <TableCell align="right">revenue_amount</TableCell>

                <TableCell align="right">stemGap</TableCell>
                <TableCell align="right">tax_admin_cert</TableCell>
                <TableCell align="right">approve</TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {seedFund.map((row) => (
                <StyledTableRow
                  key={row.userId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.applicant}</TableCell>
                  <TableCell align="right">
                    {row.application_admin_check_status}
                  </TableCell>
                  <TableCell align="right">{row.application_code}</TableCell>
                  <TableCell align="right">{row.application_date}</TableCell>
                  <TableCell align="right">
                    {row.application_evaluation_status}
                  </TableCell>

                  <TableCell align="right">{row.application_id}</TableCell>
                  <TableCell align="right">
                    {row.application_received_status}
                  </TableCell>
                  <TableCell align="right">
                    {row.application_rules_status}
                  </TableCell>
                  <TableCell align="right">{row.application_status}</TableCell>

                  <TableCell align="right">{row.assigned_judge}</TableCell>
                  <TableCell align="right">{row.attachments_link}</TableCell>
                  <TableCell align="right">{row.business_founders}</TableCell>
                  <TableCell align="right">{row.business_impact}</TableCell>

                  <TableCell align="right">{row.business_initiative}</TableCell>
                  <TableCell align="right">{row.business_market}</TableCell>
                  <TableCell align="right">{row.business_name}</TableCell>
                  <TableCell align="right">{row.business_other_info}</TableCell>

                  <TableCell align="right">{row.business_problems}</TableCell>
                  <TableCell align="right">
                    {row.business_share_capital}
                  </TableCell>
                  <TableCell align="right">{row.bussiness_about}</TableCell>
                  <TableCell align="right">{row.bussiness_challenge}</TableCell>

                  <TableCell align="right">
                    {row.bussiness_challenge_solution}
                  </TableCell>
                  <TableCell align="right">{row.bussiness_email}</TableCell>
                  <TableCell align="right">{row.bussiness_goals}</TableCell>
                  <TableCell align="right">{row.bussiness_level}</TableCell>

                  <TableCell align="right">{row.bussiness_mobile}</TableCell>

                  <TableCell align="right">{row.bussiness_sectors}</TableCell>
                  <TableCell align="right">{row.bussiness_target}</TableCell>
                  <TableCell align="right">
                    {row.bussiness_vision_mission}
                  </TableCell>
                  <TableCell align="right">{row.fandraised_before}</TableCell>

                  <TableCell align="right">{row.fundRaisedBefore}</TableCell>
                  <TableCell align="right">{row.funding_reason}</TableCell>
                  <TableCell align="right">{row.joint_statement}</TableCell>
                  <TableCell align="right">{row.other_attachements}</TableCell>

                  <TableCell align="right">{row.ownedbywomen}</TableCell>
                  <TableCell align="right">{row.project_budget}</TableCell>
                  <TableCell align="right">{row.proven_traction}</TableCell>
                  <TableCell align="right">{row.revenue_amou}nt</TableCell>

                  <TableCell align="right">{row.stemGap}</TableCell>
                  <TableCell align="right">{row.tax_admin_cert}</TableCell>
                  <TableCell align="right"> <div className="button-container">
            <button className="approve-button">Approve</button>
            <button className="deny-button">Deny</button>
          </div></TableCell>
                
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
