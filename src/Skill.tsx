import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ResumeSkill } from './resume';

const SkillContainer = styled.div``;
const Languages = styled.p``;
const Frameworks = styled.p``;
const Databases = styled.p``;

type SkillProps = {
  skill: ResumeSkill;
};

export const Skill = (props: SkillProps) => {
  const { skill } = props;
  return (
    <SkillContainer>
      <Languages>{skill.languages}</Languages>
      <Frameworks>{skill.frameworks}</Frameworks>
      <Databases>{skill.databases}</Databases>
    </SkillContainer>
  );
};
