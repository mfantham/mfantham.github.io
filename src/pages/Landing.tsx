import styled from "styled-components";
import { MFCanvas } from "../logo/MFCanvas";

const LandingHolder = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: min(5rem, 10vw);
  position: relative;
`;

const TitleShadow = styled.span`
  color: transparent;
  position: absolute;
  inset: 0;
  z-index: -1;
  text-shadow:
    0 0 20px black,
    0 0 20px black;
`;

const Subtitle = styled.h4`
  font-size: min(2rem, 4vw);
  font-family: "Lato";
  font-weight: 400;

  text-shadow: 0 0 20px black;
`;

const M = styled.span`
  color: var(--yellow);
`;

const F = styled.span`
  color: var(--blue);
`;

const ButtonsHolder = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-auto-columns: 1fr;
  margin: 2em;
  pointer-events: auto;

  & > * {
    grid-row: 1;
  }
`;

const Button = styled.a`
  background: var(--blue);
  padding: 1em;
  cursor: pointer;
  color: white;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  & > i {
    margin-right: 0.5em;
  }
`;

const ButtonGrey = styled(Button)`
  background: var(--dark-grey);
  letter-spacing: 1.8px; // To make text the same width as "LinkedIn". Less extreme if it says "Resume"
`;

export const Landing = () => {
  return (
    <>
      <MFCanvas />
      <LandingHolder>
        <Title>
          <TitleShadow>Marcus Fantham</TitleShadow>
          <M>M</M>
          <span>arcus</span> <F>F</F>
          <span>antham</span>
        </Title>
        <Subtitle>Scientific software engineer</Subtitle>
        <ButtonsHolder>
          <Button
            href="https://www.linkedin.com/in/marcus-fantham-b6936a82"
            target="_blank"
          >
            {/* <i className="fa-solid fa-file-arrow-down"></i> */}
            {/* Resume */}
            <i className="fa-brands fa-linkedin" />
            LinkedIn
          </Button>
          <ButtonGrey href="https://github.com/mfantham" target="_blank">
            <i className="fa-brands fa-github" />
            Github
          </ButtonGrey>
        </ButtonsHolder>
      </LandingHolder>
    </>
  );
};
