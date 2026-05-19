import { Canvas } from "@react-three/fiber";
import { IslandModel } from "../../components/portfolio3d/island";
import { Trex } from "../../components/portfolio3d/dinossaur/trex";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";

export function JurassicPark() {
  const [trexAnimation, setTrexAnimation] = useState("idle");

  useEffect(() => {
    function trexAnimations(key) {
      if (key.type === "keydown") {
        if (
          key.key === "w" ||
          key.key === "a" ||
          key.key === "s" ||
          key.key === "d"
        ) {
          setTrexAnimation("run");
        } else if (key.key === "r") {
          setTrexAnimation("roar");
        }
      } else if (key.type === "mousedown") {
        if (key.button === 0) {
          setTrexAnimation("bite");
        }
      } else if (key.type === "keyup") {
        setTrexAnimation("idle");
      }
    }
    addEventListener("keydown", trexAnimations);
    addEventListener("keyup", trexAnimations);
    addEventListener("mousedown", trexAnimations);
  }, []);

  return (
    <Canvas camera={{ position: [0, 20, 30], fov: 50 }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <IslandModel />
      <Trex trexAnimation={trexAnimation} />
    </Canvas>
  );
}

export default JurassicPark;
