// third party imports
import React from 'react';
import styled from 'styled-components';

// local imports
import { ResumeEducation } from './resume';
import { Date} from './Components';


const EducationContainer = styled.div``;

const SchoolContainer = styled.div`
  margin-bottom: 10px;
`;

const EducationTitle = styled.div`
  display: flex;
  margin-bottom: 0px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 25%;
`;

const Institution = styled.span`
  width: 75%;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 0px;
  color: rgb(71, 71, 71);
`;

const Program = styled.span`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const StudyType = styled.span``;


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
            <Date>{school.startDate} - {school.endDate}</Date>
          </DateContainer>
        </EducationTitle>
        <Program>{school.program}</Program>
        <StudyType>{school.studyType}</StudyType>
      </SchoolContainer>
    </EducationContainer>
  );
};
