
import React from "react";
import { Chrono } from "react-chrono";
import imgt from '../uicomponents/images/intellij.png'

function Timeline() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
              url: "../uicomponents/images/intellij.png",
            },
          },
    },

    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {imgt},
        },
      },

      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg",
          },
        },
      },

      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg",
          },
        },
      },

      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg",
          },
        },
      },
    
  ];

  return (
    <div style={{ height: "100vh"}}>
      <Chrono items={items} scrollable={{ scrollbar: true }} />
    </div>
  );
}

export default Timeline;
