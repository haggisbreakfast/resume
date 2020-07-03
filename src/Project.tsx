// third party imports
import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local imports
import { ResumeProject } from './resume';
import { Date } from './Components';

const ProjectContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  height: 24px;
`;

const ProjectName = styled.a`
  font-size: 20px;
  color: #101518;
  text-decoration: none;
  &:visited {
    color: rgb(71, 71, 71);
  }
  &:hover {
    text-decoration: underline;
  }
`;



const ProjectSummary = styled.span``;
const ProjectTechStackContainer = styled.div`
display: flex;
`;
const ProjectTech = styled.span`
font-size: 14px; 
margin-right: 5px;
padding-right: 5px;
color: #364EB9;
border-right: 1px solid teal;
`;
type ProjectProps = {
  project: ResumeProject;
};

export const Project = (props: ProjectProps) => {
  const { project } = props;
  return (
    <ProjectContainer>
      <ProjectTitle>
        <ProjectName href={project.link} target="_blank">
          {project.name}
        </ProjectName>
        <Date>{project.date}</Date>
      </ProjectTitle>
      <ProjectSummary>{project.summary}</ProjectSummary>
      <ProjectTechStackContainer>
        {project.techstack.map((t, index) => {
       return (
          <ProjectTech key={index}>{t}</ProjectTech>
       );
        })}
     
      </ProjectTechStackContainer>

    </ProjectContainer>
  );
};
