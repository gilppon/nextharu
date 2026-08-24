import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import CodexPage from './components/CodexPage';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
