import { styled } from "styled-components";

const ImageWrapper = styled.div`
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

const Image = styled.img`
  min-height: 10rem;

  @media (min-width: 768px) {
    padding: 0 7rem;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Contibutions = () => {
  return (
    <ImageWrapper>
      <Image
        src="https://ghchart.rshah.org/hemanth-002"
        alt="Name Your Github chart"
      />
    </ImageWrapper>
  );
};

export default Contibutions;
