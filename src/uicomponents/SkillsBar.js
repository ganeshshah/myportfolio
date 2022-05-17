import React from "react";
import "../css/App.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import htmllogo from "./images/html.jpg";
import csslogonew from "./images/csslogonew.png";
import jslogo from "./images/jslogo.png";
import reactlogo from "./images/reactlogo.svg";
import springboot from "./images/springboot.png";
import mysql from "./images/mysql.jpg";
import OracleDB from "./images/OracleDB.jpg";
import { Container } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import Javalogo from './images/java-logo.png';
import cplusplus from './images/cplusplus.webp';
import C_Logo from './images/C_Logo.png';
import pythonlogo from './images/python.png';
import shelllogo from './images/shell-logo.jpg';

function SkillsBar() {
  return (
    <div className="skills-bar">
      <Stack direction="column" spacing={2}>
        <Container>
          <div className="Avatar-container">
            <Avatar
              alt="Java logo"
              src={Javalogo}
              sx={{ width: 45, height: 45 }}
            />
            <span className="logo-name">Java</span>
          </div>
          <div className="skillsprogress">
            <ProgressBar
              completed={80}
              animateOnRender={true}
              isLabelVisible={false}
              height={10}
            />
          </div>
        </Container>
        <Container>
          <div className="Avatar-container">
            <Avatar
              alt="c++ logo"
              src={cplusplus}
              sx={{ width: 45, height: 45 }}
            />
            <span className="logo-name">C++</span>
          </div>
          <div className="skillsprogress">
            <ProgressBar
              completed={60}
              animateOnRender={true}
              isLabelVisible={false}
              height={10}
            />
          </div>
        </Container>

        <Container>
          <div className="Avatar-container">
            <Avatar
              alt="javascript logo"
              src={jslogo}
              sx={{ width: 45, height: 45 }}
            />
            <span className="logo-name">JavaScript</span>
          </div>
          <div className="skillsprogress">
            <ProgressBar
              completed={70}
              animateOnRender={true}
              isLabelVisible={false}
              height={10}
            />
          </div>
        </Container>

        <Container>
          <div className="Avatar-container">
            <Avatar
              alt="react logo"
              src={reactlogo}
              sx={{ width: 45, height: 45 }}
            />
            <span className="logo-name">ReactJs</span>
          </div>
          <div className="skillsprogress">
            <ProgressBar
              completed={70}
              animateOnRender={true}
              isLabelVisible={false}
              height={10}
            />
          </div>
        </Container>

        <Container>
          <div className="Avatar-container">
            <Avatar
              alt="SpringBoot logo"
              src={springboot}
              sx={{ width: 45, height: 45 }}
            />
            <span className="logo-name">SpringBoot</span>
          </div>
          <div className="skillsprogress">
            <ProgressBar
              completed={80}
              animateOnRender={true}
              isLabelVisible={false}
              height={10}
            />
          </div>
        </Container>

        <Container>
          <div className="Avatar-container">
            <Avatar
              alt="Mysql logo"
              src={mysql}
              sx={{ width: 45, height: 45 }}
            />
            <span className="logo-name">MySQL</span>
          </div>
          <div className="skillsprogress">
            <ProgressBar
              completed={80}
              animateOnRender={true}
              isLabelVisible={false}
              height={10}
            />
          </div>
        </Container>

        <Container>
          <div className="Avatar-container">
            <Avatar
              alt="Oracle logo"
              src={OracleDB}
              sx={{ width: 45, height: 45 }}
            />
            <span className="logo-name">Oracle</span>
          </div>
          <div className="skillsprogress">
            <ProgressBar
              completed={85}
              animateOnRender={true}
              isLabelVisible={false}
              height={10}
            />
          </div>
        </Container>
      </Stack>
      <br/>
      <br/>
      <Stack direction="Row" spacing={0}>
        <Container>
        <div className="Avatar-container">
          <Avatar alt="html logo" src={htmllogo} sx={{ width: 45, height: 45}} />
          <span className="logo-name">html</span>
       </div>
      </Container>
      <Container>
        <div className="Avatar-container">
          <Avatar alt="css logo" src={csslogonew} sx={{ width: 45, height: 45}} />
          <span className="logo-name">css</span>
       </div>
      </Container>
      <Container>
        <div className="Avatar-container">
          <Avatar alt="C logo" src={C_Logo} sx={{ width: 45, height: 45}} />
          <span className="logo-name">C</span>
       </div>
      </Container>
      <Container>
        <div className="Avatar-container">
          <Avatar alt="python logo" src={pythonlogo} sx={{ width: 45, height: 45}} />
          <span className="logo-name">Python</span>
       </div>
      </Container>
      <Container>
        <div className="Avatar-container">
          <Avatar alt="ShellScript logo" src={shelllogo} sx={{ width: 45, height: 45}} />
          <span className="logo-name">Unix</span>
       </div>
      </Container>
      </Stack>
    </div>
  );
}

export default SkillsBar;
