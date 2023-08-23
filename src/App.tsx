import { styled } from "styled-components";

import { MFCanvas } from "./logo/MFCanvas";
import { Landing } from "./pages";
import { Portfolio } from "./pages/Portfolio";
import { GlobalStyle } from "./style/GlobalStyle";
import { LogoCanvas } from "./logo/LogoCanvas";

const ScrollablePage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

export default () => {
  console.log("Nothing to see here 👀");

  if (location.pathname === "/logo") {
    return <LogoCanvas />;
  }

  return (
    <>
      <GlobalStyle />
      <MFCanvas />
      <ScrollablePage>
        <Landing />
        <Portfolio />
      </ScrollablePage>
    </>
  );
};
