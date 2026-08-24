import React, { useEffect, useRef, useState } from 'react';
import { useProgress } from '@react-three/drei';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './LoadingScreen.css';

const WORDMARK = Array.from('NEXT HARU');
const STATUS_MESSAGES = [
    'INITIALIZING WORLD',
    'GROWING TREES',
    'WAKING FIREFLIES',
    'CALIBRATING LIGHT',
    'TUNING ATMOSPHERE',
];
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/\\*#';
const REDUCED_MOTION = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrambleTo(el, target) {
    if (!el) return;
    const obj = { p: 0 };
    gsap.to(obj, {
        p: 1,
        duration: 0.55,
        ease: 'power2.out',
        overwrite: true,
        onUpdate: () => {
            const settled = Math.floor(obj.p * target.length);
            let out = '';
            for (let i = 0; i < target.length; i++) {
                out += i < settled
                    ? target[i]
                    : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }
            el.textContent = out;
        },
        onComplete: () => {
            el.textContent = target;
        },
    });
}

export default function LoadingScreen() {
    const { progress, active } = useProgress();
    const [isReady, setIsReady] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);
    const [exiting, setExiting] = useState(false);
    const [videoOk, setVideoOk] = useState(true);
    const [videoEnded, setVideoEnded] = useState(REDUCED_MOTION);
    const [statusIndex, setStatusIndex] = useState(0);

    const videoRef = useRef(null);

    const statusEl = useRef(null);
    const charMasks = useRef([]);
    const charInners = useRef([]);
    const uiRef = useRef(null);
    const colsRef = useRef(null);
    const tlRef = useRef(null);

    // Intro reveal
    useEffect(() => {
        if (REDUCED_MOTION) return undefined;

        const masks = charMasks.current.filter(Boolean);
        const inners = charInners.current.filter(Boolean);
        const fades = Array.from(document.querySelectorAll('.ls-fade'));
        const divider = document.querySelector('.ls-divider');

        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
        tlRef.current = tl;

        tl.fromTo(
            inners,
            { yPercent: 115 },
            { yPercent: 0, duration: 1.1, stagger: 0.055 },
            0.35
        );
        tl.fromTo(
            fades,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
            '-=0.6'
        );
        tl.fromTo(
            divider,
            { scaleX: 0 },
            { scaleX: 1, duration: 1.2, ease: 'power3.inOut' },
            '-=0.8'
        );

        // Ambient float after reveal
        tl.call(() => {
            gsap.to(masks, {
                y: '-=5',
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: { each: 0.12, from: 'random' },
            });
        });

        return () => {
            tl.kill();
            gsap.killTweensOf([masks, inners]);
        };
    }, []);

    // Cycle status messages while loading
    useEffect(() => {
        if (isReady) return undefined;
        const id = setInterval(() => {
            setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length);
        }, 1400);
        return () => clearInterval(id);
    }, [isReady]);

    useEffect(() => {
        scrambleTo(statusEl.current, isReady ? 'READY' : STATUS_MESSAGES[statusIndex]);
    }, [statusIndex, isReady]);

    // Ready state: assets loaded (or nothing to load) AND video played through at least once
    useEffect(() => {
        if ((progress >= 100 || !active) && (videoEnded || !videoOk)) {
            const t = setTimeout(() => setIsReady(true), 400);
            return () => clearTimeout(t);
        }
        return undefined;
    }, [progress, active, videoEnded, videoOk]);

    useEffect(() => {
        const t = setTimeout(() => setIsReady(true), 15000);
        return () => clearTimeout(t);
    }, []);

    // Reduced motion: keep the video frozen on its first frame
    useEffect(() => {
        if (REDUCED_MOTION && videoRef.current) videoRef.current.pause();
    }, []);

    const handleEnter = () => {
        if (!isReady || exiting) return;

        if (REDUCED_MOTION) {
            setHasClicked(true);
            return;
        }

        setExiting(true);

        // Cover the video with the curtain columns instantly, then lift them away
        if (videoRef.current) videoRef.current.pause();
        gsap.set(colsRef.current, { opacity: 1 });

        const tl = gsap.timeline({ onComplete: () => setHasClicked(true) });
        tl.to(uiRef.current, { opacity: 0, y: -24, duration: 0.45, ease: 'power2.in' });
        tl.to(colsRef.current.children, {
            yPercent: -101,
            duration: 0.95,
            ease: 'power4.inOut',
            stagger: 0.07,
        }, '-=0.1');
    };

    return (
        <AnimatePresence>
            {!hasClicked && (
                <motion.div
                className={`loading-screen${isReady ? ' is-ready' : ''}${videoOk ? ' has-video' : ''}${exiting ? ' is-exiting' : ''}`}
                onClick={handleEnter}
                style={{ cursor: isReady ? 'pointer' : 'default' }}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
                {videoOk && (
                    <video
                        ref={videoRef}
                        className="ls-video"
                        src="/assets/loading/intro.mp4"
                        muted
                        playsInline
                        preload="auto"
                        onCanPlayThrough={(e) => {
                            e.currentTarget.play().catch(() => {});
                        }}
                        onEnded={(e) => {
                            setVideoEnded(true);
                            e.currentTarget.play().catch(() => {});
                        }}
                        onStalled={(e) => {
                            e.currentTarget.play().catch(() => {});
                        }}
                        onError={() => setVideoOk(false)}
                        aria-hidden="true"
                    />
                )}
                <div className="ls-cols" ref={colsRef} aria-hidden="true">
                    <span /><span /><span /><span /><span />
                </div>
                <div className="ls-grain" aria-hidden="true" />
                <div className="ls-vignette" aria-hidden="true" />

                {/* Top progress hairline */}
                <motion.div
                    className="ls-hairline ls-fade"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />

                <div className="ls-content" ref={uiRef}>
                    <header className="ls-top">
                        <span className="ls-label ls-fade">// NEXT-HARU.COM</span>
                        <span className="ls-label ls-fade">IMMERSIVE 3D PORTFOLIO — EST.2025</span>
                    </header>

                    <div className="ls-center">
                        <h1 className="ls-wordmark" aria-label="NEXT HARU">
                            {WORDMARK.map((ch, i) =>
                                ch === ' ' ? (
                                    <span key={i} className="ls-wm-space" />
                                ) : (
                                    <span key={i} className="ls-wm-mask" ref={(el) => { charMasks.current[i] = el; }}>
                                        <span className="ls-wm-char" ref={(el) => { charInners.current[i] = el; }}>
                                            {ch}
                                        </span>
                                    </span>
                                )
                            )}
                        </h1>
                        <div className="ls-divider" aria-hidden="true" />
                        <p className="ls-sub ls-fade">AI DEVELOPER — GAMES &amp; DIGITAL SOLUTIONS</p>
                    </div>

                    <footer className="ls-bottom">
                        <div className="ls-status ls-fade">
                            <span className="ls-cursor" aria-hidden="true" />
                            <span ref={statusEl}>INITIALIZING WORLD</span>
                        </div>

                        <AnimatePresence mode="wait">
                            {!isReady ? (
                                <motion.span
                                    key="pct"
                                    className="ls-pct-label ls-fade"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    LOADING
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="enter"
                                    className="ls-enter ls-fade"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    [ CLICK TO ENTER ]
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </footer>
                </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
