import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import BarScene from './components/BarScene';
import CameraController from './components/CameraController';
import HitboxZones from './components/HitboxZones';
import OverlayUI from './components/OverlayUI';
import LoadingScreen from './components/LoadingScreen';
import usePortfolioStore from './store/usePortfolioStore';
import CAMERA_TARGETS from './data/cameraTargets';
import './App.css';

function NavHints() {
  const introComplete = usePortfolioStore((s) => s.introComplete);
  const currentTarget = usePortfolioStore((s) => s.currentTarget);
  const isOverlayVisible = usePortfolioStore((s) => s.isOverlayVisible);
  const setTarget = usePortfolioStore((s) => s.setTarget);

  if (!introComplete || isOverlayVisible) return null;

  return (
    <div className="nav-hints">
      {Object.entries(CAMERA_TARGETS).map(([key, val]) => {
        if (key === 'entrance') return null;
        return (
          <button
            key={key}
            className={`nav-btn ${currentTarget === key ? 'active' : ''}`}
            onClick={() => setTarget(key)}
          >
            {val.label}
          </button>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <LoadingScreen />

      <Canvas
        camera={{ fov: 60, near: 0.1, far: 200, position: [0, 6, 15] }}
        shadows
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#0a0a0f' }}
      >
        <Suspense fallback={null}>
          <BarScene />
          <HitboxZones />
          <CameraController />
        </Suspense>
      </Canvas>

      <NavHints />
      <OverlayUI />

      <header className="site-header">
        <span className="logo">HARU'S BAR</span>
      </header>
    </div>
  );
}

export default App;
