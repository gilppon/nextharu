import React, { useEffect, useRef } from 'react';
import { useProgress } from '@react-three/drei';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './LoadingScreen.css';

const LETTERS = [
    { char: 'N', src: '/assets/loading/N.jpg' },
    { char: 'E', src: '/assets/loading/E.jpg' },
    { char: 'X', src: '/assets/loading/X.jpg' },
    { char: 'T', src: '/assets/loading/T.jpeg' },
    { char: 'H', src: '/assets/loading/H.jpeg' },
    { char: 'A', src: '/assets/loading/A.jpeg' },
    { char: 'R', src: '/assets/loading/R.jpeg' },
    { char: 'U', src: '/assets/loading/U.jpeg' },
];

export default function LoadingScreen() {
    const { progress, active } = useProgress();
    const [isReady, setIsReady] = React.useState(false);
    const [hasClicked, setHasClicked] = React.useState(false);
    const lettersRef = useRef([]);

    // Animate letters as they appear (using GSAP for the pop effect)
    useEffect(() => {
        if (active && lettersRef.current.length > 0) {
            // Reset state
            gsap.set(lettersRef.current, { scale: 0, opacity: 0, rotationX: 45, y: 50 });

            // Pop effect stagger
            gsap.to(lettersRef.current, {
                scale: 1,
                opacity: 1,
                rotationX: 0,
                y: 0,
                duration: 2.8,
                stagger: 0.15,
                ease: 'back.out(1.7)',
                delay: 0.5 // Slight delay when screen mounts
            });

            // Ambient floating effect after pop
            gsap.to(lettersRef.current, {
                y: "-=10",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.1,
                    from: "random"
                },
                delay: 1.5 // Start after initial pop
            });
        }
    }, [active]);

    // Handle ready state
    useEffect(() => {
        if (progress === 100) {
            // Add a small delay so the bar fills completely before showing 'Enter'
            const timer = setTimeout(() => setIsReady(true), 500);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    // Don't render anything if inactive and fully loaded
    if (!active && progress === 100 && hasClicked) return null;

    const handleEnter = () => {
        if (isReady) {
            setHasClicked(true);
        }
    };

    return (
        <AnimatePresence>
            {(!hasClicked) && (
                <motion.div
                    className="loading-screen"
                    onClick={handleEnter}
                    style={{ cursor: isReady ? 'pointer' : 'default' }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
                >
                    <div className="loading-content-nextharu">
                        <div className="letters-container">
                            {LETTERS.map((letter, index) => (
                                <div
                                    key={index}
                                    className="letter-wrapper"
                                    ref={el => lettersRef.current[index] = el}
                                >
                                    <img
                                        src={letter.src}
                                        alt={`Letter ${letter.char}`}
                                        className="letter-image"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="loading-info">
                            <AnimatePresence mode="wait">
                                {!isReady ? (
                                    <motion.div
                                        key="progress"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="progress-bar-container">
                                            <motion.div
                                                className="progress-bar-fill"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>
                                        <div className="progress-details">
                                            <span className="progress-text">{Math.round(progress)}% loaded</span>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="enter-text"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="enter-prompt"
                                    >
                                        <motion.p
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="click-to-enter"
                                        >
                                            [ CLICK TO ENTER ]
                                        </motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
