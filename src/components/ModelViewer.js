import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/model.glb"); // 确保路径正确
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Model />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}