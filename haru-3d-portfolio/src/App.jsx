import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ErrorBoundary from './components/ErrorBoundary';
import ForestScene from './components/ForestScene';
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

  const hiddenTargets = ['entrance', 'terms', 'privacy', 'refund', 'tokushoho'];

  return (
    <div className="nav-hints">
      {Object.entries(CAMERA_TARGETS).map(([key, val]) => {
        if (hiddenTargets.includes(key)) return null;
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

function FooterLegalLinks() {
  const introComplete = usePortfolioStore((s) => s.introComplete);
  const setTarget = usePortfolioStore((s) => s.setTarget);

  if (!introComplete) return null;

  return (
    <div className="footer-legal-container">
      <div className="footer-legal-links">
        <button onClick={() => setTarget('terms')} className="footer-btn">Terms of Service</button>
        <span>|</span>
        <button onClick={() => setTarget('privacy')} className="footer-btn">Privacy Policy</button>
        <span>|</span>
        <button onClick={() => setTarget('refund')} className="footer-btn">Refund Policy</button>
        <span>|</span>
        <button onClick={() => setTarget('tokushoho')} className="footer-btn">Tokushoho</button>
      </div>
      <div className="footer-copyright">
        &copy; 2026 NEXT-HARU. All rights reserved.
      </div>
    </div>
  );
}

function App() {
  const introComplete = usePortfolioStore((s) => s.introComplete);
  const currentTarget = usePortfolioStore((s) => s.currentTarget);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <LoadingScreen />

        <Canvas
          camera={{ fov: 60, near: 0.1, far: 500, position: [0, 4, 10] }}
          shadows
          gl={{ antialias: true, alpha: false }}
          style={{ background: '#88ccff' }}
        >
          <Suspense fallback={null}>
            <ForestScene />
            <HitboxZones />
            <CameraController />
            <OrbitControls
              enabled={introComplete && currentTarget === 'entrance'}
              target={CAMERA_TARGETS.entrance.lookAt}
              makeDefault
              enablePan={true}
              enableZoom={true}
              maxPolarAngle={Math.PI / 2 + 0.1} // Prevent going below ground
              minDistance={3}
              maxDistance={25}
            />
          </Suspense>
        </Canvas>

        <NavHints />
        <OverlayUI />
        <FooterLegalLinks />

        <header className="site-header">
          <span className="logo">NEXT-HARU</span>
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
