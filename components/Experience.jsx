import React from "react";
import styled from "styled-components";
import { experience } from "@/constants/experience";
import Image from "next/image";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.text};
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${(props) => props.theme.colors.border};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: -2.55rem;
  top: 0.25rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background};
  border: 4px solid ${(props) => props.theme.colors.accent};
  z-index: 1;
`;

const Content = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const RoleCompanyWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const Role = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

const Company = styled.a`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.accent};
  text-decoration: none;
  font-weight: 600;
  display: block;
  margin-top: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Period = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.subText};
  font-family: var(--font-mono);
  white-space: nowrap;
  background: ${(props) => props.theme.colors.border};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  height: fit-content;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.subText};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

const SkillBadge = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.subText};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const Experience = () => {
  return (
    <Wrapper id="experience">
      <Title>Work Experience</Title>
      <Timeline>
        {experience?.map((e, index) => (
          <TimelineItem key={e.id || index}>
            <Dot />
            <Content>
              <Header>
                <RoleCompanyWrapper>
                  {e.image && (
                    <LogoWrapper>
                      <Image
                        src={e.image}
                        alt={e.company}
                        fill
                        style={{ objectFit: "contain", padding: "4px" }}
                      />
                    </LogoWrapper>
                  )}
                  <div>
                    <Role>{e.role}</Role>
                    <Company href={e.companyLink} target="_blank">
                      {e.company}
                    </Company>
                  </div>
                </RoleCompanyWrapper>
                <Period>{e.period}</Period>
              </Header>
              <Description>{e.description}</Description>
              <Skills>
                {e.skills?.split(",").map((skill, i) => (
                  <SkillBadge key={i}>{skill.trim()}</SkillBadge>
                ))}
              </Skills>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </Wrapper>
  );
};

export default Experience;
