import React from 'react';
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
          <List  sx = {{ color: 'aliceblue'}}>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/">
                <ListItemIcon style={{ color: "aliceblue" }}>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/About">
                <ListItemIcon style={{ color: "aliceblue" }}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Work">
                <ListItemIcon style={{ color: "aliceblue" }}>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Work" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Skills">
                <ListItemIcon style={{ color: "aliceblue" }}>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText primary="Skills" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Projects">
                <ListItemIcon style={{ color: "aliceblue" }}>
                  <IntegrationInstructionsIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Contact">
                <ListItemIcon style={{ color: "aliceblue" }}>
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