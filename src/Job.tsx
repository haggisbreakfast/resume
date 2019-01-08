import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ResumeJob } from "./resume";

const JobContainer = styled.div``;
const Company = styled.p``;
const Position = styled.p``;
const Date = styled.p``;
const Duties = styled.p``;

type JobProps = {
  job: ResumeJob;
};

export const Job = (props: JobProps) => {
  const { job } = props;
  return (
    <JobContainer>
      <Company>{job.company}</Company>
      <Position>{job.position}</Position>
      <Date>{job.startDate}</Date>
      <Date>{job.endDate}</Date>
      <Duties>{job.summary}</Duties>
    </JobContainer>
  );
};
