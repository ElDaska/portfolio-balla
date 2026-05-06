import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function useScrollProgress(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return progress;
}

function AnimatedCamera({ progress }: { progress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    const z = THREE.MathUtils.lerp(8, 3, Math.min(progress * 2, 1));
    const y = progress > 0.5 ? THREE.MathUtils.lerp(0, -2, (progress - 0.5) * 2) : 0;
    camera.position.set(0, y, z);
    camera.lookAt(0, y * 0.3, 0);
  });

  return null;
}

function ParticleField({ progress }: { progress: number }) {
  const ref = useRef<THREE.Points>(null!);
  const count = 800;

  const [basePositions, positions] = useMemo(() => {
    const base = new Float32Array(count * 3);
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      base[i * 3] = (Math.random() - 0.5) * 25;
      base[i * 3 + 1] = (Math.random() - 0.5) * 25;
      base[i * 3 + 2] = (Math.random() - 0.5) * 25;
      pos[i * 3] = base[i * 3];
      pos[i * 3 + 1] = base[i * 3 + 1];
      pos[i * 3 + 2] = base[i * 3 + 2];
    }
    return [base, pos];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    const posAttr = geo.attributes.position;
    const spread = 1 + progress * 1.5;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];
      posAttr.setXYZ(
        i,
        bx * spread + Math.sin(time * 0.3 + i) * 0.1,
        by * spread + Math.cos(time * 0.2 + i * 0.5) * 0.1,
        bz * spread
      );
    }
    posAttr.needsUpdate = true;

    ref.current.rotation.y = time * 0.02 + progress * Math.PI * 0.5;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#FBBF24"
        transparent
        opacity={0.6 + progress * 0.3}
        sizeAttenuation
      />
    </points>
  );
}

function CentralSphere({ progress }: { progress: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.15 + progress * Math.PI;
    ref.current.rotation.z = t * 0.08;
    const scale = 1.8 + progress * 0.8;
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 2]} />
      <MeshDistortMaterial
        color="#F59E0B"
        wireframe
        transparent
        opacity={0.2 + progress * 0.1}
        distort={0.2 + progress * 0.15}
        speed={2}
      />
    </mesh>
  );
}

function OrbitRings({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = progress * Math.PI * 0.3;
  });

  return (
    <group ref={groupRef}>
      {[
        { radius: 2.5, speed: 0.15, opacity: 0.25 },
        { radius: 3.5, speed: -0.1, opacity: 0.18 },
        { radius: 5, speed: 0.06, opacity: 0.12 },
      ].map((ring, i) => (
        <RingMesh key={i} {...ring} progress={progress} index={i} />
      ))}
    </group>
  );
}

function RingMesh({ radius, speed, opacity, progress, index }: {
  radius: number; speed: number; opacity: number; progress: number; index: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.3) * 0.1;
    ref.current.rotation.z = t * speed;
    const expandedRadius = radius + progress * (index + 1) * 0.5;
    ref.current.scale.setScalar(expandedRadius / radius);
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color="#FBBF24" transparent opacity={opacity} />
    </mesh>
  );
}

function DataStreams({ progress }: { progress: number }) {
  const ref = useRef<THREE.Group>(null!);
  const streamsCount = 12;

  const streamData = useMemo(() => {
    return Array.from({ length: streamsCount }, (_, i) => ({
      angle: (i / streamsCount) * Math.PI * 2,
      radius: 3 + Math.random() * 2,
      speed: 0.5 + Math.random() * 0.5,
      length: 0.5 + Math.random() * 1,
    }));
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  const streamOpacity = Math.max(0, (progress - 0.3) * 2);
  if (streamOpacity <= 0) return null;

  return (
    <group ref={ref}>
      {streamData.map((s, i) => {
        const x = Math.cos(s.angle) * s.radius;
        const z = Math.sin(s.angle) * s.radius;
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, -s.angle, 0]}>
            <boxGeometry args={[0.02, s.length * progress, 0.02]} />
            <meshBasicMaterial color="#FBBF24" transparent opacity={streamOpacity * 0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

function Scene({ progress }: { progress: number }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#FBBF24" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#F59E0B" />

      <AnimatedCamera progress={progress} />
      <ParticleField progress={progress} />
      <CentralSphere progress={progress} />
      <OrbitRings progress={progress} />
      <DataStreams progress={progress} />
    </>
  );
}

interface ScrollHintProps {
  visible: boolean;
}

function ScrollHint({ visible }: ScrollHintProps) {
  if (!visible) return null;
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
      <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}

export default function ScrollScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <Scene progress={progress} />
        </Canvas>

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ opacity: Math.max(0, 1 - progress * 4) }}
        >
          <div className="text-center px-4">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-2xl mx-auto mb-6 shadow-amber-500/20">
              <img src="/photo_pro.JPG" alt="El Hadji Balla DIOP" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              El Hadji Balla{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">DIOP</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              Contrôleur Financier &bull; FP&A &bull; Automatisation
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ opacity: progress > 0.25 && progress < 0.6 ? Math.min(1, (progress - 0.25) * 4) : progress >= 0.6 ? Math.max(0, 1 - (progress - 0.6) * 4) : 0 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 max-w-4xl w-full">
            {[
              { value: "5+", label: "Années d'expérience" },
              { value: "FP&A", label: "Spécialisation" },
              { value: "3", label: "Pays" },
              { value: "Data", label: "Power BI & Python" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 md:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                style={{
                  transform: `translateY(${(1 - Math.min(1, Math.max(0, (progress - 0.2 - i * 0.03) * 5))) * 30}px)`,
                  opacity: Math.min(1, Math.max(0, (progress - 0.2 - i * 0.03) * 5)),
                }}
              >
                <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 pb-20"
          style={{ opacity: progress > 0.7 ? Math.min(1, (progress - 0.7) * 4) : 0 }}
        >
          <div className="text-center px-4">
            <p className="text-lg md:text-2xl text-white font-light mb-4">
              Découvrez mon <span className="text-amber-400 font-semibold">parcours</span> et mes{" "}
              <span className="text-amber-400 font-semibold">réalisations</span>
            </p>
            <svg className="w-6 h-6 text-amber-400 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <ScrollHint visible={progress < 0.05} />
      </div>
    </div>
  );
}
