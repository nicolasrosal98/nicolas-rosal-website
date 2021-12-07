import React, { Suspense, useEffect, useRef } from "react";
import Header from "./components/Header.js"
import "@google/model-viewer/dist/model-viewer";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useGLTF } from "drei";
import state from "./components/state.js"

const title = "{Hello, world!}"

const Scene = ({modelPath}) => {
  const gltf = useGLTF(modelPath, true)
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

const HTMLContent = ({ domContent, children, modelPath, positionY, scale}) => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <group position={[0,positionY,0]}>
      <mesh ref={ref} position={[0, -25, 0]} scale={[scale, scale, scale]} rotateZ={45}>
        <Scene modelPath={modelPath}/>
      </mesh>
      <Html portal={domContent} fullscreen>{children}</Html>
    </group>
  );
};

function App() {
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({target: scrollArea.current}), [])

  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 60 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent domContent={domContent} modelPath="/myroom.glb" positionY={-10} scale={5}>
            <div className="container">
              <h1 className="title">{title}</h1>
            </div>  
          </HTMLContent>
          <HTMLContent domContent={domContent} modelPath="/myroomBig.glb" positionY={-200} scale={7}/>  
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position:"sticky", top: 0 }} ref={domContent}></div>
        <div style={{height:`${state.pages * 100}vh`}}></div>
      </div>
    </>
  );
}

export default App;
