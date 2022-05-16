import React from 'react'
import Container from "@mui/material/Container";
import NavList from "../uicomponents/NavList";
import Particlejsmain from "../uicomponents/particlejs/Particlejsmain";
import "../css/App.css";
import Grid from "@mui/material/Grid";

function About() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Container className="nav-parent">
          <NavList />
        </Container>
      </Grid>
      <Grid item xs={10}>
        <Container id="main" className="home-container">
          <div>About</div>
        </Container>
      </Grid>
    </Grid>
  )
}

export default About