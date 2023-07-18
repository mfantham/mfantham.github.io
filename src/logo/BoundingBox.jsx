import { CuboidCollider, RigidBody } from "@react-three/rapier";

export const BoundingBox = ({ scale = [5, 5, 5] , position = [0, 0, 0]}) => {
  const [X, Y, Z] = scale.map((s) => s * 5);
  const [x, y, z] = scale;

  return (
    <RigidBody type="fixed" colliders="cuboid" restitution={0.5} position={position}>
      <CuboidCollider position={[0, -y, 0]} args={[X, 0.1, Z]} />
      <CuboidCollider position={[0, y, 0]} args={[X, 0.1, Z]} />
      <CuboidCollider position={[-x, 0, 0]} args={[0.1, Y, Z]} />
      <CuboidCollider position={[x, 0, 0]} args={[0.1, Y, Z]} />
      <CuboidCollider position={[0, 0, -z]} args={[X, Y, 0.1]} />
      <CuboidCollider position={[0, 0, z]} args={[X, Y, 0.1]} />
    </RigidBody>
  );
};
