import React from 'react';
import "../css/App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NavList from '../uicomponents/NavList';
import { ListItemText } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


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
          <div className='work-container'>
            <Container>
              <h1>I currently work for Amdocs India <span>Amdocs Logo</span></h1>
              <h3>I joined Amdocs as a fresher and it's almost 2 years now since I joined Amdocs</h3>
              <p>Below are some of the keynotes from my work : </p>
              <br/>
            <List>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Worked on multiple projects and delivered result before deadline" />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Developed high performance and defect free API's in JAVA" />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="I have also worked closely with the client's to understand their needs and delivered the satisfactory result" />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Also worked on resolving defects arised on static code analysis by SonarQube and CheckMarx" />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Created a python script to automate a boring task which used to take a lot of time" />
            </ListItem>
            </List>
            <br/>
            <p>What areas / tech stacks I am willing to work next :  </p>
            <List>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="I deeply want to work in developing micro services" />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="I am comfortable with ReactJs and SpringBoot and I can pivot myself towards nodejs too if it's required in future" />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Here are 2 projects created in SpringBoot and ReactJs. You can also view the relevant certifications which I have done" />
            </ListItem>
            </List>
            </Container>
          </div>
        </Container>
      </Grid>
    </Grid>
    </div>
  )
}

export default Work