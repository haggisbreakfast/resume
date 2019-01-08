import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResumeEducation } from './resume';

const EducationContainer = styled.div``;
const Institution = styled.p``;
const Program = styled.p``;
const StudyType = styled.p``;
const StartDate = styled.p``;
const EndDate = styled.p``;

type EducationProps = {
  school: ResumeEducation;
};

export const School = (props: EducationProps) => {
  const { school } = props;
  return (
    <EducationContainer>
      <Institution>{school.institution}</Institution>
      <Program>{school.program}</Program>
      <StudyType>{school.studyType}</StudyType>
      <StartDate>{school.startDate}</StartDate>
      <EndDate>{school.endDate}</EndDate>
    </EducationContainer>
  );
};
