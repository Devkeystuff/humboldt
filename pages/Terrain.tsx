import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { Plane, OrbitControls, Box } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import Image from "next/image";
import { Camera, DoubleSide, FrontSide } from "three";

// const HeightMap: React.FC = () => {
//   const elevation = useLoader(THREE.TextureLoader, "elevation.png");
// };

const Model: React.FC = () => {
  const elevation = useLoader(THREE.TextureLoader, "/scene.png");

  // You don't need to check for the presence of the result, when we're here
  // the result is guaranteed to be present since useLoader suspends the component
  return (
    <Box
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      args={[128, 128, 64, 64, 64, 64]}
    >
      <meshStandardMaterial
        attach={"material"}
        color={"green"}
        metalness={0.2}
        displacementMap={elevation}
        displacementScale={3}
        wireframe
      />
    </Box>
  );
};

const Terrain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    console.log(canvasRef.current.toDataURL());
  }, []);
  return (
    <Canvas ref={canvasRef} camera={{ position: [32, 32, 32] }}>
      <pointLight intensity={1} position={[100, 50, 1]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        zoom0={2}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};

export default Terrain;
