import "./island.css";
import { useGLTF } from "@react-three/drei";

export function IslandModel() {
  const { scene } = useGLTF("/3d/ilha/ilha.glb");
  return <primitive object={scene} scale={5} position={[0, 0, 0]} />;
}
