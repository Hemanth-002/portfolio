"use client";

import React, { useState, useEffect } from "react";
import { styled, keyframes } from "styled-components";
import CustomButton from "./CustomButton";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 4rem 1.5rem;
    gap: 3rem;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Greeting = styled.span`
  font-family: var(--font-mono);
  color: ${(props) => props.theme.colors.accent};
  font-size: 1.1rem;
`;

const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.text} 0%,
    ${(props) => props.theme.colors.subText} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Role = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.subText};
  font-weight: 600;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    justify-content: center;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: ${(props) => props.theme.colors.accent};
  animation: blink 1s step-end infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.subText};
  line-height: 1.6;
  max-width: 500px;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Visual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background: ${(props) => props.theme.colors.accent};
    filter: blur(100px);
    opacity: 0.2;
    border-radius: 50%;
    z-index: -1;
  }
`;

const CodeBlock = styled.div`
  background: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.subText};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  transform: rotate(-5deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.02);
  }

  .keyword {
    color: #ff7b72;
  }
  .string {
    color: #a5d6ff;
  }
  .function {
    color: #d2a8ff;
  }
  .variable {
    color: #79c0ff;
  }
`;

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper id="about">
      <Content>
        <Greeting>Hi there! I am</Greeting>
        <Name>Hemanth Savaram</Name>
        <Role>
          {text}
          <Cursor />
        </Role>
        <Description>
          I build accessible, pixel-perfect, performant, and secure web
          applications. Expert in React, Node.js, and modern web technologies.
        </Description>
        <ButtonGroup>
          <CustomButton
            title="Contact Me"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          />
        </ButtonGroup>
      </Content>

      <Visual>
        <CodeBlock>
          <div>
            <span className="keyword">const</span>{" "}
            <span className="variable">developer</span> = {"{"}
          </div>
          <div style={{ paddingLeft: "1.5rem" }}>
            name: <span className="string">&quot;Hemanth&quot;</span>,
          </div>
          <div style={{ paddingLeft: "1.5rem" }}>
            skills: [<span className="string">&quot;React&quot;</span>,{" "}
            <span className="string">&quot;Node&quot;</span>,{" "}
            <span className="string">&quot;Next.js&quot;</span>],
          </div>
          <div style={{ paddingLeft: "1.5rem" }}>
            hardWorker: <span className="keyword">true</span>,
          </div>
          <div style={{ paddingLeft: "1.5rem" }}>
            problemSolver: <span className="keyword">true</span>,
          </div>
          <div style={{ paddingLeft: "1.5rem" }}>
            hireable: <span className="function">function</span>() {"{"}
          </div>
          <div style={{ paddingLeft: "3rem" }}>
            <span className="keyword">return</span>{" "}
            <span className="keyword">true</span>;
          </div>
          <div style={{ paddingLeft: "1.5rem" }}>{"}"}</div>
          <div>{"};"}</div>
        </CodeBlock>
      </Visual>
    </Wrapper>
  );
};

export default Hero;
