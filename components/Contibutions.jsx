import { styled } from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  align-self: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const GraphContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  /* Custom scrollbar for the graph container */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.border};
    border-radius: 4px;
  }
`;

const Image = styled.img`
  width: 100%;
  min-width: 800px;
`;

const Contibutions = () => {
  return (
    <Wrapper>
      <Title>Contributions</Title>
      <GraphContainer>
        <Image
          src="https://ghchart.rshah.org/hemanth-002"
          alt="Hemanth's Github Chart"
        />
      </GraphContainer>
    </Wrapper>
  );
};

export default Contibutions;
