import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Plane, OrbitControls } from "@react-three/drei";

interface ITerrainProps {
  texture_img: string;
  elevation_img: string;
}

const Model: React.FC<ITerrainProps> = (props) => {
  // TODO: Load
  //   const elevation = useLoader(THREE.TextureLoader, "/height.png");
  //   const normal = useLoader(THREE.TextureLoader, "/normal4.png");
  //   const color = useLoader(THREE.TextureLoader, "/texture.png");

  return (
    <Plane
      args={[16, 16, 16, 16]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial
        attach={"material"}
        color={"white"}
        // map={color}
        // displacementMap={elevation}
        // normalMap={normal}
      />
    </Plane>
  );
};

const Terrain: React.FC<ITerrainProps> = (props) => {
  return (
    <Canvas color={"black"} camera={{ zoom: 1, position: [16, 0, 16] }}>
      <pointLight intensity={2} position={[10, 10, 1]} color={"#AAD725"} />
      <pointLight intensity={1} position={[-10, 20, -10]} color={"#fff"} />
      <Suspense fallback={null}>
        <Model
          elevation_img={props.elevation_img}
          texture_img={props.texture_img}
        />
      </Suspense>

      <OrbitControls
        zoom0={1}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};

export default Terrain;
