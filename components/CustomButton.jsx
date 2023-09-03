import React from "react";
import { styled } from "styled-components";

export const Button = styled.button`
  background: #ffff;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  max-height: 3.5rem;
  max-width: 10rem;
  padding: 0.75rem 1rem;
  &:hover {
    background: #aba9a9;
  }
`;

const CustomButton = ({ title }) => {
  return <Button>{title}</Button>;
};

export default CustomButton;

