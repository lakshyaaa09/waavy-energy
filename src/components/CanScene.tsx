'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Can({ color }: { color: string }) {
  const canRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (canRef.current) {
      canRef.current.rotation.y += delta * 0.5;
      canRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group ref={canRef}>
        {/* Can Main Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.05, 1.05, 3.4, 48]} />
          <meshStandardMaterial
            color={color}
            metalness={0.88}
            roughness={0.15}
          />
        </mesh>

        {/* Top Rim */}
        <mesh position={[0, 1.78, 0]}>
          <cylinderGeometry args={[0.98, 1.05, 0.16, 48]} />
          <meshStandardMaterial color="#e4e4e7" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Can Lid / Tab Area */}
        <mesh position={[0, 1.86, 0]}>
          <cylinderGeometry args={[0.92, 0.92, 0.05, 48]} />
          <meshStandardMaterial color="#d4d4d8" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Bottom Rim */}
        <mesh position={[0, -1.78, 0]}>
          <cylinderGeometry args={[1.05, 0.95, 0.16, 48]} />
          <meshStandardMaterial color="#a1a1aa" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Subtle Wave Energy Aura Sphere */}
        <mesh scale={1.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={0.35}
            transparent
            opacity={0.12}
            wireframe
          />
        </mesh>
      </group>
      <ContactShadows position={[0, -2.5, 0]} opacity={0.65} scale={8} blur={2.4} far={4} />
    </Float>
  );
}

export default function CanScene({ activeColor }: { activeColor: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: 'clamp(500px, 60vh, 650px)',
        position: 'relative',
        cursor: 'grab',
      }}
      onMouseDown={(e) => (e.currentTarget.style.cursor = 'grabbing')}
      onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color={activeColor} />
        <Can color={activeColor} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

