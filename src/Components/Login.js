import React from "react";
import "../css/style.css";
import Img1 from "../Image/Ellipse 2718.png";
import Img2 from "../Image/Ellipse 2721.png";
import Img3 from "../Image/Group 1000002089.png";

import {
  Container,
  Grid,
  Paper,
  TextField,
  FormLabel,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CardMedia,
} from "@mui/material";

import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = " Email Is Required ";
    } else if (!regex.test(values.email)) {
      errors.email = "Email Id Is Invalid";
    }

    if (!values.password) {
      errors.password = "Password Is Required";
    } else if (values.password.length < 5) {
      errors.password = "Password Must Be Five Digit Character";
    }

    return errors;
  };

  const submitForm = (values) => {
    console.log(values);
    alert(values.email + ", " + values.password);
    navigate("/Dashboard");
  };

  return (
    <div>
      <div>
        <CardMedia
          image={Img1}
          component="img"
          style={{
            position: "fixed",
            width: "500px",
            height: "500px",
            left: "-290px",
            top: "-190px",
          }}
        />
        <CardMedia
          image={Img2}
          component="img"
          style={{ position: "absolute", width: "430px" }}
        />
      </div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const { values, handleChange, handleSubmit, errors, handleBlur } =
            formik;
          return (
            <Container maxWidth="sm">
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
                style={{
                  minHeight: "100vh",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                }}
              >
                <Paper elevation={3} sx={{ padding: 5, zIndex: 1 }}>
                  <h1 className="mainhead" data-testid="title">
                    Welcome back, Ouly.AI
                  </h1>
                  <p className="paragraph">
                    Welcome back! please enter your details.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={4} direction="column">
                      <Grid item>
                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="Email"
                            labelPlacement="end"
                            style={{
                              fontWeight: "500",
                              fontSize: "16px",
                              color: "black",
                            }}
                          >
                            Email
                          </FormLabel>
                        </div>

                        <TextField
                          className="maininput"
                          // required
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          fullWidth
                          label="Ouly12@gmail.com"
                        />
                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="emailError"
                            labelPlacement="end"
                          >
                            {errors.email}
                          </FormLabel>
                        </div>
                      </Grid>
                      <Grid item>
                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="Password"
                            labelPlacement="end"
                            style={{
                              fontWeight: "500",
                              fontSize: "16px",
                              color: "black",
                            }}
                          >
                            Password
                          </FormLabel>
                        </div>
                        <TextField
                          className="maininput"
                          // required
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          fullWidth
                          label="*******"
                        />

                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="ErrorPassword"
                            labelPlacement="end"
                          >
                            {errors.password}
                          </FormLabel>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs={6}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={6}>
                        <Link
                          style={{
                            color: "#2563eb",
                            textDecoration: "none",
                            fontWeight: "500",
                            float: "right",
                            marginTop: "8px",
                          }}
                        >
                          Forgot Password?
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          style={{ height: "45px", fontWeight: "600" }}
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
                <p
                  style={{ color: "#929EAE", textAlign: "center", zIndex: "1" }}
                >
                  Don’t have an account?
                  <Link
                    to="/"
                    style={{
                      color: "#2563eb",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    sign up
                  </Link>
                </p>
              </Grid>
            </Container>
          );
        }}
      </Formik>
      <div>
        <CardMedia
          image={Img3}
          component="img"
          style={{
            position: "fixed",
            width: "500px",
            bottom: "-271px",
            right: "0px",
            top: "412px",
          }}
        />
      </div>
    </div>
  );
}

export default Login;
