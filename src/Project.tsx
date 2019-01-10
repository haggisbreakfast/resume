import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResumeProject } from './resume';

const ProjectContainer = styled.div``;
const ProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 800;
`;
const ProjectName = styled.a`
  font-size: 20px;
`;
const ProjectDate = styled.p``;
const ProjectLink = styled.a``;
const ProjectSummary = styled.p``;

type ProjectProps = {
  project: ResumeProject;
};

export const Project = (props: ProjectProps) => {
  // on a new line, try grabbing project out of props
  // and JSON.stringify(project) instead of all the props
  const { project } = props;
  return (
    <ProjectContainer>
      <ProjectTitle>
        <ProjectName href={project.link}>{project.name}</ProjectName>
        <ProjectDate>{project.date}</ProjectDate>
      </ProjectTitle>
      <ProjectSummary>{project.summary}</ProjectSummary>
    </ProjectContainer>
  );
};
