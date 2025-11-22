"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import Hero from "@/components/Hero";
import { Navbar, Footer } from "@/components";
import Contibutions from "@/components/Contibutions";
import Projects from "@/components/Projects";
import { useState, useEffect } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-inter: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-inter);
    font-size: 16px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-inter);
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
  }

  code, pre {
    font-family: var(--font-mono);
  }
`;

const theme = {
  dark: {
    colors: {
      background: "#0d1117",
      text: "#c9d1d9",
      subText: "#8b949e",
      accent: "#58a6ff",
      border: "#30363d",
      card: "#161b22",
      button: "#238636",
      buttonText: "#ffffff",
      secondaryButton: "#21262d",
    },
  },
  light: {
    colors: {
      background: "#ffffff",
      text: "#24292f",
      subText: "#57606a",
      accent: "#0969da",
      border: "#d0d7de",
      card: "#f6f8fa",
      button: "#2da44e",
      buttonText: "#ffffff",
      secondaryButton: "#ebf0f4",
    },
  },
};

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (!mounted) return null;

  return (
    <main>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} theme={currentTheme} />
        <Hero />
        <Contibutions />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </ThemeProvider>
    </main>
  );
}
