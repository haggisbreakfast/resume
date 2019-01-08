import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
/**
 * Here we gotta import any font-awesome icons we wanna use
 * and they will be named like faWhateverIcon
 * which corresponds to icon="whatever-icon" when you
 * are using it
 */
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// library.add(faCalendarAlt, faAddressCard, faRocket);
import { resume, Resume } from './resume';
import { Project } from './Project';
import { Job } from './Job';
import { Skill } from './Skill';
import { School } from './School';
/**
 * Make sure to add all your icons that you imported above
 * usin this method.
 */
library.add(faEnvelope, faPhone, fab);

export const GlobalStyle = createGlobalStyle`
  // @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,500|Roboto');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  body {
    // font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Mono', monospace;
    // font-weight: lighter;
      color: grey;

  }
`;

const Top = styled.div`
  // background-color: hsla(172, 100%, 45%, 1);
  background: -webkit-linear-gradient(top, #e7fff9 0%, #c1fff3 100%);
  display: flex;
  flex-direction: column;
  color: #36454f;
  // font-family: "Roboto", sans-serif;
  // font-weight: lighter;
  padding: 20px;
`;
const Header = styled.h3`
  color: #36454f;
  font-weight: bolder;
  margin: auto;
  padding: 10px;
  border-bottom: solid #c1fff3;
`;
const NameContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  align-items: flex-start;
  padding: 50px 0px 50px 0px;
  // align-content: flex-start
`;

const Name = styled.h1`
  font-size: 50px;
  margin: 0px;
`;
const Label = styled.p`
  margin: 0px;
`;
const Contact = styled.div``;
const ContactItemContainer = styled.div``;
const ContactItem = styled.p``;
const ContactLink = styled.a``;
const FeatureIcon = styled(FontAwesomeIcon)``;

const Summary = styled.div`
  font-size: 16px;
  color: grey;
  padding: 20px;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftMiddle = styled.div`
  width: 75%;
  margin: 20px;
`;
const Projects = styled.div``;
const Work = styled.div``;
// const Job = styled.p``;
const RightMiddle = styled.div`
  width: 25%;
  margin: 20px;
`;
const Skills = styled.div``;
const Education = styled.div``;
const Volunteer = styled.div``;
// const Contact: React.StatelessComponent<{
//   // these are telling typescript what the props are
//   icon: IconProp;
//   item: string;
// }> = props => {
//   // Grab out the props we want.
//   const { item, icon } = props;
//   return (
//     <ContactItemContainer>
//       <ContactIcon icon={icon} size="2x" />
//       <ContactMethod>{item}</ContactMethod>
//     </ContactItemContainer>
//   );
// };

/// /hi/ // the type of const resume = {....}
// This is the shape of Props going into App component
type AppProps = {
  resume: Resume;
};
// This is a function component App that takes in AppProps
const App = (props: AppProps) => {
  const { resume } = props;
  return (
    <div>
      {/**
       * render global style here so we get global style
       */}
      <GlobalStyle />
      <Top>
        <NameContainer>
          <Name>{resume.basics.name}</Name>
          <Label>{resume.basics.label}</Label>
        </NameContainer>
        <Contact>
          <ContactItemContainer>
            <FeatureIcon icon="envelope" />
            <ContactItem>{resume.basics.email}</ContactItem>
          </ContactItemContainer>
          <ContactItemContainer>
            <FeatureIcon icon="phone" />
            <ContactItem> {resume.basics.phone} </ContactItem>
          </ContactItemContainer>
          <ContactItemContainer>
            <FeatureIcon icon={['fab', 'github']} />
            <ContactLink href={resume.basics.github}>
              {' '}
              {resume.basics.github}{' '}
            </ContactLink>
          </ContactItemContainer>
        </Contact>
      </Top>
      <Summary>
        <Header>Profile</Header>
        {resume.basics.summary}
      </Summary>
      <Middle>
        <LeftMiddle>
          <Projects>
            <Header>Projects</Header>
            {resume.projects.map((p) => {
              /**
               * In the end this should probs look like
               * return <Project project={p} />
               */

              return <Project project={p} />;
            })}
          </Projects>
          <Work>
            <Header>Employment</Header>
            {resume.work.map((w) => {
              return <Job job={w} />;
            })}
          </Work>
        </LeftMiddle>
        <RightMiddle>
          <Skills>
            <Header>Skills</Header>
            {resume.skills.map((s) => {
              return <Skill skill={s} />;
            })}
          </Skills>
          <Education>
            <Header>Education</Header>
            {resume.education.map((e) => {
              return <School school={e} />;
            })}
          </Education>
          <Volunteer>
            <Header>Volunteer</Header>
            {resume.volunteer.organization}
            {resume.volunteer.position}
            {resume.volunteer.startDate} -{resume.volunteer.endDate}
            {resume.volunteer.summary}
          </Volunteer>
        </RightMiddle>
      </Middle>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App resume={resume} />, rootElement);
