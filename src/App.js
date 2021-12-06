import React from "react";
import "./website.css";
import "@google/model-viewer/dist/model-viewer";
export default function App() {
  return (
    <div id="card">
      <model-viewer
        src="/myroom.glb"
        alt="A 3D model of my room"
        shadow-intensity="1"
        camera-controls
      ></model-viewer>
    </div>
  );
}