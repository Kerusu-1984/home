import { Model } from "../../components/Model";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";
import * as React from "react";

const Shadowbox = () => {
  return (
    <main className="min-vh-100  justify-content-center  d-flex">
      <div className="container">
        <div style={{ width: "100%", height: "90%" }}>
          <Fiber.Canvas camera={{ position: [50, 10, 0], fov: 15 }}>
            <Drei.OrbitControls />
            <ambientLight />
            <Model src="/shadowbox/rowlet/rowlet.gltf" />
          </Fiber.Canvas>
        </div>

        <div className="d-none d-md-block text-center text-black-50">
          ドラッグで回転 マウスホイールで拡大縮小
          右クリックしながらドラッグで移動
        </div>
      </div>
    </main>
  );
};

export default Shadowbox;
