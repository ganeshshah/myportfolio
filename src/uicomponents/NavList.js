import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function NavList() {
    return (
      
      <Box sx={{ width: '100%', maxWidth: 360}}>
        <div style = {{height: "30vh"}}>

        </div>
        <div>
        <nav aria-label="main mailbox folders">
          <List  sx = {{ color: 'white'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Work" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText primary="Skills" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <IntegrationInstructionsIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        </div>
        <div style={{paddingTop: "50%"}}>
        <GitHubIcon style={{ color: "white" }} />
        <span>{" "}</span>
        <LinkedInIcon  style={{ color: "white" }}/>
        </div>
      </Box>
    );
  }