import React from 'react'
import Container from "@mui/material/Container";
import NavList from "../uicomponents/NavList";
import "../css/App.css";
import Grid from "@mui/material/Grid";
import TechSphere from '../uicomponents/TechSphere';
import SkillsBar from '../uicomponents/SkillsBar';
import ToolsWorked from '../uicomponents/ToolsWorked';
import Stack from "@mui/material/Stack";



function Skills() {
  return (
    <Grid container spacing={0}>
    <Grid item xs={2}>
      <Container className="nav-parent">
        <NavList />
      </Container>
    </Grid>
    <Grid item xs={10} style = {{}}>
      <Grid container spacing={0}>
      <Grid item xs = {6} style = {{ height: "100vh"}}>
         <SkillsBar />
      </Grid>
      <Grid item xs = {6} style = {{height: "10vh"}}>
      <Stack direction="column" spacing={2}>
      <Container>
      <TechSphere />
      </Container>
      <Container>
      <ToolsWorked />
      </Container>
      </Stack>
      </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Skills