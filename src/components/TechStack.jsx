import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";
import { Box, Typography } from "@mui/material";

// Load textures
const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(10)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

// 🔵 Sphere Component
function SphereGeo({ scale, material, isActive }) {
  const api = useRef();

  useFrame((_, delta) => {
    if (!isActive) return;

    delta = Math.min(0.1, delta);

    const pos = api.current.translation();
    const vec = new THREE.Vector3(pos.x, pos.y, pos.z);

    const impulse = vec
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale,
        ),
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      ref={api}
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(20) - 25,
        THREE.MathUtils.randFloatSpread(20) - 10,
      ]}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
      />
    </RigidBody>
  );
}

// 🟠 Pointer (Mouse Interaction)
function Pointer({ isActive }) {
  const ref = useRef();

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;

    const vec = new THREE.Vector3(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0,
    );

    ref.current.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

// 🚀 Main Component
const TechStack = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsActive(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.5,
          metalness: 0.3,
          roughness: 0.2,
          clearcoat: 0.6,
          clearcoatRoughness: 0.1,
        }),
    );
  }, []);

  return (
    <Box
      sx={{ textAlign: "center", py: 10, bgcolor: "#0b0b0d", color: "#fff" }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        // mb={4}
        sx={{
          background:
            "linear-gradient(0deg, rgba(166,164,159,1) 34%, rgba(255,255,255,1) 79%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.2px",
        }}
      >
        My Tech Stack
      </Typography>

      <Box sx={{ height: "500px" }}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 18], fov: 25 }}
          gl={{ alpha: true }}
        >
          
          <ambientLight intensity={1} />
          <directionalLight position={[0, 5, -4]} intensity={2} />

          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />

            {spheres.map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={
                  materials[Math.floor(Math.random() * materials.length)]
                }
                isActive={isActive}
              />
            ))}
          </Physics>

          <Environment files="/models/char_enviorment.hdr" intensity={0.5} />

          <EffectComposer>
            <N8AO intensity={1} aoRadius={2} />
          </EffectComposer>
        </Canvas>
      </Box>
    </Box>
  );
};

export default TechStack;
