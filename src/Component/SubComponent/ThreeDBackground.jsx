import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from "@react-three/drei";

const TechSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const { clock, mouse } = state;
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;

            meshRef.current.position.x = mouse.x * 2;
            meshRef.current.position.y = mouse.y * 2;
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                    color="#a855f7"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const ThreeDBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
                <TechSphere />
            </Canvas>
        </div>
    );
};

export default ThreeDBackground;
