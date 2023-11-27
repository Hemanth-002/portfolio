"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import Hero from "@/components/Hero";
import { Navbar, Footer } from "@/components";
import Contibutions from "@/components/Contibutions";
import Projects from "@/components/Projects";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 1rem;
    padding: 0;
    /* background: #0e1117; */
    font-family: Open-Sans, Helvetica, Sans-Serif;
    /* color: #ffff; */
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 0;
    }
  }
`;

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
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
};

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Contibutions />
        <Projects />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </main>
  );
}
