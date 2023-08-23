import styled from "styled-components";

export const mfBoxShadow = `0 8px 32px 0 rgba(31, 38, 135, 0.37)`;
const mfTextShadow = `0 8px 32px rgba(31, 38, 135, 1)`;

export const GlassDiv = styled.div`
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  max-width: 900px;
  width: 100%;
  box-shadow: ${mfBoxShadow};
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-shadow: ${mfTextShadow};
`;
