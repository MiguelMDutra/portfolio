import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
/* eslint-disable */

type trexProps = {
  refTrex: React.RefObject<THREE.Group | null>;
};

export function TrexController({ refTrex }: trexProps) {
  const lastMoveTime = useRef(0);

  useFrame((state) => {
    const obj = refTrex.current;
    if (!obj) return;

    const now = state.clock.elapsedTime;

    // a cada 1 segundo
    if (now - lastMoveTime.current > 1) {
      obj.position.z += 0;
      lastMoveTime.current = now;
    }
  });

  return null;
}
