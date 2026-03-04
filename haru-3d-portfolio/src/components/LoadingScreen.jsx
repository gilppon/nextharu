import React from 'react';
import { useProgress } from '@react-three/drei';
import './LoadingScreen.css';

/**
 * LoadingScreen - Premium loading screen with progress bar.
 */
export default function LoadingScreen() {
    const { progress, active } = useProgress();

    if (!active) return null;

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <h1 className="loading-title">HARU'S BAR</h1>
                <p className="loading-subtitle">Preparing your experience...</p>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="progress-text">{Math.round(progress)}%</span>
            </div>
        </div>
    );
}
