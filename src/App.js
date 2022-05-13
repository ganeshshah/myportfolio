import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NavList from "./uicomponents/NavList";
import Home from "./views/Home";
import TechSphere from "./uicomponents/TechSphere"
import backgroundImg from "./files/bgimg.jpg";

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100vh",
}));

function App() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1.8}>
        <Item sx={{ backgroundColor: "#1c204d" }}>
          <Container>
            <NavList />
          </Container>
        </Item>
      </Grid>
      <Grid item xs={10.2}>
        <div style={{ background: "rgb(0, 64, 128)", overflow: "hidden" }}>
          <Item
            sx={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.5
            }}
          >
            <Container style={{color: "Black" ,width:"50%",float: "left"}}>
              <Home />
            </Container>
            <Container style = {{width:"50%",float: "left"}}>
              <TechSphere />
            </Container>
          </Item>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
