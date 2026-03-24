import React from 'react';
import usePortfolioStore from '../store/usePortfolioStore';

/**
 * FruitHitbox - Invisible proxy hitboxes for the 3D fruit models on the house.
 * These hitboxes trigger the camera animation and show the corresponding UI overlay.
 */
function FruitHitbox({ name, position, size = [0.8, 0.8, 0.8] }) {
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
                opacity={0} // Invisible hitboxes
            />
        </mesh>
    );
}

export default function HitboxZones() {
    return (
        <group>
            {/* These coordinates should match the 'lookAt' points in cameraTargets.js */}
            {/* to ensure the hitboxes are placed exactly over the visual fruits. */}
            
            {/* Orange | ROOTS */}
            <FruitHitbox name="orange" position={[0.5, 4.5, 1]} />

            {/* Strawberry | ADVENTURE */}
            <FruitHitbox name="strawberry" position={[2, 9, 1]} />

            {/* Grape | TREASURES */}
            <FruitHitbox name="grape" position={[-2.5, 6.5, 1]} />

            {/* Apple | HELLO */}
            <FruitHitbox name="apple" position={[4.5, 6.5, 0]} />
        </group>
    );
}
