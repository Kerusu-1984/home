import { Model } from "../../components/Model";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";
import * as React from "react";

const Shadowbox = () => {
  return (
    <div>
      <main>
        <div style={{ width: "100vw", height: "100vh" }}>
          <Fiber.Canvas camera={{ position: [50, 10, 0], fov: 15 }}>
            <Drei.OrbitControls />
            <ambientLight />
            <Model src="/shadowbox/rowlet/rowlet.gltf" />
          </Fiber.Canvas>
        </div>
      </main>
    </div>
  );
};

export default Shadowbox;
