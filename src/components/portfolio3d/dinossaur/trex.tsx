import { useRef } from "react";
import { TrexController } from "./trexController";
import { TrexModel } from "./trexModel";
import * as THREE from "three";

type AnimationProps = {
  trexAnimation: string;
};

export function Trex({ trexAnimation }: AnimationProps) {
  {
    /*group pega todas as partes e junta e tambem cuida das posições do objeto*/
  }
  const refTrex = useRef<THREE.Group | null>(null);
  return (
    <>
      <TrexModel trexAnimation={trexAnimation} refTrex={refTrex} />
      <TrexController refTrex={refTrex} />
    </>
  );
}
