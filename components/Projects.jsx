import { projects } from "@/constants/constants";
import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  margin: 2rem 4rem;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
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
