import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import gitlogo from './images/gitlogo.png';
import intellij from './images/intellij.png';
import sonarQube from './images/sonarQube.png';
import checkMarx from './images/checkmarx-logo.png';
import sublimetext from './images/sublimelogo.png';
import postMan from './images/postmanlogo.png';
import sqldeveloper from './images/sqldeveloper.png';
import vscode from './images/vscode.png';



function ToolsWorked() {
  return (
    <>
    <h2> Tools I have worked on : </h2>
      <Stack direction="Row" spacing={2}>
        <Container>
          <div className="Avatar-container">
            <Avatar alt="vscode logo" src={vscode} sx={{ width: 45, height: 45 }}  />
            <span className="logo-name">VsCode</span>
          </div>
        </Container>
        <Container>
          <div className="Avatar-container">
            <Avatar alt="intellij logo" src={intellij} sx={{ width: 45, height: 45 }} />
            <span className="logo-name">Intellij</span>
          </div>
        </Container>
        <Container>
          <div className="Avatar-container">
            <Avatar alt="sonarQube logo" src={sonarQube} sx={{ width: 45, height: 45 }} />
            <span className="logo-name">SonarQube</span>
          </div>
        </Container>
        <Container>
          <div className="Avatar-container">
            <Avatar alt="checkMarx logo" src={checkMarx} sx={{ width: 45, height: 45 }} />
            <span className="logo-name">CheckMarx</span>
          </div>
        </Container>
      </Stack>
      <br/>
      <Stack direction="Row" spacing={1}>
      <Container>
          <div className="Avatar-container">
            <Avatar alt="Git logo" src={gitlogo} sx={{ width: 45, height: 45 }} />
            <span className="logo-name">Git</span>
          </div>
        </Container>
        <Container>
          <div className="Avatar-container">
            <Avatar alt="sublimetext logo" src={sublimetext} sx={{ width: 45, height: 45 }} />
            <span className="logo-name">SublimeText</span>
          </div>
        </Container>
        <Container>
          <div className="Avatar-container">
            <Avatar alt="postMan logo" src={postMan} sx={{ width: 45, height: 45 }} />
            <span className="logo-name">PostMan</span>
          </div>
        </Container>
        <Container>
          <div className="Avatar-container">
            <Avatar alt="sqldeveloper logo" src={sqldeveloper} sx={{ width: 45, height: 45 }} />
            <span className="logo-name">sqldeveloper</span>
          </div>
        </Container>
      </Stack>
    </>
  );
}

export default ToolsWorked;
