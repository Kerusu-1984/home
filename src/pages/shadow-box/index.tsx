import { Model } from "../../components/Model";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";
import * as React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";

const Shadowbox = () => {
  return (
    <div className="h-screen w-screen md:py-12 px-12 py-24">
      <main>
        <div className="shadowbox-3d h-4/5 relative">
          <Fiber.Canvas camera={{ position: [50, 10, 0], fov: 15 }}>
            <Drei.OrbitControls />
            <ambientLight />
            <Model src="/shadowbox/rowlet/rowlet.gltf" />
          </Fiber.Canvas>
          <div className="explanation text-center text-gray-400 absolute bottom-0 w-full md:block hidden">
            ドラッグで回転 マウスホイールで拡大縮小
            右クリックしながらドラッグで移動
          </div>
        </div>
      </main>

      <hr />
      <footer>
        <Breadcrumb
          breadcrumb={[{ title: "Home", link: "/" }, { title: "ShadowBox" }]}
        />
      </footer>
    </div>
  );
};

export default Shadowbox;
