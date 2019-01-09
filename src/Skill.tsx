import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResumeSkill } from './resume';

const SkillContainer = styled.div``;
const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
`;
const Skills = styled.p``;

type SkillProps = {
  skill: ResumeSkill;
};

export const Skill = (props: SkillProps) => {
  const { skill } = props;
  return (
    <SkillContainer>
      <Title>{skill.title}</Title>
      <Skills>{skill.skills}</Skills>
      {/* <Languages>{skill.languages}</Languages>
      <Frameworks>{skill.frameworks}</Frameworks>
      <Databases>{skill.databases}</Databases> */}
    </SkillContainer>
  );
};
