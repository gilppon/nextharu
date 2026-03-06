import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';
import usePortfolioStore from '../store/usePortfolioStore';
import CAMERA_TARGETS from '../data/cameraTargets';

/**
 * CameraController - Handles smooth GSAP-powered camera transitions.
 * Listens to the Zustand store's currentTarget and animates the camera there.
 * 
 * DEBUG: Press 'L' key in the browser to log the current camera position & lookAt
 */
export default function CameraController() {
    const { camera } = useThree();
    const currentTarget = usePortfolioStore((s) => s.currentTarget);
    const showOverlay = usePortfolioStore((s) => s.showOverlay);
    const introComplete = usePortfolioStore((s) => s.introComplete);
    const completeIntro = usePortfolioStore((s) => s.completeIntro);
    const lookAtTarget = useRef(new THREE.Vector3(0, 3, 0));
    const isAnimating = useRef(false);

    // DEBUG: Log camera position on key press 'L'
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'l' || e.key === 'L') {
                const pos = camera.position;
                const dir = new THREE.Vector3();
                camera.getWorldDirection(dir);
                const lookAt = pos.clone().add(dir.multiplyScalar(5));
                console.log(`📷 Camera Position: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}]`);
                console.log(`🎯 Camera LookAt: [${lookAt.x.toFixed(2)}, ${lookAt.y.toFixed(2)}, ${lookAt.z.toFixed(2)}]`);
                console.log(`Copy-paste:\n  position: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}],\n  lookAt: [${lookAt.x.toFixed(2)}, ${lookAt.y.toFixed(2)}, ${lookAt.z.toFixed(2)}],`);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [camera]);

    // Intro animation: start closer to front and fly in smoothly
    useEffect(() => {
        if (!introComplete) {
            camera.position.set(0, 4, 10); // Front view
            lookAtTarget.current.set(0, 4, 0); // Focus straight on
            camera.lookAt(lookAtTarget.current);

            isAnimating.current = true;
            gsap.to(camera.position, {
                x: CAMERA_TARGETS.entrance.position[0],
                y: CAMERA_TARGETS.entrance.position[1],
                z: CAMERA_TARGETS.entrance.position[2],
                duration: 3,
                ease: 'power3.inOut',
                onComplete: () => {
                    completeIntro();
                    isAnimating.current = false;
                },
            });
            gsap.to(lookAtTarget.current, {
                x: CAMERA_TARGETS.entrance.lookAt[0],
                y: CAMERA_TARGETS.entrance.lookAt[1],
                z: CAMERA_TARGETS.entrance.lookAt[2],
                duration: 3,
                ease: 'power3.inOut',
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Transition animation when target changes
    useEffect(() => {
        if (!introComplete) return;

        const target = CAMERA_TARGETS[currentTarget];
        if (!target) return;

        isAnimating.current = true;
        gsap.to(camera.position, {
            x: target.position[0],
            y: target.position[1],
            z: target.position[2],
            duration: 2,
            ease: 'power3.inOut',
            onComplete: () => {
                isAnimating.current = false;
                if (currentTarget !== 'entrance') {
                    showOverlay();
                }
            },
        });

        gsap.to(lookAtTarget.current, {
            x: target.lookAt[0],
            y: target.lookAt[1],
            z: target.lookAt[2],
            duration: 2,
            ease: 'power3.inOut',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTarget, introComplete]);

    // Continuously update camera lookAt only if animating or focused on a specific target
    useFrame(() => {
        if (isAnimating.current || currentTarget !== 'entrance' || !introComplete) {
            camera.lookAt(lookAtTarget.current);
        }
    });

    return null;
}
