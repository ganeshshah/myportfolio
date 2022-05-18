import React from 'react';
import "../css/App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NavList from '../uicomponents/NavList';

function Work() {
  return (
    <div>
      <Grid container spacing={0}>
      <Grid item xs={2}>
        <Container className="nav-parent">
          <NavList />
        </Container>
      </Grid>
      <Grid item xs={10}>
        <Container id="main" className="home-container">
          
        </Container>
      </Grid>
    </Grid>
    </div>
  )
}

export default Work