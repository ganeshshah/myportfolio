import React, { useEffect } from "react";
import "../css/sphere.css";
import TagCloud from "TagCloud";

const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "C",
  "C++",
  "React",
  "Python",
  "Java",
  "git",
  "django",
  "Node.js",
  "OpenCV",
  "GCP",
  "MySQL",
  "jQuery",
];


function TechSphere() {
  useEffect(() => {
    TagCloud(".sphere", myTags, {
      // radius in px
      radius: 300,
      // animation speed
      // slow, normal, fast
      maxSpeed: "fast",
      initSpeed: "fast",
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      // interact with cursor move on mouse out
      keep: true,
    }); 
    document.querySelector(".sphere").style.color = '#34A853';
  },[]);
  return (
    <div >
      <div className="sphere" >

      </div>
    </div>
  );
}

export default TechSphere;
