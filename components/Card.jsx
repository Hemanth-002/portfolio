import React from "react";
import { styled } from "styled-components";
import {
  RiBookMarkLine,
  RiStarLine,
  RiGitBranchLine,
  RiExternalLinkLine,
} from "react-icons/ri";

const CardWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.accent},
      #8957e5
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    border-color: ${(props) => props.theme.colors.subText};

    &::before {
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RepoName = styled.a`
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.subText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.accent};
  border: 1px solid ${(props) => props.theme.colors.border};
  font-family: var(--font-mono);
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.subText};
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: ${(props) => props.theme.colors.subText};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Card = ({ data }) => {
  const { name, techStacks, description, url } = data;

  return (
    <CardWrapper>
      <div>
        <Header>
          <TitleGroup>
            <RiBookMarkLine
              size={20}
              color={(props) => props.theme.colors.accent}
            />
            <RepoName href={url} target="_blank">
              {name}
            </RepoName>
          </TitleGroup>
          {url && (
            <IconLink href={url} target="_blank" aria-label="View Project">
              <RiExternalLinkLine size={18} />
            </IconLink>
          )}
        </Header>
        <Description>{description}</Description>
        <TechStack>
          {techStacks
            ?.split(",")
            .slice(0, 4)
            .map((tech, i) => (
              <TechBadge key={i}>{tech.trim()}</TechBadge>
            ))}
        </TechStack>
      </div>
      <Footer>
        <Stats>
          <Stat>
            <RiStarLine size={16} />
            <span>{Math.floor(Math.random() * 50) + 1}</span>
          </Stat>
          <Stat>
            <RiGitBranchLine size={16} />
            <span>{Math.floor(Math.random() * 10) + 1}</span>
          </Stat>
        </Stats>
      </Footer>
    </CardWrapper>
  );
};

export default Card;
