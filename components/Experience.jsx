import styled from "styled-components";
import { experience } from "@/constants/experience";
import { ImageWrap, SubWrapper } from "./Skills";
import { Name } from "./Card";
import Link from "next/link";

export const ExpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  p,a {
    margin: 0;
  }
`;

const Description = styled.p`
  width: calc(100% / 1.5);
`;

const SubTitle = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.colors.subText};
`;

const Company = styled.a`
  text-decoration: none;
  font-weight: 600;
  margin-top: 0.5rem;
  color: inherit;
`;

const Experience = () => {
  return (
    <SubWrapper>
      <h2>Experience</h2>
      {experience?.map((e) => (
        <ExpWrapper key={e.id}>
          <Link href={e.companyLink} target="_blank" rel="noreferrer">
            <ImageWrap src={e.image} width="86" height="86" alt={e.alt} />
          </Link>
          <ProfileWrapper>
            <Name>{e?.role}</Name>
            <Company href={e.companyLink} target="_blank">
              {e?.company}
            </Company>
            <SubTitle>{e?.period}</SubTitle>
            <p>{e?.skills}</p>
            <Description>{e?.description}</Description>
          </ProfileWrapper>
        </ExpWrapper>
      ))}
    </SubWrapper>
  );
};

export default Experience;
