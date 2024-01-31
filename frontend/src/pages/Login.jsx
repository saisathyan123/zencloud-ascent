import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import img from "../assets/images/wesley-tingey-rtS8Fpb3rcI-unsplash.jpg";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email === "admin@zencloud.com") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-center">
        <div className="form-container">
          <div>
            <img src={img} alt="" />
          </div>
          <form
            onSubmit={(e) => {
              handleSignUp(e);
            }}
            className="loginp"
          >
            <center>
              <h1>Login</h1>
            </center>
            <br />
            <div>
              <label>
                Email:
                <br />
                <TextField
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  required
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Password:
                <br />
                <TextField
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </label>
            </div>
            <div>
              <br />
              <center>
                <button type="submit" class="loginbut">
                  Sign in
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
