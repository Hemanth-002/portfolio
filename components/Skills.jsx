import React from "react";
import styled from "styled-components";
import { links } from "@/constants/skills";
import Image from "next/image";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;

const SkillCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.accent};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
`;

const Skills = () => {
  return (
    <Wrapper id="skills">
      <Title>Tech Stack</Title>
      <Grid>
        {links.map((link, index) => (
          <SkillCard
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <ImageContainer>
              <Image
                src={link.src}
                alt={link.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <p>{link.alt}</p>
          </SkillCard>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Skills;
