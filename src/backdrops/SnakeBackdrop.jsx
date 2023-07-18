import styled from "styled-components";

const Holder = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  perspective: 1200px;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

const Scene = styled.div`
  --duration: 2s;
  margin-top: -20vh;

  position: relative;
  animation: rotate 20s infinite linear;

  @keyframes rotate {
    from {
      transform: rotateX(65deg) rotateZ(-210deg);
    }
    to {
      transform: rotateX(65deg) rotateZ(150deg);
    }
  }

  //*:not(:empty) {
    transform-style: preserve-3d;
  //}
`;

const Floor = styled.div`
  transform: translateZ(-2px);
  position: absolute;
  inset: -40em;
  background-image: radial-gradient(circle, transparent, #172c49 40em),
    repeating-conic-gradient(#2e4166 0 35deg, #334966 0 55deg, #3d4e66 0 90deg);
  background-size: 100% 100%, 4.5em 4.5em;
  animation: floorPos 1.5s infinite linear;

  @keyframes floorPos {
    100% {
      background-position-x: center, -4.5em; // first background doesn't move, second slides
    }
  }
`;

const Links = styled.div`
  position: absolute;
  display: flex;
  gap: 1em;
  transform: translateX(-50%);
`;

const Link = styled.div`
  width: 3em;
  height: 2em;
  animation: cubeX var(--duration, 2s) var(--delay, 0s) infinite ease-in-out;

  & > div {
    position: absolute;
    inset: 0;
    animation: cubeZ var(--duration, 2s) var(--delay, 0s) infinite ease-in-out;

    & > div {
      position: absolute;
      inset: 0;
      background-color: #cca300;
      box-shadow: 0 0 1em rgba(179, 161, 89, 0.47) inset;
      transform-style: preserve-3d;
      animation: cubeR var(--duration, 2s) var(--delay, 0s) infinite ease-in-out;

      &::before,
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        box-shadow: 0 0 1em #0008 inset;
      }

      &::before {
        background-image: linear-gradient(#997a00, #cca300);
        transform: rotatex(60deg);
        transform-origin: top;
      }

      &::after {
        background-image: linear-gradient(#cca300, #997a00);
        transform: rotatex(-60deg);
        transform-origin: bottom;
      }
    }
  }

  @keyframes cubeZ {
    0%,
    50%,
    100% {
      transform: translateZ(0em);
    }
    25% {
      transform: translateZ(6em);
    }
  }

  @keyframes cubeX {
    0%,
    100% {
      transform: translateX(0em);
    }
    50% {
      transform: translateX(3em);
      animation-timing-function: linear;
    }
  }

  @keyframes cubeR {
    0%,
    50%,
    100% {
      transform: rotateY(0deg);
    }
    12.5% {
      transform: rotateY(45deg);
    }
    37.5% {
      transform: rotateY(-45deg);
    }
  }

  --delay: calc(
    var(--duration, 2s) / 15 * ${(p) => p.idx} - var(--duration, 2s)
  );

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(230, 207, 115, 0.5);
    filter: blur(0.75em);
    transform: scale(1.1) translateZ(-1px);
    animation: shadowOpacity var(--duration, 2s) var(--delay, 0s) infinite
      ease-in-out;

    @keyframes shadowOpacity {
      0%,
      50%,
      100% {
        opacity: 0.8;
        transform: scale(1.1) translateZ(-1px);
      }
      25% {
        opacity: 0.2;
        transform: scale(2) translateZ(-1px);
      }
    }
  }
`;

export const SnakeBackdrop = ({ length = 9 }) => {
  const links = new Array(length).fill(0).map((_, i) => (
    <Link key={i} idx={i}>
      <div>
        <div />
      </div>
    </Link>
  ));

  console.log(length, links);

  return (
    <Holder>
      <Scene>
        <Floor />
        <Links>{links}</Links>
      </Scene>
    </Holder>
  );
};
