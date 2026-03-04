import React, { Suspense } from 'react';
import { useGLTF, Environment } from '@react-three/drei';

/**
 * BarScene - Loads and renders the old_bar.glb 3D model.
 * The model is rotated to face the camera properly.
 */
function BarModel() {
  const { scene } = useGLTF('/old_bar.glb');

  return (
    <primitive
      object={scene}
      scale={0.5}
      position={[0, -1.5, 0]}
    />
  );
}

export default function BarScene() {
  return (
    <Suspense fallback={null}>
      {/* Strong ambient light to make bar visible */}
      <ambientLight intensity={1.5} />

      {/* Main directional light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Warm interior point lights */}
      <pointLight position={[-2, 3, 0]} intensity={2.0} color="#ffcc88" distance={15} />
      <pointLight position={[2, 3, 0]} intensity={2.0} color="#ffcc88" distance={15} />
      <pointLight position={[0, 2, -2]} intensity={1.5} color="#ffeedd" distance={12} />
      <pointLight position={[0, 1, 3]} intensity={2.0} color="#ffffff" distance={15} />

      {/* Fill light */}
      <hemisphereLight intensity={1.0} color="#ffeedd" groundColor="#443322" />

      <Environment preset="apartment" />

      <BarModel />

    </Suspense>
  );
}

// Preload the model
useGLTF.preload('/old_bar.glb');
