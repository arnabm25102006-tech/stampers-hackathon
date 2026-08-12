"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Sphere,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";

export default function HeroCanvas() {
  return (
    <div className="relative flex h-[620px] w-full items-center justify-center lg:h-[650px] lg:w-1/2">

      {/* =====================================================
          PREMIUM GOLD ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#FFD000]/[0.13]
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#FFF3A3]/[0.10]
          blur-[110px]
        "
      />

      {/* =====================================================
          3D CANVAS
      ===================================================== */}

      <Canvas
        camera={{
          position: [0, 0, 4.2],
          fov: 42,
        }}
        dpr={[1, 2]}
      >

        {/* Lighting */}

        <ambientLight intensity={1.5} />

        <pointLight
          position={[3, 3, 4]}
          intensity={8}
          color="#FFF3A3"
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={5}
          color="#FFD000"
        />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          color="#FFFFFF"
        />

        {/* =================================================
            GOLDEN PARTICLES
        ================================================= */}

        <Sparkles
          count={90}
          scale={[4.5, 4.5, 4.5]}
          size={2}
          speed={0.35}
          color="#FFD000"
        />

        {/* =================================================
            MAIN OBJECT
        ================================================= */}

        <Float
          speed={1.6}
          rotationIntensity={0.65}
          floatIntensity={1.4}
        >

          <Sphere args={[1.18, 128, 128]}>

            <MeshDistortMaterial
              color="#FFD000"
              emissive="#EAB900"
              emissiveIntensity={1.5}
              distort={0.28}
              speed={1.5}
              roughness={0.16}
              metalness={0.82}
            />

          </Sphere>

        </Float>

        {/* =================================================
            ORBIT CONTROLS
        ================================================= */}

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.04}
        />

      </Canvas>

      {/* =====================================================
          OUTER GOLD RING
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          h-[340px]
          w-[340px]
          rounded-full
          border
          border-[#FFD000]/10
          shadow-[0_0_80px_rgba(255,208,0,0.06)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          h-[410px]
          w-[410px]
          rounded-full
          border
          border-[#FFD000]/[0.045]
        "
      />

    </div>
  );
}