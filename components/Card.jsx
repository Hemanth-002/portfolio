import React from "react";
import { styled } from "styled-components";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineLink } from "react-icons/ai";

const CardWrapper = styled.div`
  width: 30rem;
  min-height: 10rem;
  border: 3px solid #2a3036;
  border-radius: 1rem;
  padding: 1rem;
`;

const Title = styled.span`
  display: flex;
  gap: 1rem;
  border: none;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Name = styled.p`
  color: #3081f7;
  font-weight: 800;
  font-size: 1.5rem;
  margin: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const TechStack = styled.p`
  font-weight: 500;
`;

const Card = ({ data }) => {
  const { name, techStacks, description, url } = data;
  return (
    <CardWrapper>
      <Title>
        <LiaBookSolid size={30} />
        <Name>{name}</Name>
        <a href={url} target="_blank">
          <AiOutlineLink size={25} />
        </a>
      </Title>
      <TechStack style={{ fontStyle: "italic" }}>{techStacks}</TechStack>
      <TechStack>{description}</TechStack>
    </CardWrapper>
  );
};

export default Card;
