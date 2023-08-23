import { MFLogoRigidBody } from "./MFLogo";

export const MFLogos = ({ count = 5 }) => {
  return new Array(count).fill(0).map((_, i) => {
    const position = [0, i, 0];
    const rotation = [0, Math.random() * Math.PI * 2, 0];
    return <MFLogoRigidBody key={i} position={position} rotation={rotation} />;
  });
};
