import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/sidebar/Sidebar";
import Navbar from "../../../Components/navbar/Navbar";
import axios from "axios";
import "./homestyle.css";
import CircularProgress from "@mui/material/CircularProgress";
import Allusers from "../../../Components/tables/Allusers";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function AllUsers({ setTorefresh }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // get all users
    const allusers = async () => {
      await axios
        .get("https://shebnks.com/otp/allusers")
        .then((users) => {
          console.log("users", users?.data?.data);
          setUsers(users?.data?.data);
          // navigate("/dashboard", { replace: true });
        })
        .catch((error) => {});
    };

    allusers();
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
              <p>All Users</p>
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
            {users.length === 0 ? (
              <div className="dash-circular">
                <CircularProgress />
              </div>
            ) : (
              <Allusers users={users} />
            )}
          </div>
          {/* <div className="dash-circular"><CircularProgress/></div> */}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}

export default AllUsers;
