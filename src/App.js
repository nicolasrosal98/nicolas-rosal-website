import React from "react";
import "@google/model-viewer/dist/model-viewer";
import "./website.css";

function App() {
  return (
    <div className="card">
      <model-viewer
        src="/myroom.glb"
        alt="A 3D model of my room"
        shadow-intensity="1"
        camera-controls
      ></model-viewer>
    </div>
  );
}

export default App;
