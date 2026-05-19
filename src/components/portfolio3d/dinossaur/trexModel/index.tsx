import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { useEffect, type RefObject } from "react";
import * as THREE from "three";

{
  /*o meu antes tava errado ent pq o three nao existia e dai quando eu usasse um constructor ia bugar*/
}

type AnimationProps = {
  refTrex: RefObject<THREE.Group | null>;
  trexAnimation: string;
};

export function TrexModel({ trexAnimation, refTrex }: AnimationProps) {
  const { scene, animations } = useGLTF("/3d/trex/source/trex.glb");
  const { actions } = useAnimations(animations, refTrex);

  useEffect(() => {
    const animation = actions[trexAnimation];
    animation?.fadeIn(0.2).play();
  }, [trexAnimation, actions]);

  const trexTexture = useTexture("/3d/trex/textures/trexTexture.png");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = trexTexture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, trexTexture]);

  return (
    <group ref={refTrex} position={[0, 2, 10]}>
      <primitive object={scene} scale={1} />;
    </group>
  );
}
