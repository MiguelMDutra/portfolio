import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
/* eslint-disable */

type trexProps = {
  refTrex: React.RefObject<THREE.Group | null>;
};

export function TrexController({ refTrex }: trexProps) {
  const usedKey = useRef({
    w: false,
    a: false,
    d: false,
    s: false,
  });

  useEffect(() => {
    const trexMov = (key) => {
      if (key.key === "w") usedKey.current.w = true;
      if (key.key === "a") usedKey.current.a = true;
      if (key.key === "d") usedKey.current.d = true;
      if (key.key === "s") usedKey.current.s = true;
    };
    const trexStop = (key) => {
      if (key.key === "w") usedKey.current.w = false;
      if (key.key === "a") usedKey.current.a = false;
      if (key.key === "d") usedKey.current.d = false;
      if (key.key === "s") usedKey.current.s = false;
    };

    addEventListener("keydown", trexMov);
    addEventListener("keyup", trexStop);
  }, []);

  useFrame((state, delta) => {
    if (!refTrex.current) return;

    let targetRotation = refTrex.current.rotation.y;
    const speed = 4;

    if (usedKey.current.d) {
      refTrex.current.position.x += speed * delta;
      targetRotation = Math.PI / 2;
    }

    if (usedKey.current.a) {
      refTrex.current.position.x -= speed * delta;
      targetRotation = -Math.PI / 2;
    }

    if (usedKey.current.w) {
      refTrex.current.position.z -= speed * delta;
      targetRotation = Math.PI;
    }

    if (usedKey.current.s) {
      refTrex.current.position.z += speed * delta;
      targetRotation = 0;
    }

    if (usedKey.current.s && usedKey.current.a) targetRotation = -Math.PI / 4;

    if (usedKey.current.s && usedKey.current.d) targetRotation = Math.PI / 4;

    if (usedKey.current.w && usedKey.current.d)
      targetRotation = (3 * Math.PI) / 4;

    if (usedKey.current.w && usedKey.current.a)
      targetRotation = -(3 * Math.PI) / 4;

    let RealGap = Math.atan2(
      Math.sin(targetRotation - refTrex.current.rotation.y),
      Math.cos(targetRotation - refTrex.current.rotation.y),
    );

    refTrex.current.rotation.y += RealGap * 8 * delta;
  });
  return null;
}
