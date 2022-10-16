import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/shadowbox/rowlet/rowlet.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rowlet1.geometry}
        material={materials.rowlet1}
        position={[1.18, -9.81, -0.27]}
        rotation={[-3.13, 0.07, 3.05]}
      />
    </group>
  );
}

useGLTF.preload("/shadowbox/rowlet/rowlet.gltf");
