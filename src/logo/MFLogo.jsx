import { useCallback, useRef } from "react";
import { RigidBody } from "@react-three/rapier";

import { YELLOW, BLUE } from "./../style/GlobalStyle";

const Cuboid = function Box({
  position = [0, 0, 0],
  size = [1, 1, 1],
  rotation = [0, 0, 0],
  ...props
}) {
  return (
    <mesh position={position} rotation={rotation} scale={1} {...props}>
      <boxGeometry args={size} attach="geometry" />
      <meshBasicMaterial toneMapped={false} attach="material-0" color={BLUE} />
      <meshBasicMaterial toneMapped={false} attach="material-1" color={BLUE} />
      <meshBasicMaterial toneMapped={false} attach="material-2" color={BLUE} />
      <meshBasicMaterial toneMapped={false} attach="material-3" color={BLUE} />
      <meshBasicMaterial
        toneMapped={false}
        attach="material-4"
        color={YELLOW}
      />
      <meshBasicMaterial
        toneMapped={false}
        attach="material-5"
        color={YELLOW}
      />
    </mesh>
  );
};

const rt2 = Math.sqrt(2);
const ort2 = 1 / rt2;

export const MFLogo = ({ onPointerEnter }) => {
  return (
    <>
      <Cuboid
        position={[-1.355, 2 + ort2 / 2, 0]}
        size={[ort2, 4 - ort2, ort2]}
        onPointerEnter={onPointerEnter}
      />
      <Cuboid
        position={[-0.5, 3, 0]}
        size={[ort2, 3.0 * ort2, ort2]}
        rotation={[0, 0, Math.PI / 4]}
        onPointerEnter={onPointerEnter}
      />
      <Cuboid
        position={[0.5, 3, 0]}
        size={[ort2, 3 * ort2, ort2]}
        rotation={[0, 0, -Math.PI / 4]}
        onPointerEnter={onPointerEnter}
      />
      <Cuboid
        position={[1.355, 2 + ort2 / 2, 0]}
        size={[ort2, 4 - ort2, ort2]}
        onPointerEnter={onPointerEnter}
      />
      <Cuboid
        position={[1.355, 3.645, -1]}
        size={[1 / rt2, 1 / rt2, 2]}
        onPointerEnter={onPointerEnter}
      />
      <Cuboid
        position={[1.355, 2.5, -1]}
        size={[1 / rt2, 1 / rt2, 2]}
        onPointerEnter={onPointerEnter}
      />
    </>
  );
};

const f = (max, min = 0) => {
  return Math.random() * (max - min) + min;
};

export const MFLogoRigidBody = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  const rigidBodyRef = useRef();
  const onPointerEnter = useCallback(() => {
    rigidBodyRef.current?.applyImpulse(
      { x: f(0.01), y: f(0.3, 0.1), z: f(0.01) },
      true
    );
    rigidBodyRef.current?.applyTorqueImpulse(
      { x: f(0.1, -0.1), y: f(0.1, -0.1), z: f(0.1, -0.1) },
      true
    );
  }, []);

  return (
    <RigidBody
      ref={rigidBodyRef}
      position={position}
      rotation={rotation}
      scale={0.3}
      restitution={0.8}
    >
      <MFLogo {...{ onPointerEnter }} />
    </RigidBody>
  );
};
