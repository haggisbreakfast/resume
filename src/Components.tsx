import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  body {
    font-family: 'Roboto Mono', monospace;
      color: grey;
      margin: auto;

  }
`;

export const Top = styled.div`
  background: linear-gradient(#e7fff9 0%, #c1fff3 100%);
  display: flex;
  flex-direction: column;
  color: #36454f;
  padding: 20px;
`;

export const Header = styled.h3`
  color: #36454f;
  font-weight: 900;
  border-bottom: solid #c1fff3;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const NameContainer = styled.div`
  align-items: flex-start;
  padding: 10px 0px 50px 0px;
`;

export const Name = styled.h1`
  font-size: 50px;
  margin: 0px;
`;

export const Label = styled.p`
  margin: 0px;
  font-size: 20px;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150px;
`;

export const ContactMethod = styled.p`
  padding: 10px;
`;

export const ContactLink = styled.a`
  color: #36454f;
  padding-left: 10px;
  @media (max-width: 780px) {
    font-size: 12px;
  }
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
`;

export const Summary = styled.div`
  font-size: 16px;
  color: grey;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 780px) {
    flex-direction: column;
    /* align-items: center; */
  }
`;

export const LeftMiddle = styled.div`
  width: 75%;
  margin: 20px;
  @media (max-width: 780px) {
    width: 100%;

    /* align-items: center; */
  }
`;

export const Projects = styled.div``;

export const Work = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightMiddle = styled.div`
  width: 25%;
  margin: 20px;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const Skills = styled.div``;

export const Education = styled.div``;

type ContactProps = { icon: IconProp; item: string; isLink?: boolean };
export const Contact: React.StatelessComponent<ContactProps> = props => {
  const { item, icon, isLink } = props;
  const Content = isLink ? (
    <ContactLink href={item}> {item} </ContactLink>
  ) : (
    <ContactMethod>{item}</ContactMethod>
  );
  return (
    <ContactContainer>
      <ContactIcon icon={icon} />
      {Content}
    </ContactContainer>
  );
};
