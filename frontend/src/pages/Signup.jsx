import { TextField } from "@mui/material";
function SignUp() {
  return (
    <>
      <div className="form-center">
        <form className="form-center-signup">
          <center>
            <h1>Sign Up</h1>
          </center>
          <br />
          <div>
            <label>
              Username:
              <br />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </label>
          </div>
          <div>
            <br />
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
          <br />
          <div>
            <label>
              Confirm Password:
              <br />
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
              />
            </label>
          </div>
          <div>
            <br />
            <center>
              <button class="loginbut">Register</button>
            </center>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
