import usePortfolioStore from '../store/usePortfolioStore';

/**
 * HitboxZones - Invisible clickable meshes placed at interactive locations.
 * Model is at scale=0.5, position=[0, -1.5, 0]
 * 
 * These transparent boxes capture mouse clicks via raycasting
 * and trigger camera transitions.
 * 
 * Layout mapping:
 * - arcade: Left wall area (arcade machine + sports items)
 * - jukebox: Right side of bar (bottles display area)  
 * - phone: Bar counter center area
 * - board: Left wall with framed photos/posters
 */
const zones = [
    {
        name: 'arcade',
        position: [-2.5, 0.2, 0.8],
        size: [1.2, 1.5, 1.2],
        color: '#ff4444',
    },
    {
        name: 'jukebox',
        position: [2.5, 0.2, 0.5],
        size: [1.2, 1.5, 1.2],
        color: '#44ff44',
    },
    {
        name: 'phone',
        position: [1.2, 0.2, -0.5],
        size: [1.0, 1.2, 1.0],
        color: '#4444ff',
    },
    {
        name: 'board',
        position: [-1.5, 0.4, -0.5],
        size: [1.0, 1.2, 1.0],
        color: '#ff44ff',
    },
];

function HitboxZone({ name, position, size, color }) {
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
                color={color}
                transparent
                opacity={0} // Invisible in production
                wireframe={false}
            />
        </mesh>
    );
}

export default function HitboxZones() {
    return (
        <group>
            {zones.map((zone) => (
                <HitboxZone key={zone.name} {...zone} />
            ))}
        </group>
    );
}
