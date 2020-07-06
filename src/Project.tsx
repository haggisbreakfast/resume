// third party imports
import React from 'react';
import styled from 'styled-components';

// local imports
import { ResumeProject } from './resume';
import { Date } from './Components';

const ProjectContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
    /* color: rgb(71, 71, 71); */
  }
  &:hover {
    text-decoration: underline;
  }
`;


const ProjectType = styled.span`
font-size: 14px; 
margin-bottom: 5px;


`;
const ProjectSummary = styled.span`

`;

const ProjectTechStackContainer = styled.div`
display: flex;
flex-wrap: wrap;
`;
const ProjectTech = styled.span`
font-size: 14px; 
margin-right: 5px;
padding-right: 5px;
color: #364EB9;
border-right: 1px solid #36454F;
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
        <ProjectType>{project.type}</ProjectType>
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
