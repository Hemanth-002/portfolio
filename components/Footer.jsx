import React from "react";
import { styled } from "styled-components";
import { Title } from "./Navbar";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 8rem;
  gap: 1rem;
  border-top: 1px solid;
  margin-top: 5rem;
  max-height: 15rem;

  div,
  h2 {
    margin: 0;
  }
  h2 {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
    flex-direction: column;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Link = styled.a`
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <Wrapper id="contact">
      <h2>Contact Information</h2>
      <div>
        Email: <Link href="#">hemanth.savaram02@gmail.com</Link>
      </div>
      <div>
        Phone: <Link href="#">+91 7675809162</Link>
      </div>
      <SubWrapper>
        <Title
          href="https://www.linkedin.com/in/hemanthsairam/"
          target="_blank"
        >
          <AiFillLinkedin size={40} />
        </Title>
        <Title href="https://github.com/Hemanth-002/" target="_blank">
          <FaGithub size={40} />
        </Title>
        <Title href="https://leetcode.com/Humanth/" target="_blank">
          <SiLeetcode size={35} />
        </Title>
      </SubWrapper>
      <FooterWrap> © 2024 Hemanth Sairam. All rights reserved.</FooterWrap>
    </Wrapper>
  );
};

export default Footer;
