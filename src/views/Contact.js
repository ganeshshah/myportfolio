import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import "../css/App.css";
import emailjs from "@emailjs/browser";
import NavList from "../uicomponents/NavList";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import { margin } from "@mui/system";


const validationSchema = yup.object({
  name: yup.string("Enter your Name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .number("Enter your phone number")
    .positive()
    .integer()
    .test(
      "len",
      "Phone digit must be equal to or more than 10",
      (val) => val.toString().length >= 10
    ),
  message: yup.string("Enter your Message").required("Message is required"),
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("message sent successfully");

      const parameters = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        reply_to: "shahganesh777@gmail.com",
      };
      emailjs
        .send(
          "service_irl4dbl",
          "template_cvre5vg",
          parameters,
          "ewhlDWQ2zjx1HihsJ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Container className="nav-parent">
          <NavList />
        </Container>
      </Grid>
      <Grid item xs={10}  style={{ backgroundColor: '#1e324d'}}>
         <Card sx={{backgroundColor:"#c5d4e7", maxWidth: '520px', paddingTop:'20px',paddingBottom:'20px', margin:"auto", marginTop:"10%"}}>
         <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <br />
              <br />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <br />
              <br />
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Your Mobile no"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <br />
              <br />
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message for me"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
              <br />
              <br />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{backgroundColor:'#1e324d'}}
              >
                Submit
              </Button>
            </form>
          </div>
         </Card>
      </Grid>
    </Grid>
  );
}

export default Contact;
