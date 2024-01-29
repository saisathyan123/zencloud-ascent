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

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="form-center">
        <div className="form-container">
          <div>
            <img src={img} alt="" />
          </div>
          <form className="loginp">
            <center>
              <h1>Login</h1>
            </center>
            <br />
            <div>
              <label>
                Email:
                <br />
                <TextField
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
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </label>
            </div>
            <div>
              <br />
              <Link to="/dashboard">
                <center>
                  <button class="loginbut">Sign in</button>
                </center>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
