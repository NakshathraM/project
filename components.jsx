import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Sphere() {
    return (
        <Float speed={2}>
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#ffb6c1"
                    roughness={0.2}
                />
            </mesh>
        </Float>
    );
}

export default function FloatingShape() {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={2} />
                <directionalLight position={[2, 2, 2]} />
                <Sphere />
            </Canvas>
        </div>
    );
}