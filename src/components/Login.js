import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Controls } from "./Helpers/Controls";
import { Form, useForm } from "./Helpers/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { login } from "../actions/userActions";
import SignIn from "../assets/svg/signinbg.svg";
import Logo from "../assets/svg/siginlogo.svg";
import Button from "./Helpers/controls/Button";

const formInitialValues = {
  email: "",
  password: "",
};
const heroContent = {
  background: `url(${SignIn})`,
  height: "100vh",
};
const logo = {
  position: "relative",
  top: "20%",
  left: "48%",
};
const containerMain = {
  position: "relative",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  top: "25%",
  left: "3%",
  width: "45%",
  height: "67vh",
  borderRadius: "1rem",
};

const formStyle = {
  padding: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};
const sxTextfield = {
  "&.MuiFormControl-root": {
    width: "100%",
  },
};
const check = {
  borderColor: "red",
};

const signupbutton = {
  "&.MuiButton-root": {
    color: "#fff",
    backgroundColor: "#00008B",
    textTransform: "none",
    borderColor: "#fff",
    width: "100%",
    height: "6.7vh",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
};
const altsignin = {
  textDecoration: "none",
  textAlign: "center",
  color: "#000",
};
const altsignup = { color: "#00008B", fontSize: "2rem" };

export default function Login({ history }) {
  const { values, errors, setErrors, setValues, handleInputChange, resetForm } =
    useForm(formInitialValues);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(values.email, values.password));
  };
  return (
    <Box sx={heroContent}>
      <Box sx={logo}>
        <img src={Logo} alt="usergif" />
      </Box>
      <Container sx={containerMain} component="main">
        <Box sx={formStyle}>
          {error && <Box>{error}</Box>}
          {loading && <Box>loading...</Box>}
          <Form onSubmit={submitHandler}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Controls.Input
                  sx={sxTextfield}
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Controls.Input
                  sx={sxTextfield}
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" textAlign="right">
                  Forgot Password
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Controls.Button
                  sx={signupbutton}
                  type="submit"
                  variant="outlined"
                  size="large"
                  text="Sign in"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sx={altsignin}>
                <Link href="/" variant="body2" sx={altsignin}>
                  Already have an account? <span sx={altsignup}>Sign up</span>
                </Link>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Container>
    </Box>
  );
}
