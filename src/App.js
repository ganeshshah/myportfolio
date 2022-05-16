import React from "react";
import Container from "@mui/material/Container";
import NavList from "./uicomponents/NavList";
import Home from "./views/Home";
import Particlejsmain from "./uicomponents/particlejs/Particlejsmain";
import "./css/App.css";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container spacing={0}>
      <Particlejsmain />
      <Grid item xs={2}>
        <Container className="nav-parent">
          <NavList />
        </Container>
      </Grid>
      <Grid item xs={10}>
        <Container className="home-container">
          <Home/>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
