import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${(props) =>
    props.theme.colors.background === "#0d1117"
      ? "rgba(13, 17, 23, 0.85)"
      : "rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background 0.3s ease, border-color 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(360deg);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(ScrollLink)`
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }

  &.active {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryButton};
    border-color: ${(props) => props.theme.colors.subText};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background: ${(props) => props.theme.colors.card};
  z-index: 101;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Nav scrolled={scrolled}>
        <Container>
          <Logo>
            <FaGithub size={32} />
            <span>Hemanth</span>
          </Logo>

          <NavLinks>
            <NavLink to="about" smooth={true} duration={500} offset={-70}>
              About
            </NavLink>
            <NavLink to="experience" smooth={true} duration={500} offset={-70}>
              Experience
            </NavLink>
            <NavLink to="skills" smooth={true} duration={500} offset={-70}>
              Skills
            </NavLink>
            <NavLink to="projects" smooth={true} duration={500} offset={-70}>
              Projects
            </NavLink>
            <NavLink to="education" smooth={true} duration={500} offset={-70}>
              Education
            </NavLink>
            <NavLink to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </NavLink>
            <ThemeToggle onClick={toggleTheme}>
              {theme === "light" ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdOutlineDarkMode size={20} />
              )}
            </ThemeToggle>
          </NavLinks>

          <MobileMenuButton onClick={toggleMenu}>
            <MdMenu />
          </MobileMenuButton>
        </Container>
      </Nav>

      <Overlay isOpen={isOpen} onClick={toggleMenu} />
      <MobileMenu isOpen={isOpen}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <MobileMenuButton onClick={toggleMenu}>
            <MdClose />
          </MobileMenuButton>
        </div>
        <NavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink
          to="experience"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          Experience
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>
          Skills
        </NavLink>
        <NavLink
          to="projects"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="education"
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          Education
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </NavLink>
        <div style={{ marginTop: "auto" }}>
          <ThemeToggle
            onClick={toggleTheme}
            style={{ width: "100%", borderRadius: "6px" }}
          >
            {theme === "light" ? (
              <>
                <MdOutlineLightMode
                  size={20}
                  style={{ marginRight: "0.5rem" }}
                />{" "}
                Light Mode
              </>
            ) : (
              <>
                <MdOutlineDarkMode
                  size={20}
                  style={{ marginRight: "0.5rem" }}
                />{" "}
                Dark Mode
              </>
            )}
          </ThemeToggle>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navbar;
