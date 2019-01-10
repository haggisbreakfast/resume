import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResumeJob } from './resume';

const JobContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // margin-bottom: 30px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45px;
  @media (max-width: 780px) {
    height: 60px;
  }
`;
const Company = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: rgb(71, 71, 71);
`;
const Position = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  font-style: italic;
`;
const DateContainer = styled.div`
  flex-direcion: row;
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const Date = styled.p``;
const Duties = styled.p`
  /* font-size: 14px; */
`;

type JobProps = {
  job: ResumeJob;
};

export const Job = (props: JobProps) => {
  const { job } = props;
  return (
    <JobContainer>
      <TitleContainer>
        <Company>{job.company}</Company>
        <DateContainer>
          <Date>{job.startDate}</Date> -<Date>{job.endDate}</Date>
        </DateContainer>
      </TitleContainer>
      <Position>{job.position}</Position>
      <Duties>{job.summary}</Duties>
    </JobContainer>
  );
};
