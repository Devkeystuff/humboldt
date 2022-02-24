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
      <div className="shirtDisplay">
        <Image width={100} height={50} id="shirts-on-display" src="/images/humboldt-white.png" />
      </div>
      <div>
        <h1>
          GEO-GRAPHICALLY <p>UNIQUE</p> MERCH
        </h1>
        <p>Order uniquely designed merch to represent the place you have travelled to.</p>
        <Link href={'/create'} passHref>
          <Button>CREATE</Button>
        </Link>
      </div>

      <div>
        <div>
          <h2>HOW IT'S DONE</h2>
          <p>Watch this simple video to quickly grasp the idea of how Humboldt. works</p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/IuJIE0NbL8U"
          title="YouTube video player"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2>IT'S JUST THAT EASY</h2>
      <div className="StepsDiv">
        <div>
          <Image width={100} height={50} src="/images/GreenFrame.png" />
          <p>SELECT</p>
          <p className="steps-tutorial">Select a place you would like to display on your merch</p>
        </div>
        <div>
          <Image width={100} height={50} src="/images/paint-brush.png" />
          <p>CUSTOMIZE</p>
          <p className="steps-tutorial">
            Uniquely customize merch to your own liking and write a description about the place
          </p>
        </div>
        <div>
          <Image width={100} height={50} src="/images/credit-card.png" />
          <p>ORDER</p>
          <p className="steps-tutorial">Finalize the process by filling in the necessary payment information</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
