import * as Fiber from "@react-three/fiber";
import * as React from "react";
import * as Drei from "@react-three/drei";
import { Model } from "./Model";

export const DrawCanvas = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Fiber.Canvas>
        <Drei.OrbitControls />
        <ambientLight />
        <Model src="shadowbox/rowlet/rowlet.gltf" />
      </Fiber.Canvas>
    </div>
  );
};
