import React, { Suspense } from 'react';
import { useGLTF, Environment } from '@react-three/drei';

import usePortfolioStore from '../store/usePortfolioStore';

function SignHitbox({ name, position, size }) {
    const setTarget = usePortfolioStore((s) => s.setTarget);
    return (
        <mesh
            position={position}
            onClick={(e) => {
                e.stopPropagation();
                setTarget(name);
            }}
            onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
                document.body.style.cursor = 'default';
            }}
        >
            <boxGeometry args={size} />
            <meshStandardMaterial
                color="red"
                transparent
                opacity={0} // Invisible in production
                wireframe={false}
            />
        </mesh >
    );
}

/**
 * ForestScene - Loads and renders both house.glb and signpost.glb
 */
function Models() {
    // Load dual models
    console.log('Loading house...'); const house = useGLTF('/models/house.glb'); console.log('House loaded!');
    console.log('Loading signpost...'); const signpost = useGLTF('/models/signpost.glb'); console.log('Signpost loaded!');

    return (
        <group position={[0, -2.5, 0]}>
            {/* House Model (The Tree) */}
            <primitive
                object={house.scene}
                scale={9.5}
                position={[2, 5, 0]}
                rotation={[0, Math.PI / 5, 0]}
            />
            {/* Signpost Model in foreground */}
            <group
                scale={4.5}
                position={[-4.5, 4.5, 3.5]}
                rotation={[0, Math.PI / 5, 0]} // Angled towards the center
            >
                <primitive object={signpost.scene} />
                {/* Hitboxes assigned to signs (Top to bottom) */}
                <SignHitbox name="orange" position={[0, 0.9, 0.2]} size={[0.3, 0.1, 0.1]} />     {/* ROOTS -> About Me (Orange) */}
                <SignHitbox name="strawberry" position={[0, 0.7, 0.2]} size={[0.4, 0.1, 0.1]} /> {/* ADVENTURE -> Games (Strawberry) */}
                <SignHitbox name="grape" position={[0, 0.5, 0.2]} size={[0.5, 0.1, 0.1]} />      {/* TREASURES -> Projects (Grape) */}
                <SignHitbox name="apple" position={[0, 0.3, 0.2]} size={[0.7, 0.1, 0.1]} />      {/* HELLO -> Contact Us (Apple) */}
            </group>
        </group>
    );
}

export default function ForestScene() {
    return (
        <Suspense fallback={null}>
            {/* Natural, warm forest lighting */}
            <ambientLight intensity={1.2} color="#e0ffd4" />

            {/* Sunlight */}
            <directionalLight
                position={[10, 15, 10]}
                intensity={2.0}
                color="#fff1db"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            {/* Fill light from the ground and sky */}
            <hemisphereLight intensity={1.0} color="#ffffff" groundColor="#2a3d24" />

            {/* Preset environment for natural reflections */}
            <Environment preset="forest" />

            <Models />

        </Suspense>
    );
}

// Preload the models
useGLTF.preload('/models/house.glb');
useGLTF.preload('/models/signpost.glb');
