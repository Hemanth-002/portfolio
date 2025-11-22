import React from "react";
import styled from "styled-components";
import { education } from "@/constants/education";
import Image from "next/image";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: ${(props) => props.theme.colors.accent};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const Content = styled.div`
  flex: 1;
`;

const School = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const Degree = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.accent};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.subText};
  display: block;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
`;

const Grade = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.subText};
  margin-top: 1rem;
  font-weight: 500;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding-top: 1rem;
`;

const Education = () => {
  return (
    <Wrapper id="education">
      <Title>Education</Title>
      {education?.map((e, index) => (
        <Card key={e.id || index}>
          {e.image && (
            <LogoWrapper>
              <Image
                src={e.image}
                alt={e.school}
                fill
                style={{ objectFit: "contain", padding: "8px" }}
              />
            </LogoWrapper>
          )}
          <Content>
            <School>{e.school}</School>
            <Degree>{e.department}</Degree>
            <Period>{e.period}</Period>
            <Grade>Grade: {e.grade}</Grade>
          </Content>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Education;
