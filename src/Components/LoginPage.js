import { Avatar, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { LockOutlined } from "@mui/icons-material";
import SocialButton from "./SocialButton";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSocialLogin = (user) => {
    console.log(user);
    if (user) {
      navigate("/pagination");
    }
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };
  return (
    <Grid align="center">
      {/* <Paper elevation={10} style={{width:"40%",marginTop:"8%",height:"60vh"}}> */}
      <Avatar
        className="bg-success m-"
        style={{ height: "55px", width: "55px", marginTop: "40px" }}
      >
        <LockOutlined />
      </Avatar>
      <h3 className="mt-2">Welcome to PSD Gang</h3>
      <Grid className="mt-4">
        <SocialButton
          provider="facebook"
          appId="240134211515385"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
          variant="contained"
          style={{ borderRadius: "22px", width: "10%", height: "45px" }}
        >
          Facebook
        </SocialButton>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <SocialButton
          provider="google"
          appId="665946475261-cnjf3jbpq9rau27n7jrbjqkmv7464pn9.apps.googleusercontent.com"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
          variant="contained"
          color="error"
          style={{ borderRadius: "22px", width: "10%", height: "45px" }}
        >
          {" "}
          Google
        </SocialButton>
      </Grid>

      <TextField
        className="mt-4"
        id="outlined-basic"
        label="Username"
        variant="outlined"
        style={{ width: "22%" }}
      />
      <br />
      <TextField
        className="mt-4"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        style={{ width: "22%" }}
      />
      <br />

      <Button
        className="mt-4 bg-success text-white"
        style={{ borderRadius: "22px", width: "20%", height: "45px" }}
      >
        Login
      </Button>

      <p className="mt-4">Forgot Password?</p>

      <Button
        className="mt-4"
        variant="outlined"
        style={{ borderRadius: "22px", width: "20%", height: "45px" }}
      >
        No Account? Register Now
      </Button>

      {/* </Paper> */}
    </Grid>
  );
}
