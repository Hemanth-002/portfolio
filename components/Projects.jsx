import { styled } from "styled-components";
import { projects } from "@/constants/constants";
import Card from "./Card";

const Wrapper = styled.div`
  margin: 2rem 4rem;
  @media (max-width: 425px) {
    margin: 0;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    flex-direction: column;
  }
`;

const Projects = () => {
  return (
    <Wrapper id="projects">
      <h2>Projects</h2>
      <SubWrapper>
        {projects?.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </SubWrapper>
    </Wrapper>
  );
};

export default Projects;
