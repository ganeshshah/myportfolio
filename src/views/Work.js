import React from "react";
import "../css/App.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NavList from "../uicomponents/NavList";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import amdocslogo from "../uicomponents/images/amdocslogo.webp";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CodeSharpIcon from "@mui/icons-material/CodeSharp";

function Work() {
  return (
    <div>
      <Container id="main" className="home-container">
        <div className="work-container">
          <Container>
            <div style={{ marginLeft: "23%", paddingTop: "10%"}}>
              <Stack direction="row" spacing={1}>
                <h1>I currently work for Amdocs India </h1>
                <Avatar
                  alt="amdocs logo"
                  src={amdocslogo}
                  sx={{ width: 70, height: 70}}
                />
              </Stack>
            </div>
            <h3>
              I joined Amdocs as a fresher and it's almost 2 years now since I
              have been working with Amdocs.
            </h3>
            <p style={{textAlign:"left"}}>Below are some of the keynotes from my work : </p>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Worked on multiple projects and delivered result before deadline" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Developed high performance and defect free API's in JAVA" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="I have also worked closely with the client's to understand their needs and delivered the satisfactory result" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Also worked on resolving defects caught during static code analysis by SonarQube and CheckMarx" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Created a python script to automate a manual task which used to take a lot of time [ Time reduced by 1-2 hr / day ]" />
              </ListItem>
            </List>
            <br />
            <p style={{textAlign:"left"}} >What areas / tech stacks I am willing to work next : </p>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="I want to work in developing micro services as my next career goal" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="I am looking forward to work on these tech stacks : SpringBoot , ReactJs / [ Any other Js framework ], " />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeSharpIcon  style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="View my projects : View my Coding Profile : " />
              </ListItem>
            </List>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Work;
