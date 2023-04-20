import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Donut = () => {
  const donut = useGLTF("./glazed_donut/scene.gltf");
  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <primitive object={donut.scene} />
    </mesh>
  );
};

const DonutCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.6} /> {/* Add ambient light */}
      <pointLight position={[10, 10, 10]} /> {/* Add point light */}
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enableRotate={true} />
        <Donut />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DonutCanvas;
