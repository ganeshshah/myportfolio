import React from "react";
import "../css/App.css";
import Typical from "react-typical";
import Particlejsmain from "../uicomponents/particlejs/Particlejsmain";

function Home() {
  return (
    <div className="home-parent">
      <Particlejsmain />
      <div>
        <h1>Hi,</h1>
        <h2>I am Ganesh Shah</h2>
        <p>
          <Typical
            steps={["A fullstack Java developer based in Pune, India ", 1000]}
            loop={1}
            wrapper="b"
          />
        </p>
        <p>
          I have an experience of 2+ years in Software Development. I have
          worked on backened to create high performance and defect free API's in
          JAVA
        </p>
        <p>
          {" "}
          I am looking forward to work in{" "}
          <Typical
            steps={[
              "Microservice Architecture",
              500,
              "SpringBoot ",
              1000,
              "ReactJs",
              500,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </p>
      </div>

      <div>
        <p style={{paddingTop:"15%", textAlign:"right"}}>
          <Typical
            steps={["Thanks for stopping by ❤️ ", 1000]}
            loop={1}
            wrapper="b"
          />
         
        </p>
      </div>
    </div>
  );
}

export default Home;
