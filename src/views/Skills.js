import React from 'react'
import Container from "@mui/material/Container";
import NavList from "../uicomponents/NavList";
import "../css/App.css";
import Grid from "@mui/material/Grid";
import TechSphere from '../uicomponents/TechSphere';
import { height } from '@mui/system';


function Skills() {
  return (
    <Grid container spacing={0}>
    <Grid item xs={2}>
      <Container className="nav-parent">
        <NavList />
      </Container>
    </Grid>
    <Grid item xs={10}>
      <Grid container spacing={0}>
      <Grid item xs = {6} style = {{ height: "100vh"}}>
         <h1>Skills to implement</h1>
      </Grid>
      <Grid item xs = {6} style = {{  height: "100vh"}}>
        <TechSphere/>
      </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Skills