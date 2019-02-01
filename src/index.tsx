import React from 'react';
import ReactDOM from 'react-dom';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMusic } from '@fortawesome/free-solid-svg-icons';

import { resume, Resume } from './resume';
import { Project } from './Project';
import { Job } from './Job';
import { Skill } from './Skill';
import { School } from './School';
import { Volunteer } from './Volunteer';
import {
  GlobalStyle,
  Top,
  Header,
  NameContainer,
  Name,
  Label,
  ContactsContainer,
  ContactLink,
  Summary,
  Middle,
  LeftMiddle,
  Projects,
  Work,
  RightMiddle,
  Skills,
  Education,
  Contact,
} from './Components';

library.add(faEnvelope, faPhone, faMusic, fab);

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
          <Contact item={resume.basics.bandcamp} icon="music" isLink />
          <ContactLink href={resume.basics.bandcamp} />
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
            {resume.projects.map((p => {
              return <Project project={p} />;
            }))}
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
