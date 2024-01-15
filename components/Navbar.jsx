import React from "react";
import { styled } from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { FiBookOpen } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { PiGraduationCap } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

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
  @media (max-width: 435px) {
    display: none;
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
  @media (max-width: 768px) {
    .menu-list {
      display: none;
    }
  }
`;

const MenuList = styled(ListBar)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ScrollTitle = styled(ScrollLink)`
  display: flex;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  gap: 0.25rem;
`;

export const Title = styled.a`
  display: flex;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  gap: 0.25rem;
`;

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <Wrapper>
      <SubWrapper>
        <FaGithub size={60} />
        <ListBar>
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
          <Title onClick={() => toggleTheme()}>
            {theme === "light" ? (
              <MdOutlineLightMode size={35} />
            ) : (
              <MdOutlineDarkMode size={35} />
            )}
          </Title>
        </ListBar>
      </SubWrapper>
      <MenuList>
        <ScrollTitle to="about" smooth={true} duration={500}>
          <FiBookOpen size={20} />
          About
        </ScrollTitle>
        <ScrollTitle to="projects" smooth={true} duration={500}>
          <CgWebsite size={20} />
          Projects
        </ScrollTitle>
        <ScrollTitle to="skills" smooth={true} duration={500}>
          <FiPackage size={20} />
          Skills
        </ScrollTitle>
        <ScrollTitle to="experience" smooth={true} duration={500}>
          <MdWorkOutline size={20} />
          Work Experiences
        </ScrollTitle>
        <ScrollTitle to="education" smooth={true} duration={500}>
          <PiGraduationCap size={20} />
          Education
        </ScrollTitle>

        <ScrollTitle to="contact" smooth={true} duration={500}>
          <BiPhoneCall size={20} />
          Get in touch
        </ScrollTitle>
      </MenuList>
    </Wrapper>
  );
};

export default Navbar;
