import styled from "styled-components";
import fpbImage from "../images/fpb.webp";
import codiImage from "../images/codi.webp";
import pokerImage from "../images/poker.webp";
import cptImage from "../images/cpt.webp";

const PortfolioHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h2 {
    margin: 15px;
  }
`;

const GlassDiv = styled.div`
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  width: 100%;
  grid-gap: 50px;
`;

const PortfolioImage = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  text-decoration: none;
  color: white;

  img {
    width: 300px;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageLink = styled.div`
  position: relative;
`;

const Description = styled.div`
  position: absolute;
  inset: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px) brightness(0.5) saturate(1.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PortfolioImage}:hover & {
    opacity: 1;
  }
`;

export const Portfolio = () => {
  return (
    <PortfolioHolder>
      <GlassDiv>
        <h2>Portfolio</h2>
        <PortfolioGrid>
          <PortfolioImage href="https://fpb.fnt.hm" target="_blank">
            FPBioimage
            <ImageLink>
              <img src={fpbImage} />
              <Description>
                Browser-native volume rendering software published during my
                PhD, with thousands of users via OMERO integration.
              </Description>
            </ImageLink>
          </PortfolioImage>
          <PortfolioImage href="https://alto.codi.bio" target="_blank">
            CODI
            <ImageLink>
              <img src={codiImage} />
              <Description>
                Web app developed at ONI which captures, analyses, visualizes,
                and socializes super-resolution microscopy data.
              </Description>
            </ImageLink>
          </PortfolioImage>
          <PortfolioImage href="https://poker.fnt.hm" target="_blank">
            Video Poker Calculator
            <ImageLink>
              <img src={pokerImage} />
              <Description>
                Web app for calculating optimal video poker strategies, built to
                investigate the new WebGPU API for fast parallel computations.
              </Description>
            </ImageLink>
          </PortfolioImage>
          <PortfolioImage href="https://cpt.fnt.hm" target="_blank">
            NHS Capacity Planner
            <ImageLink>
              <img src={cptImage} />
              <Description>
                Visual Basic with an Excel interface for NHS nurses to balance
                staffing capacity. Created in 2014 and still used today by
                thousands of nurses.
              </Description>
            </ImageLink>
          </PortfolioImage>
        </PortfolioGrid>
      </GlassDiv>
    </PortfolioHolder>
  );
};
