import styled from "styled-components";
import Link from "next/link";
import { education } from "@/constants/education";
import { ImageWrap, SubWrapper } from "./Skills";
import { Name } from "./Card";

export const ExpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  gap: 1rem;
  @media (max-width: 435px) {
    flex-wrap: wrap;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  p,
  a {
    margin: 0;
  }
`;

const SubTitle = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.colors.subText};
`;

const Education = () => {
  return (
    <SubWrapper id="education">
      <h2>Education</h2>
      {education?.map((e) => (
        <ExpWrapper key={e.id}>
          <Link href={e.schoolLink} target="_blank" rel="noreferrer">
            <ImageWrap src={e.image} width="86" height="86" alt={e.alt} />
          </Link>
          <ProfileWrapper>
            <Name>
              <Link href={e.schoolLink} target="_blank" rel="noreferrer">
                {e?.school}
              </Link>
            </Name>
            <p>{e?.department}</p>
            <SubTitle>{e?.period}</SubTitle>
            <p>Grade: {e?.grade}</p>
          </ProfileWrapper>
        </ExpWrapper>
      ))}
    </SubWrapper>
  );
};

export default Education;
