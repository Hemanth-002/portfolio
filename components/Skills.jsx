import { startCase } from "lodash";
import Image from "next/image";
import styled from "styled-components";
import { links } from "@/constants/skills";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  margin: 2rem 1.5rem;
`;

export const SubWrapper = styled.div`
  margin: 4rem 4rem;
  @media (max-width: 435px) {
    margin: 3rem 1.5rem;
  }
`;

export const SubText = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const Link = ({ href, target, rel, children }) => (
  <SubText href={href} target={target} rel={rel}>
    {children}
  </SubText>
);

const StyledImage = styled(Image)`
  @media (max-width: 435px) {
    height: 4.5rem;
    width: 4.5rem;
  }
`;

export const ImageWrap = ({
  src,
  alt,
  width = "72",
  height = "72",
  bgColor,
}) => (
  <StyledImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    style={{ backgroundColor: bgColor ?? null, padding: "0.25rem " }}
  />
);

const Component = ({ link }) => (
  <Link href={link.href} target="_blank" rel="noreferrer">
    <ImageWrap
      src={link.src}
      alt={link.alt}
      bgColor={link.bgColor}
    />
    <p>{startCase(link.alt)}</p>
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
