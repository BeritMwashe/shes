import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import AllUsers from "./dashboard/pages/home/AllUsers";
import SeedFund from "./dashboard/pages/home/SeedFund";
import SheLoans from "./dashboard/pages/home/SheLoans";
import ApprovedLoans from "./dashboard/pages/home/ApprovedLoans";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    setAuth(
      localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user")).length !== 0
        ? JSON.parse(localStorage.getItem("user"))
        : []
    );
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/login" element={<LoginPage />} /> */}

          <Route exact path="/dashboard">
            <Route
              index
              element={auth.length !== 0 ? <AllUsers /> : <LoginPage />}
            />
          </Route>
          <Route exact path="/seedfund">
            <Route
              index
              element={auth.length !== 0 ? <SeedFund /> : <LoginPage />}
            />
          </Route>

          <Route exact path="/sheloans">
            <Route
              index
              element={auth.length !== 0 ? <SheLoans /> : <LoginPage />}
            />
          </Route>

          <Route exact path="#">
            <Route
              index
              element={auth.length !== 0 ? <ApprovedLoans /> : <LoginPage />}
            />
          </Route>

          <Route exact path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
