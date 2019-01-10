import React from 'react';
import styled from 'styled-components';
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
  @media (max-width: 780px) {
    height: 50px;
  }
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
        <ProjectName href={project.link} target="_blank">
          {project.name}
        </ProjectName>
        <ProjectDate>{project.date}</ProjectDate>
      </ProjectTitle>
      <ProjectSummary>{project.summary}</ProjectSummary>
    </ProjectContainer>
  );
};
