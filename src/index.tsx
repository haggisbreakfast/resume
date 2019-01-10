import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { resume, Resume } from './resume';
import { Project } from './Project';
import { Job } from './Job';
import { Skill } from './Skill';
import { School } from './School';
import { Volunteer } from './Volunteer';

library.add(faEnvelope, faPhone, fab);

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  body {
    font-family: 'Roboto Mono', monospace;
      color: grey;
      margin: auto;
  }
`;
const Top = styled.div`
  background: -webkit-linear-gradient(top, #e7fff9 0%, #c1fff3 100%);
  display: flex;
  flex-direction: column;
  color: #36454f;
  padding: 20px;
`;
export const Header = styled.h3`
  color: #36454f;
  font-weight: 900;
  border-bottom: solid #c1fff3;
  font-size: 24px;
  margin-bottom: 10px;
`;
const NameContainer = styled.div`
  align-items: flex-start;
  padding: 10px 0px 50px 0px;
`;
const Name = styled.h1`
  font-size: 50px;
  margin: 0px;
`;
const Label = styled.p`
  margin: 0px;
  font-size: 20px;
`;
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150px;
`;
const ContactMethod = styled.p`
  padding: 10px;
`;
const ContactLink = styled.a`
  color: #36454f;
  padding-left: 10px;
`;
const ContactIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
`;

const Summary = styled.div`
  font-size: 16px;
  color: grey;
  padding-left: 20px;
  padding-right: 20px;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LeftMiddle = styled.div`
  width: 75%;
  margin: 20px;
`;
const Projects = styled.div``;
const Work = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightMiddle = styled.div`
  width: 25%;
  margin: 20px;
  @media (max-width: 780px) {
    width: 75%;
  }
`;
const Skills = styled.div``;
const Education = styled.div``;

type ContactProps = { icon: IconProp; item: string; isLink?: boolean };
const Contact: React.StatelessComponent<ContactProps> = props => {
  const { item, icon, isLink } = props;
  const Content = isLink ? (
    <ContactLink href={item}> {item} </ContactLink>
  ) : (
    <ContactMethod>{item}</ContactMethod>
  );
  return (
    <ContactContainer>
      <ContactIcon icon={icon} />
      {Content}
    </ContactContainer>
  );
};

type AppProps = {
  resume: Resume;
};
const App = (props: AppProps) => {
  const { resume } = props;
  return (
    <div>
      <GlobalStyle />
      <Top>
        <NameContainer>
          <Name>{resume.basics.name}</Name>
          <Label>{resume.basics.label}</Label>
        </NameContainer>
        <ContactsContainer>
          <Contact item={resume.basics.email} icon="envelope" />
          <Contact item={resume.basics.phone} icon="phone" />
          <Contact item={resume.basics.github} icon={['fab', 'github']} isLink />
          <ContactLink href={resume.basics.github} />
          <Contact item={resume.basics.linkedin} icon={['fab', 'linkedin']} isLink />
          <ContactLink href={resume.basics.linkedin} />
        </ContactsContainer>
      </Top>
      <Summary>
        <Header>Profile</Header>
        {resume.basics.summary}
      </Summary>
      <Middle>
        <LeftMiddle>
          <Projects>
            <Header>Projects</Header>
            {resume.projects.map(p => {
              return <Project project={p} />;
            })}
          </Projects>
          <Work>
            <Header>Employment</Header>
            {resume.work.map(w => {
              return <Job job={w} />;
            })}
          </Work>
        </LeftMiddle>
        <RightMiddle>
          <Skills>
            <Header>Skills</Header>
            {resume.skills.map(s => {
              return <Skill skill={s} />;
            })}
          </Skills>
          <Education>
            <Header>Education</Header>
            {resume.education.map(e => {
              return <School school={e} />;
            })}
          </Education>
          <Volunteer volunteer={resume.volunteer} />
        </RightMiddle>
      </Middle>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App resume={resume} />, rootElement);
