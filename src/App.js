import React from "react";
import Container from "@mui/material/Container";
import NavList from "./uicomponents/NavList";
import "./css/App.css";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Container className="nav-parent">
          <NavList />
        </Container>
      </Grid>
      <Grid  item xs={10} style={{ background : "#1e324d"}}>
        <Outlet style={{ overflow: "hidden" }} />
      </Grid>
    </Grid>
  );
}

export default App;
