import React from "react";
import Container from "@mui/material/Container";
import NavList from "../uicomponents/NavList";
import "../css/App.css";
import Grid from "@mui/material/Grid";

function About() {
  return (
    <Container>
      <div class="aboutContainer">
        <h1>Here is just a bit more info about me : </h1>
        <p>I am from Assam, the land of “Blue Hills and Red River”</p>
        <p>
          I did my graduation in computer science and engineering from National
          Institute Of Technology Silchar. I am from the batch of 2020.
        </p>
        <p>
          I did my Schooling ( 10th and 12th ) from Jawahar Navodaya Vidyalaya,
          Dhemaji
        </p>
        <p>I love competitive coding and being alone</p>
      </div>
    </Container>
  );
}

export default About;
