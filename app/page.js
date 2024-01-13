"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import Hero from "@/components/Hero";
import { Navbar, Footer } from "@/components";
import Contibutions from "@/components/Contibutions";
import Projects from "@/components/Projects";
import { useState } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 1rem;
    padding: 0;
    font-family: 'Kumbh Sans Variable', sans-serif;
    letter-spacing: 0.2px;
    font-size: 16px;
    transition: background 0.5s ease, color 0.3s ease;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 0;
    }
  }
`;

const theme = {
  light: {
    colors: {
      background: "#FFFDF9",
      text: "#36313D",
      subText: "#646262",
      buttonColor: "#555",
      buttonText: "#ffffff",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em",
    },
  },
  dark: {
    colors: {
      background: "#0e1117",
      text: "#FFFDF9",
      subText: "#c2c2c2",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em",
    },
  },
};

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main>
      <ThemeProvider theme={theme[currentTheme]}>
        <Navbar toggleTheme={toggleTheme} theme={currentTheme} />
        <Hero />
        <Contibutions />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </main>
  );
}
