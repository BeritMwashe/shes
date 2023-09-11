import React, { useContext } from "react";
import "./sidebarstyle.css";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Link } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PaymentsIcon from "@mui/icons-material/Payments";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../assets/images/logo.png";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setTorefresh }) => {
  const navigate = useNavigate();
  const hundleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    setTorefresh(v4());
    navigate("/", { replace: true });
  };

  // const {dispatch}=useContext(DarkModeContext)
  return (
    <div className="dash-sidebar">
      <div className="dash-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="dash-logo " src={logo} alt="" />
        </Link>
      </div>
      <div className="dash-center">
        <ul>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="dash-sidebaricon" />
              <span>All Users</span>
            </li>
          </Link>

          <Link to="/seedfund" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <MonetizationOnIcon className="dash-sidebaricon" />
              <span>All Seed Funds</span>
            </li>
          </Link>

          <Link to="#" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <LocalAtmIcon className="dash-sidebaricon" />
              <span>All SHEIQ</span>
            </li>
          </Link>

          <Link to="#" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <VerifiedUserIcon className="dash-sidebaricon" />
              <span>Approved Loans</span>
            </li>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <CreditCardIcon className="dash-sidebaricon" />
              <span>Denied loans</span>
            </li>
          </Link>

          <Link to="#" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <PaymentsIcon className="dash-sidebaricon" />
              <span>Disbursed loans</span>
            </li>
          </Link>

          <Link to="/sheloans" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <CreditCardIcon className="dash-sidebaricon" />
              <span>She loans</span>
            </li>
          </Link>

          <Link to="#" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <NewspaperIcon className="dash-sidebaricon" />
              <span>News</span>
            </li>
          </Link>

          {/* <Link to="/" style={{textDecoration:'none'}}> <li><InsertChartIcon className="dash-sidebaricon" /><span>Charts</span></li></Link>
          <Link to="/" style={{textDecoration:'none'}}> <li><SettingsSystemDaydreamOutlinedIcon className="dash-sidebaricon" /><span>Cloud</span></li></Link> */}
          <div className="user">
            {/* <Link to="/" style={{textDecoration:'none'}}> <li><SettingsApplicationsIcon className="dash-sidebaricon" /><span>Setting</span></li></Link> */}
            <Link to="/logout" style={{ textDecoration: "none" }}>
              {" "}
              <li onClick={hundleLogout}>
                <ExitToAppIcon className="dash-sidebaricon" />
                <span>Logout</span>
              </li>
            </Link>
          </div>
        </ul>
      </div>
      <div className="sidebarBottom">
        {/* <div className="dash-mode" onClick={() => dispatch({type:'LIGHT'})}></div>
      <div className="dash-mode" onClick={() => dispatch({type:'DARK'})}></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
