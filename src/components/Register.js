import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Link,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controls } from "./Helpers/Controls";
import { Form, useForm } from "./Helpers/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { register } from "../actions/userActions";
import SignIn from "../assets/svg/signupbg.svg";
import Logo from "../assets/svg/siginlogo.svg";
import Button from "./Helpers/controls/Button";
import Notification from "./Helpers/controls/Notification";
// import { Link } from "react-router-dom";

const formInitialValues = {
  email: "",
  password: "",
  password_confirmation: "",
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

export default function Register({ history }) {
  const validateForm = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "This field is required";
    if ("password_confirmation" in fieldValues)
      temp.password_confirmation = fieldValues.password_confirmation
        ? ""
        : "This field is required";
    setErrors({
      ...temp,
    });

    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === "");
    }
  };
  const { values, errors, setErrors, setValues, handleInputChange } = useForm(
    formInitialValues,
    true,
    validateForm
  );

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (values.password !== values.password_confirmation) {
        setNotify({
          isOpen: true,
          message: "Password do not match",
          type: "error",
        });
      } else {
        dispatch(
          register(values.email, values.password, values.password_confirmation)
        );
      }
    }
    if (userInfo) {
      setNotify({
        isOpen: true,
        message: "Registered Successfully",
        type: "success",
      });
    } else {
      setNotify({
        isOpen: true,
        message: error,
        type: "error",
      });
    }
  };
  return (
    <>
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
                  <Controls.Input
                    sx={sxTextfield}
                    name="Confirm Password"
                    label="Confirm Password"
                    type="password"
                    value={values.password_confirmation}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controls.Button
                    sx={signupbutton}
                    type="submit"
                    variant="outlined"
                    size="large"
                    text="Sign up"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item sx={altsignin}>
                  <Link href="/login" variant="body2" sx={altsignin}>
                    Already have an account? <span sx={altsignup}>Sign in</span>
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Container>
      </Box>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}
