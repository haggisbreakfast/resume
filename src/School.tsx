import React from 'react';
import styled from 'styled-components';
import { ResumeEducation } from './resume';

const EducationContainer = styled.div``;

const SchoolContainer = styled.div``;

const EducationTitle = styled.div`
  display: flex;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 25%;
`;

const Institution = styled.p`
  width: 75%;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 0px;
  color: rgb(71, 71, 71);
`;

const Program = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const StudyType = styled.p`
  margin-top: 0px;
`;

const StartDate = styled.p``;

const EndDate = styled.p``;

type EducationProps = {
  school: ResumeEducation;
};

export const School = (props: EducationProps) => {
  const { school } = props;

  return (
    <EducationContainer>
      <SchoolContainer>
        <EducationTitle>
          <Institution>{school.institution}</Institution>
          <DateContainer>
            <StartDate>{school.startDate}</StartDate>-<EndDate>{school.endDate}</EndDate>
          </DateContainer>
        </EducationTitle>
        <Program>{school.program}</Program>
        <StudyType>{school.studyType}</StudyType>
      </SchoolContainer>
    </EducationContainer>
  );
};
