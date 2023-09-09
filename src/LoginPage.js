import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
// Import the CSS file
import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("username", email);
    params.append("password", password);

    try {
      const response = await axios.post(
        "https://shebnks.com/admin/login",
        params
      );
      const { data } = response;
      if (data.status === 200) {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/dashboard", { replace: true });
        window.location.reload();
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log(error);
      setMessage("An error occurred while logging in.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h4>Welcome to shebanks administrative panel</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="h-remember">
            <div className="remember">
              <div>
                <label
                  className="custom-control-label mr-2"
                  htmlFor="customCheck1"
                >
                  Remember me
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
              </div>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default LoginPage;
