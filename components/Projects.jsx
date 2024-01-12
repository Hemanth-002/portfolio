import { projects } from "@/constants/constants";
import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
  gap: 3rem;
  margin: 1rem 1rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
    flex-direction: column;
  }
`;

const Projects = () => {
  return (
    <Wrapper>
      {projects?.map((item, idx) => (
        <Card data={item} key={idx} />
      ))}
    </Wrapper>
  );
};

export default Projects;
