import React from 'react';
import styled from 'styled-components';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
// local imports
import { ResumeVolunteer } from './resume';
import { Date, Header, SectionIcon } from './Components';

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
  color: #101518;

`;

const Position = styled.span`
  font-style: italic;
    color: #101518;

`;


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
      <Header>Volunteer<SectionIcon icon={faHandsHelping} /></Header>
      <VolunteerTitle>
        <Organization>{volunteer.organization}</Organization>
        <DateContainer>
          <Date>{volunteer.startDate} - {volunteer.endDate}</Date>
        </DateContainer>
      </VolunteerTitle>
      <Position>{volunteer.position}</Position>
      <Summary>{volunteer.summary}</Summary>
    </VolunteerContainer>
  );
};
