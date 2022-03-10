import type { NextPage } from 'next';
import { Button } from '../components/styled/Button.styled';
import * as THREE from 'three';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useRef } from 'react';

function Tshirt({ ...props }) {
  const group = useRef();

  const { nodes, materials } = useGLTF('/models/tshirt.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.3, 2]}
      />
    </group>
  );
}

const Home: NextPage = () => {
  return (
    <div>
      <h1
        style={{ fontSize: 48, fontWeight: 400, fontFamily: 'DM Serif Display', color: 'white', lineHeight: '84.7%' }}
      >
        Geographically <i style={{ color: '#AAD725', display: 'block' }}>unique</i> merch
      </h1>

      <Canvas style={{ height: '100vh' }}>
        <Suspense fallback={null}>
          <Tshirt />
          <pointLight color={'#AAD725'} intensity={0.5} position={[-10, 5, -10]} />
          <spotLight color={'#fff'} intensity={1} position={[30, 5, 0]} />
          <spotLight color={'#e6eeda'} intensity={1} position={[0, 5, 10]} />
          <ambientLight intensity={1} color={'#ffffff'} position={[10, 10, 10]} />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.5} rotateSpeed={0.4} />
      </Canvas>
    </div>
  );
};

export default Home;
