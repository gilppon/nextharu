import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import CodexPage from './components/CodexPage';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import './App.css';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HelmetProvider>
        <ErrorBoundary>
          <div className="app-container">
            <LoadingScreen />
            <CodexPage />
            <header className="site-header">
              <span className="logo">NEXT-HARU</span>
            </header>
          </div>
        </ErrorBoundary>
      </HelmetProvider>
    </MotionConfig>
  );
}

export default App;
