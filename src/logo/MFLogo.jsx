import { useCallback, useLayoutEffect, useRef } from "react";
import { Color, Float32BufferAttribute } from "three";
import { RigidBody } from "@react-three/rapier";

const COLOR1 = new Color(0x182b49);
const COLOR2 = new Color(0xc69214);

const Cuboid = function Box({
  position = [0, 0, 0],
  size = [1, 1, 1],
  rotation = [0, 0, 0],
  ...props
}) {
  // This reference will give us direct access to the mesh to color the faces individually
  const geometry = useRef();

  useLayoutEffect(() => {
    if (geometry.current) {
      const positionAttribute = geometry.current?.getAttribute("position");
      const colorArray = [];
      for (let i = 0; i < positionAttribute?.count; i++) {
        const colorX = i < 16 ? COLOR1 : COLOR2;
        colorArray.push(colorX.r, colorX.g, colorX.b);
      }
      geometry.current?.setAttribute(
        "color",
        new Float32BufferAttribute(colorArray, 3)
      );
      geometry.current.colorsNeedUpdate = true;
    }
  }, [geometry]);

  return (
    <mesh position={position} rotation={rotation} scale={1} {...props}>
      <boxGeometry args={size} ref={geometry} />
      <meshBasicMaterial vertexColors={true} />
    </mesh>
  );
};

const rt2 = Math.sqrt(2);
const ort2 = 1 / rt2;

const f = (max, min = 0) => {
  return Math.random() * (max - min) + min;
}

export const MFLogo = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const rigidBodyRef = useRef();
  const onPointerEnter = useCallback(() => {
    rigidBodyRef.current?.applyImpulse({ x: f(0.01), y: f(0.3, 0.1), z: f(0.01) }, true);
    rigidBodyRef.current?.applyTorqueImpulse({ x: f(0.1, -0.1), y: f(0.1, -0.1), z: f(0.1, -0.1) }, true);
  }, []);

  return (
    <RigidBody ref={rigidBodyRef} position={position} rotation={rotation} scale={0.3} restitution={0.8}>
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
    </RigidBody>
  );
};
