import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
  margin: 1rem 1rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
    flex-direction: column;
  }
`;

const Footer = () => {
  return <Wrapper></Wrapper>;
};

export default Footer;
