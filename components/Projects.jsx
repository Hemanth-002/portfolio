import { styled } from "styled-components";
import { projects } from "@/constants/constants";
import Card from "./Card";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Projects = () => {
  return (
    <Wrapper id="projects">
      <Title>Projects</Title>
      <Grid>
        {projects?.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;
