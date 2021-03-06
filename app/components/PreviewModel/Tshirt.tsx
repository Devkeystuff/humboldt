/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/tshirt-min.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['default']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.3, 2]}
      />
    </group>
  );
}

useGLTF.preload('/tshirt-min.glb');
