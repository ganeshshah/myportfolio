import React, { useEffect } from "react";
import "../css/sphere.css";
import TagCloud from "TagCloud";

const myTags = [
  "Java",
  "React",
  "SpringBoot",
  "JavaScript",
  "CSS",
  "HTML",
  "C",
  "C++",
  "Python",
  "git",
  "Node.js",
  "MySQL",
  "Oracle",
  "jQuery",
];


function TechSphere() {
  useEffect(() => {
    TagCloud(".sphere", myTags, {
      // radius in px
      radius: 200,
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
    
      <div className="sphere" >

      </div>
    
  );
}

export default TechSphere;
