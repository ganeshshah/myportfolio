import React from "react";
import App from "../css/App.css";
import Typical from "react-typical";

function Home() {
  return (
    <div className="home-parent">
      <h1>Hi, I am Ganesh Shah</h1>

      <p>
        <Typical
          steps={[
            "A fullstack Java developer ",
            1000,
          ]}
          loop={1}
          wrapper="b"
        />
      </p>
      <p>
        I have an experience of 2+ years in Software
        Development. I have worked on backened to create high performance and defect free API's in JAVA</p>
        <p> I want to work in <Typical
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
  );
}

export default Home;
