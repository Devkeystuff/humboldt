import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Plane, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

interface ITerrainProps {
  texture_img: string;
  elevation_img: string;
}

const Model: React.FC<ITerrainProps> = (props) => {
  // TODO: Load
  const texture = useLoader(THREE.TextureLoader, "/mountains.png");
  const elevation = useLoader(THREE.TextureLoader, props.elevation_img);
  const normal = useLoader(THREE.TextureLoader, "/normalmap.png");

  return (
    <Plane
      args={[16, 16, 16, 16]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial
        attach={"material"}
        map={texture}
        displacementScale={2}
        // normalMap={normal}
        displacementMap={elevation}
        metalness={0}
      />
    </Plane>
  );
};

const Terrain: React.FC<ITerrainProps> = (props) => {
  return (
    <Canvas
      draggable={false}
      color={"black"}
      camera={{ zoom: 3, position: [24, 16, 16] }}
    >
      <pointLight
        castShadow
        intensity={1}
        position={[10, 5, 1]}
        color={"#fff"}
      />
      <pointLight
        castShadow
        intensity={1}
        position={[-10, 5, 0]}
        color={"#d6e09e"}
      />
      <Suspense fallback={<Html>Loading model...</Html>}>
        <Model
          elevation_img={props.elevation_img}
          texture_img={props.texture_img}
        />
      </Suspense>

      <OrbitControls zoom0={1} />
    </Canvas>
  );
};

export default Terrain;
