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
  CardMedia,
} from "@mui/material";

import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";

function Signup() {
  const navigate = useNavigate;

  const initialValues = {
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    if (!values.fname) {
      errors.fname = "First Name Is Require";
    } else if (values.fname.length < 3) {
      errors.fname = "First Name Must Be 3 & Above Character";
    }

    if (!values.lname) {
      errors.lname = "Last Name Is Require";
    } else if (values.lname.length < 3) {
      errors.lname = "Last Name Must Be 3 & Above Character";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile No Is Require";
    } else if (!regex1.test(values.mobile)) {
      errors.mobile = "Proper Mobile Used";
    }

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
    const allData = [values.fname, values.lname, values.mobile, values.email];
    alert(allData);
    navigate("/Login");
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
                spacing={1}
                direction="column"
                justifyContent="center"
                style={{
                  minHeight: "100vh",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                }}
              >
                <Paper
                  elevation={3}
                  sx={{ padding: 4, zIndex: 1, marginTop: 4 }}
                >
                  <h1 className="mainhead" data-testid="title">
                    Welcome Ouly.AI
                  </h1>
                  <p className="paragraph">
                    Welcome back! please enter your details.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <Grid
                      container
                      direction="row"
                      rowSpacing={2}
                      spacing={2}
                      //   sx={{ padding: 0 }}
                    >
                      <Grid item xs={6} spacing={3}>
                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="First Name"
                            labelPlacement="end"
                            style={{
                              fontWeight: "500",
                              fontSize: "16px",
                              color: "black",
                            }}
                          >
                            First Name
                          </FormLabel>
                        </div>
                        <TextField
                          className="maininput"
                          // required
                          type="text"
                          name="fname"
                          value={values.fname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          fullWidth
                          label="Enter First Name"
                        />

                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="ErrorFname"
                            labelPlacement="end"
                          >
                            {errors.fname}
                          </FormLabel>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="Last Name"
                            labelPlacement="end"
                            style={{
                              fontWeight: "500",
                              fontSize: "16px",
                              color: "black",
                            }}
                          >
                            Last Name
                          </FormLabel>
                        </div>
                        <TextField
                          className="maininput"
                          // required
                          type="text"
                          name="lname"
                          value={values.lname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          fullWidth
                          label="Enter Last Name"
                        />

                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="ErrorLname"
                            labelPlacement="end"
                          >
                            {errors.lname}
                          </FormLabel>
                        </div>
                      </Grid>
                    </Grid>
                    &nbsp;
                    <Grid container spacing={2} direction="column">
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
                            data-testid="Mobile Number"
                            labelPlacement="end"
                            style={{
                              fontWeight: "500",
                              fontSize: "16px",
                              color: "black",
                            }}
                          >
                            Mobile Number
                          </FormLabel>
                        </div>
                        <TextField
                          className="maininput"
                          // required
                          type="text"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          fullWidth
                          label="Enter Mobile No"
                        />

                        <div style={{ display: "flex" }}>
                          <FormLabel
                            data-testid="ErrorMobile"
                            labelPlacement="end"
                          >
                            {errors.mobile}
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

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          style={{ height: "45px", fontWeight: "600" }}
                        >
                          Sign Up
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
                <p
                  style={{ color: "#929EAE", textAlign: "center", zIndex: "1" }}
                >
                  Already have an account?
                  <Link
                    to="/Login"
                    style={{
                      color: "#2563eb",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    &nbsp; sign In
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

export default Signup;
