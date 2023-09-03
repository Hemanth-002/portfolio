import React from "react";
import { styled } from "styled-components";
import { FiBookOpen } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { PiGraduationCap } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  padding: 0 8rem;
  margin: 2rem 1rem;
  border-bottom: 1px solid;

  @media (max-width: 768px) {
    padding: 0 3rem;
    flex-direction: column;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListBar = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-direction: row;
  padding-bottom: 0.5rem;
`;

const Title = styled.a`
  display: flex;
  cursor: pointer;
  gap: 0.25rem;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <Image src="/github.svg" alt="GitHub Logo" />
        <ListBar>
          <Title>
            <AiFillLinkedin size={40} />
          </Title>
          <Title>
            <SiLeetcode size={35} />
          </Title>
        </ListBar>
      </SubWrapper>
      <ListBar>
        <Title>
          <FiBookOpen size={20} />
          About
        </Title>
        <Title>
          <MdWorkOutline size={20} />
          Work Experiences
        </Title>
        <Title>
          <PiGraduationCap size={20} />
          Education
        </Title>
        <Title>
          <FiPackage size={20} />
          Skills
        </Title>
        <Title>
          <CgWebsite size={20} />
          Projects
        </Title>
        <Title>
          <BiPhoneCall size={20} />
          Get in touch
        </Title>
      </ListBar>
    </Wrapper>
  );
};

export default Navbar;
