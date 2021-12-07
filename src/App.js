import React, { Suspense, useRef } from "react";
import Header from "./components/Header.js"
import "@google/model-viewer/dist/model-viewer";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useGLTF } from "drei";

const title = "{Hello, World!}"

const Scene = () => {
  const gltf = useGLTF("/myroom.glb", true)
  return (
    <primitive object={gltf.scene} />
  )
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  )
}

const HTMLContent = () => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <>
      <mesh ref={ref} position={[0, -30, 0]} scale={[4, 4, 4]} rotateZ={45}>
        <Scene />
      </mesh>
      <Html fullscreen>
        <div className="container">
          <h1 className="title">{title}</h1>
        </div>
      </Html>
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
      {/* <div className="card">
        <model-viewer
          src="/myroom.glb"
          alt="A 3D model of my room"
          shadow-intensity="1"
          camera-controls
        ></model-viewer>
      </div> */}
    </>
  );
}

export default App;
