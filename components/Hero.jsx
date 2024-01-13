"use client";

import React from "react";
import { styled } from "styled-components";
import CustomButton from "./CustomButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
  margin: 1rem 1rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
    flex-direction: column;
  }
`;

const Title = styled.div`
  p {
    margin: 0;
    font-weight: bolder;
    font-size: 3.5rem;
  }
`;

const SubTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  color: ${(props) => props.theme.colors.subText};
`;

export const SubText = styled.div`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  p {
    font-size: 1.5rem;
    font-weight: 200;
    color: ${(props) => props.theme.colors.subText};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <Wrapper id="about">
      <Title>
        <p>Hemanth Savaram</p>
        <SubTitle>Full Stack Developer</SubTitle>
      </Title>
      <SubText>
        <p>
          Full Stack Developer with expertise in React, Node.js, and database
          management.
        </p>
        <CustomButton title={"Download Resume"} />
      </SubText>
    </Wrapper>
  );
};

export default Hero;
