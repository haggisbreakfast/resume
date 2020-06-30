import React from 'react';
import styled from 'styled-components';
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
  color: rgb(71, 71, 71);
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
const ProjectTechStack = styled.span`
font-size: 14px; 
border-right: 1px solid teal;
margin-right: 5px;
padding-right: 5px;

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
      {project.techstack.map((t, index) => { return (
            
              <ProjectTechStack key={index}>
                {t}
              </ProjectTechStack>
      )
      })}
      </ProjectTechStackContainer>

    </ProjectContainer>
  );
};
