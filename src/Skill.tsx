import React from 'react';
import styled from 'styled-components';
import { ResumeSkill } from './resume';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #101518;
  margin-bottom: 5px;
`;

const Skills = styled.span``;

type SkillProps = {
  skill: ResumeSkill;
};

export const Skill = (props: SkillProps) => {
  const { skill } = props;
  return (
    <SkillContainer>
      <Title>{skill.title}</Title>
      <Skills>{skill.skills}</Skills>
    </SkillContainer>
  );
};
