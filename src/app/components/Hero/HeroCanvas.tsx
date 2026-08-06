"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function HeroCanvas() {
  return (
    <div className="relative flex h-[650px] w-full items-center justify-center lg:w-1/2">

      {/* Background Glow */}

      <div className="absolute h-[520px] w-[520px] rounded-full bg-red-600/20 blur-[180px]" />

      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 45,
        }}
      >
        <ambientLight intensity={1.8} />

        <directionalLight
          intensity={4}
          position={[5, 5, 5]}
        />

        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
        >

          <Sphere args={[1.2, 128, 128]}>

            <MeshDistortMaterial
              color="#ff355e"
              emissive="#ff355e"
              emissiveIntensity={2}
              distort={0.35}
              speed={2}
              roughness={0}
            />

          </Sphere>

        </Float>

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.4}
          enableZoom={false}
          enablePan={false}
        />

      </Canvas>

    </div>
  );
}