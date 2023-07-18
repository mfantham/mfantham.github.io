import styled from "styled-components";
import { MFCanvas } from "../logo/MFCanvas";

const LandingHolder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1``;

const Subtitle = styled.h4``;

export const Landing = () => {
  return (
    <>
      <MFCanvas />
      <LandingHolder>
        <Title>Marcus Fantham</Title>
        <Subtitle>Scientific software engineer</Subtitle>
      </LandingHolder>
    </>
  );
};
