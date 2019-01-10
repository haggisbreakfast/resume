import React from 'react';
import styled from 'styled-components';
import { ResumeVolunteer } from './resume';
import { Header } from './index';

const VolunteerContainer = styled.div``;
const Organization = styled.p``;
const Position = styled.p``;
const StartDate = styled.p``;
const EndDate = styled.p``;
const Summary = styled.p``;

type VolunteerProps = {
  volunteer: ResumeVolunteer;
};

export const Volunteer = (props: VolunteerProps) => {
  const { volunteer } = props;
  return (
    <VolunteerContainer>
      <Header>Volunteer</Header>
      <Organization>{volunteer.organization}</Organization>
      <Position>{volunteer.position}</Position>
      <StartDate>{volunteer.startDate}</StartDate>
      <EndDate>{volunteer.endDate}</EndDate>
      <Summary>{volunteer.summary}</Summary>
    </VolunteerContainer>
  );
};
