"use client";
import { Keyboard } from "@/components/Keyboard";

export function Scene() {
  return (
    <group>
      {/* Add your 3D objects and lights here */}
      <Keyboard scale={9} position={[0, -0.5, 3]} rotation={[Math.PI / 2, 0, 0]}/>

      <ambientLight intensity={1} />

      <pointLight position={[0, 1, 5]} intensity={2} />
    </group>
  )
}