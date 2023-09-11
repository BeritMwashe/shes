import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/sidebar/Sidebar";
import Navbar from "../../../Components/navbar/Navbar";
import axios from "axios";
import "./homestyle.css";
import CircularProgress from "@mui/material/CircularProgress";
import SeedFundd from "../../../Components/tables/SeedFundd";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SeedFund({ setTorefresh }) {
  const [SeedFunds, setSeedFunds] = useState([]);
  const [Refreshh, setRefreshh] = useState("");
  useEffect(() => {
    const getSeedFund = async () => {
      await axios
        .get("https://shebnks.com/seedFund/all-loans")
        .then((seedFund) => {
          setSeedFunds(seedFund?.data?.data);
          console.log("seed find", seedFund?.data?.data);
        })
        .catch((error) => {});
    };

    getSeedFund();
  }, [Refreshh]);

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
              <p>Seed Fund</p>
              <div className="dash-search dash-p">
                <input
                  className="dash-search-input filtering"
                  type="text"
                  placeholder="filter ..."
                  // onChange={(e) => setFilterr(e.target.value)}
                  // value={filterr}
                />
                <SearchRoundedIcon className="dash-navbaricon dash-searchicon" />
              </div>
            </div>
            {SeedFunds.length === 0 ? (
              <div className="dash-circular">
                <CircularProgress />
              </div>
            ) : (
              <SeedFundd SeedFunds={SeedFunds} setRefreshh={setRefreshh} />
            )}
          </div>
          {/* <div className="dash-circular"><CircularProgress/></div> */}
        </div>
      </div>
    </>
  );
}

export default SeedFund;
