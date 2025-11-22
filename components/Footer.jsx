import React from "react";
import { styled } from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const Wrapper = styled.footer`
  background: ${(props) => props.theme.colors.background};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: 3rem 0;
  margin-top: 4rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.subText};
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.colors.subText};
  font-size: 0.9rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  color: ${(props) => props.theme.colors.subText};
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  a {
    &:hover {
      color: ${(props) => props.theme.colors.accent};
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/hemanthsairam/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={24} />
          </SocialLink>
          <SocialLink
            href="https://github.com/Hemanth-002/"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </SocialLink>
          <SocialLink
            href="https://leetcode.com/Humanth/"
            target="_blank"
            aria-label="LeetCode"
          >
            <SiLeetcode size={24} />
          </SocialLink>
        </SocialLinks>

        <ContactInfo>
          <a href="mailto:hemanth.savaram02@gmail.com">
            hemanth.savaram02@gmail.com
          </a>
          <a href="tel:+917675809162">+91 7675809162</a>
        </ContactInfo>

        <Copyright>
          &copy; {new Date().getFullYear()} Hemanth Sairam. All rights reserved.
        </Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
