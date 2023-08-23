import { Suspense } from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { MFLogo } from "./MFLogo";

const Holder = styled.div`
  position: fixed;
  inset: 0;
  background: white;
`;

export const LogoCanvas = () => {
  const position = [0, -30, 0];
  const rotation = [0, 0, 0];

  return (
    <Holder>
      <Suspense fallback={null}>
        <Canvas flat>
          <MFLogo position={position} rotation={rotation} />;
          <OrbitControls enablePan={true} enableZoom={true} />
        </Canvas>
      </Suspense>
    </Holder>
  );
};
