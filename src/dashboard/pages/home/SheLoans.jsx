import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/sidebar/Sidebar";
import Navbar from "../../../Components/navbar/Navbar";
import axios from "axios";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./homestyle.css";
import CircularProgress from "@mui/material/CircularProgress";
import SheLoan from "../../../Components/tables/SheLoan";

function SheLoans() {
  const [sheLoans, setSheLoans] = useState([]);

  useEffect(() => {
    const getLoans = async () => {
      await axios
        .get(`https://shebnks.com/sheloans/all-loans`)
        .then((sheloans) => {
          console.log("Loans", sheloans?.data?.data);
          setSheLoans(sheloans?.data?.data);
          // navigate("/dashboard", { replace: true });
        })
        .catch((error) => {});
    };
    getLoans();
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
        <Sidebar />
        <div className="dash-homecontainer">
          <Navbar />

          <div className="dash-tablecontainer">
            <div className="dash-tableTitle">
              <p>Loans</p>
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
            {sheLoans.length === 0 ? (
              <div className="dash-circular">
                <CircularProgress />
              </div>
            ) : (
              <SheLoan sheLoans={sheLoans} />
            )}
          </div>
          {/* <div className="dash-circular"><CircularProgress/></div> */}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}

export default SheLoans;
