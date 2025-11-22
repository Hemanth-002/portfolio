import React from "react";
import { styled } from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.buttonText};
  border: 1px solid rgba(27, 31, 36, 0.15);
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 5px 16px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  box-shadow: rgba(27, 31, 36, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;

  &:hover {
    background-color: #2c974b;
    border-color: rgba(27, 31, 36, 0.15);
  }

  &:active {
    background-color: #298e46;
    box-shadow: rgba(27, 31, 36, 0.15) 0px 1px 0px 0px inset;
  }
`;

const CustomButton = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export default CustomButton;
