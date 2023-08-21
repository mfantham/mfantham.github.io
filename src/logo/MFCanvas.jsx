import { Suspense } from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import { MFLogos } from "./MFLogos";
import { BoundingBox } from "./BoundingBox";

const Holder = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, transparent, black);
`;

export const MFCanvas = () => {
  return (
    <Holder>
      <Suspense fallback={null}>
        <Canvas flat>
          <Physics gravity={[0, -4, 0]} colliders="hull">
            <MFLogos />
            <BoundingBox position={[0, 3, 0]} />
          </Physics>
          <OrbitControls
            autoRotate
            autoRotateSpeed={-0.1}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </Suspense>
    </Holder>
  );
};
