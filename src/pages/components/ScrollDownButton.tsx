import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { YELLOW } from "../../style/GlobalStyle";

const ScrollDownHolder = styled.div`
  pointer-events: auto;

  position: absolute;
  bottom: 20px;
  margin: auto;

  :hover {
    background: ${YELLOW};
  }
  transition: background 0.3s ease;
`;

const ScrollDownButtonDiv = styled.div<{ opacity: number }>`
  cursor: ${(p) => (p.opacity > 0 ? "pointer" : "default")};

  border-radius: 45px;
  height: 45px;
  width: 45px;

  background: #0000007f;
  backdrop-filter: blur(5px);
  opacity: ${(p) => p.opacity};

  transition: 0.5s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  & > i {
    pointer-events: none;
  }
`;

export const ScrollDownButton = () => {
  const [opacity, setOpacity] = useState(1);

  const scrollDown = useCallback(() => {
    opacity > 0 &&
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }, [opacity]);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(0, 1 - scrollY / 100);
    setOpacity(newOpacity);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollDownHolder>
      <ScrollDownButtonDiv onClick={scrollDown} opacity={opacity}>
        <i className="fa-solid fa-chevron-down" />
      </ScrollDownButtonDiv>
    </ScrollDownHolder>
  );
};
