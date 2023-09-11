import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/sidebar/Sidebar";
import Navbar from "../../../Components/navbar/Navbar";
import axios from "axios";
import "./homestyle.css";
import CircularProgress from "@mui/material/CircularProgress";
import ApprovedLoan from "../../../Components/tables/ApprovedLoan";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function ApprovedLoans({ setTorefresh }) {
  const [approvedloans, setApprovedLoans] = useState([]);

  useEffect(() => {
    const approvedLoans = async () => {
      await axios
        .get("https://shebnks.com/seedFund/denyloan/{}/{}")
        .then((sheloans) => {
          console.log("approved", sheloans?.data?.data);
          setApprovedLoans(sheloans?.data?.data);
          // navigate("/dashboard", { replace: true });
        })
        .catch((error) => {});
    };
    approvedLoans();
  }, []);

  // useEffect(() => {
  //   let oder = orders?.filter(
  //     (item) =>
  //       item?.userName
  //         ?.toLowerCase()
  //         .toString()
  //         .includes(filterr.toString().toLowerCase()) ||
  //       item.phone
  //         ?.toString()
  //         .toLowerCase()
  //         .includes(filterr.toString().toLowerCase()) ||
  //       item.status
  //         ?.toString()
  //         .toLowerCase()
  //         .includes(filterr.toString().toLowerCase()) ||
  //       item.payment
  //         ?.toString()
  //         .toLowerCase()
  //         .includes(filterr.toString().toLowerCase()) ||
  //       item.address
  //         ?.toString()
  //         .toLowerCase()
  //         .includes(filterr.toString().toLowerCase()) ||
  //       item.OrderFor?.toString()
  //         .toLowerCase()
  //         .includes(filterr.toString().toLowerCase())
  //   );
  //   setFilterrData(oder);
  // }, [filterr]);

  return (
    <>
      <div className="dash-home">
        <Sidebar setTorefresh={setTorefresh} />
        <div className="dash-homecontainer">
          <Navbar />

          <div className="dash-tablecontainer">
            <div className="dash-tableTitle">
              <p>Approved Loans</p>
              <div className="dash-search dash-p">
                <input
                  className="dash-search-input filtering"
                  type="text"
                  placeholder="filter ...."
                  // onChange={(e) => setFilterr(e.target.value)}
                  // value={filterr}
                />
                <SearchRoundedIcon className="dash-navbaricon dash-searchicon" />
              </div>
            </div>
            {approvedloans.length === 0 ? (
              <div className="dash-circular">
                <CircularProgress />
              </div>
            ) : (
              <ApprovedLoan ApprovedLoans={ApprovedLoans} />
            )}
          </div>
          {/* <div className="dash-circular"><CircularProgress/></div> */}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}

export default ApprovedLoans;
