"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  Billboard,
  Image as DreiImage,
} from "@react-three/drei";
import { useMemo } from "react";

function DiyaParticles() {
  const positions = useMemo(() => {
    const pts: number[] = [];
    const count = 150;
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 2.5;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.6;
      pts.push(Math.cos(a) * r, y, Math.sin(a) * r);
    }
    return Float32Array.from(pts);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={"#f59e0b"}
        size={0.04}
        sizeAttenuation
        opacity={0.9}
        transparent
      />
    </points>
  );
}

function GaneshaBillboard({ url }: { url: string }) {
  return (
    <Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.9}>
      <Billboard follow={false} args={[0, 0, 0]}>
        {/* Drei Image renders a textured plane. crossOrigin avoids CORS issues. */}
        <DreiImage
          url={url}
          crossOrigin="anonymous"
          scale={[2.6, 1.6, 1]}
          transparent
          toneMapped={false}
        />
      </Billboard>
    </Float>
  );
}

export function GaneshThreeScene({
  imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parel-cha-maharaja-this-year-v0-nqmur317dilf1.jpg-3FwKVBzaPizY8PAKLf5aVDJ5owB9v2.jpeg",
}: {
  imageUrl?: string;
}) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 1.1, 4], fov: 45 }}
      className="h-full w-full"
    >
      <color attach="background" args={["#0b1740"]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[2, 3, 2]}
        intensity={0.7}
        color={"#ffd7a1"}
      />
      <group position={[0, 0.6, 0]}>
        <GaneshaBillboard url={imageUrl} />
        <DiyaParticles />
      </group>
      <Environment preset="studio" />
    </Canvas>
  );
}

export default GaneshThreeScene;
