import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Keycap: THREE.Mesh;
  };
  materials: Record<string, unknown>;
};

export function Keycap() {
  const { nodes } = useGLTF("/keycap.gltf") as unknown as GLTFResult;

  const placeholderMat = new THREE.MeshStandardMaterial({
    color: "#cccccc",
    roughness: 0.2,
  });

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keycap.geometry}
        material={placeholderMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
    </group>
  );
}
