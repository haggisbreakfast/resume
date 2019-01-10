import React from 'react';
import styled from 'styled-components';
import { ResumeVolunteer } from './resume';
import { Header } from './index';

const VolunteerContainer = styled.div``;
const VolunteerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;
const DateContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 25%;
`;
const Organization = styled.p`
  width: 75%;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 0px;
  color: rgb(71, 71, 71);
`;
const Position = styled.p`
  font-style: italic;
`;
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
      <VolunteerTitle>
        <Organization>{volunteer.organization}</Organization>
        <DateContainer>
          <StartDate>{volunteer.startDate}</StartDate> - <EndDate>{volunteer.endDate}</EndDate>
        </DateContainer>
      </VolunteerTitle>
      <Position>{volunteer.position}</Position>
      <Summary>{volunteer.summary}</Summary>
    </VolunteerContainer>
  );
};
