import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResumeProject } from './resume';

const ProjectContainer = styled.div`
  align-content: center;
`;
const ProjectTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 800;
  font-size: 18px;
  height: 24px;
`;
const ProjectName = styled.a`
  font-size: 20px;
`;
const ProjectDate = styled.p`
  font-size: 12px;
`;
const ProjectSummary = styled.p``;

type ProjectProps = {
  project: ResumeProject;
};

export const Project = (props: ProjectProps) => {
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
