import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { links } from "@/constants/skills";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  margin: 2rem 1.5rem;
`;

export const SubWrapper = styled.div`
  margin: 4rem 4rem;
`;

export const SubText = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Link = ({ href, target, rel, children }) => (
  <SubText href={href} target={target} rel={rel}>
    {children}
  </SubText>
);
export const ImageWrap = ({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} />
);

const Component = ({ link }) => (
  <Link href={link.href} target="_blank" rel="noreferrer">
    <ImageWrap
      src={link.src}
      alt={link.alt}
      width={link.width}
      height={link.height}
    />
    {/* <p>{startCase(link.alt)}</p> */}
  </Link>
);

const LinkComponent = () => (
  <SubWrapper id="skills">
    <h2>Languages and Tools</h2>
    <Wrapper>
      {links.map((link, index) => (
        <Component key={index} link={link} />
      ))}
    </Wrapper>
  </SubWrapper>
);

export default LinkComponent;
