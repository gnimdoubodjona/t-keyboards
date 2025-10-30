"use client";
import { Keyboard } from "@/components/Keyboard";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";

export function Scene() {
    // const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls({
    //     positionX: 0.2,
    //     positionY: -0.5,
    //     positionZ: 3.8,
    //     rotationX: 1.6,
    //     rotationY: 0.4,
    //     rotationZ: 0,
    // })

    return (
        <group>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
            {/* Add your 3D objects and lights here */}
            <Keyboard scale={9}
                position={[0.2, -0.5, 1.9]}
                rotation={[1.6, 0.4, 0]}
            />

            <ambientLight intensity={1} />

            {/* permet à notre three js d'utiliser la lumière d'un environnement donné ici on a préiciser l"endrtoi c'est l'image 3D hdr */}
            <Environment
            files={["/hdr/blue-studio.hdr"]}
                preset="city"
                environmentIntensity={0.05}
            />

            <spotLight
                position={[-2, 1.5, 3]}
                intensity={30}
                castShadow
                shadow-bias={-0.0002}
                shadow-normalBias={0.002}
                shadow-mapSize={1024}
            />
        </group>
    );

}