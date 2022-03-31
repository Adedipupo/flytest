import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Controls } from "./Helpers/Controls";
import { Form, useForm } from "./Helpers/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { login } from "../actions/userActions";

const formInitialValues = {
  email: "",
  password: "",
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  marginTop: "15rem",
  marginLeft: "8rem",
  width: "100%",
};
const buttonStyles = {
  marginTop: "2rem",
  marginLeft: "1rem",
  width: "60%",
  height: "6.7vh",
  textTransform: "none",
};

export default function Login({ history }) {
  const {values, errors, setErrors, setValues, handleInputChange,resetForm} = useForm(formInitialValues);


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
    <Box>
      <Container component="main">
      {error && <Box>{error}</Box>}
          {loading && <Box>loading...</Box>}
        <Form onSubmit={submitHandler}>
          <Box sx={formStyles}>
            <Box ml={1}>
              <Typography component="h1" variant="h5">
                <Typography component="h3" variant="div" color="#7b828c">
                  Welcome back to{" "}
                </Typography>
                <Typography component="h3" variant="div" color="primary">
                  Reward Engine{" "}
                </Typography>
              </Typography>
            </Box>
            <Box mt={2} ml={1} mb={2}>
              <Typography
                sx={{ opacity: 0.4 }}
                component="h3"
                variant="subtitle2"
              >
                Log in to your account.
              </Typography>
            </Box>
            <Box container>
              <Controls.Input
                label="Email Address"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              <Controls.Input
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleInputChange}
              />
              <Grid item xs={12}>
                <Typography ml={2} component="h5" variant="div" color="primary">
                  <Link href="/forget-password" variant="div">
                    Forgot Password?
                  </Link>
                </Typography>
              </Grid>
              <Controls.Button
                sx={buttonStyles}
                type="submit"
                text="Log In"
                size="large"
              />
            </Box>
            <Box container ml={2} mt={2}>
              <Grid item>
                <Typography component="h5" variant="div">
                  Don't have an account? &nbsp;
                  <Link href="/signup" variant="div">
                    Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Box>
          </Box>
        </Form>
      </Container>
    </Box>
  );
}
