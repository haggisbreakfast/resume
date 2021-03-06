import React from 'react';
import styled from 'styled-components';
import { ResumeJob } from './resume';
import {Date} from './Components';
const JobContainer = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
`;

const Company = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #101518;
`;

const Position = styled.span`
  font-style: italic;
  color: #101518;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;


const Duties = styled.p`
  margin-top: 5px;
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
          <Date>{job.startDate} - {job.endDate}</Date>
        </DateContainer>
      </TitleContainer>
      <Position>{job.position}</Position>
      <Duties>{job.summary}</Duties>
    </JobContainer>
  );
};
