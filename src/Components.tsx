import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import  Computer  from './vintage-computer-removebg-preview.png';
import Curls from './curve-11.1s-1084px.svg';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&display=swap');
  body {
    font-family: 'Roboto Mono', monospace;
      color: grey;
      margin: auto;
      background: #F1E9CB;

  }
`;

export const Top = styled.div`
  background: #A3D6D4;
  background-image: url(${Curls});
  display: flex;
  flex-direction: column;
  color: #36454f;
  padding: 60px 20px 120px 20px;
`;

export const Header = styled.h3`
  color: #36454f;
  font-weight: 400;
  border-bottom: 1px solid #A3D6D4;
  font-size: 24px;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const NameContainer = styled.div`
  align-items: flex-start;
  padding: 10px 0px 50px 0px;
`;

export const Name = styled.h1`
  font-size: 50px;
  font-weight: 400;
  margin: 0px;
`;

export const Label = styled.span`
  margin: 0px;
  font-size: 20px;
`;
 
export const Image = styled.img`
height: 200px;
width: 300px;
background-size: contain;
background-repeat: no-repeat;
background-image: url(${Computer});
display: inline;
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

export const ContactMethod = styled.span`
  padding: 10px;
`;

export const ContactLink = styled.a`
  color: #36454f;
  padding-left: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
  font-size: 16px;
`;

export const Summary = styled.div`
  font-size: 16px;
  color: grey;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Date = styled.span`
color: #A3D6D4;
font-size: 12px; 
`;




export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  /* padding-left: 20px; */
  padding-right: 25px;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const LeftMiddle = styled.div`
  width: 75%;
  margin: 20px;
  @media (max-width: 780px) {
    width: 100%;
    margin-bottom: 0px;
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
    margin-top: 0px;
  }
`;

export const Skills = styled.div``;

export const Education = styled.div``;

type ContactProps = { icon: IconProp; item: string; text: string; isLink?: boolean };
export const Contact: React.StatelessComponent<ContactProps> = props => {
  const { item, text, icon, isLink } = props;
  const Content = isLink ? (
    <ContactLink href={item}> {text} </ContactLink>
  ) : (
    <ContactMethod>{text}</ContactMethod>
  );
  return (
    <ContactContainer>
      <ContactIcon icon={icon} />
      {Content}
    </ContactContainer>
  );
};
