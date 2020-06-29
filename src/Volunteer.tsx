import React from 'react';
import styled from 'styled-components';
import { ResumeVolunteer } from './resume';
import { Header } from './Components';

const VolunteerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VolunteerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 25%;
`;

const Organization = styled.span`
  width: 75%;
  font-weight: 400;
  font-size: 18px;
  color: rgb(71, 71, 71);
`;

const Position = styled.span`
  font-style: italic;
`;

const StartDate = styled.span``;

const EndDate = styled.span``;

const Summary = styled.span`
  margin-top: 5px;
`;

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
