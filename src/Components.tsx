import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Curls from './Fluid-10s-1440px.svg';
import Computer from './vintage-computer-removebg-preview.svg';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&display=swap');
  body {
    font-family: 'Roboto Mono', monospace;
      color: #36454F;
      margin: auto;
      background: #d3d3d3;

  }
`;

export const Top = styled.div`
  background: #364EB9;
  background-image: url(${Curls});
  background-position: center top
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  color: #d3d3d3;
  padding: 60px 20px 90px 20px;
`;

export const Header = styled.h3`
  color: #364EB9;
  font-weight: 400;
  border-bottom: 1px solid #364EB9;
  font-size: 32px;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const SectionIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
  font-size: 22px;
  padding-left: 12px;
`;

export const NameImageContainer = styled.div`
  display: flex;
  
`;
export const NameContainer = styled.div`
  align-items: flex-start;
  padding: 10px 0px 0px 0px;
`;

export const Name = styled.h1`
  font-size: 60px;
  font-weight: 400;
  margin: 0px;
  
`;

export const Label = styled.span`
  margin: 0px;
  font-size: 20px;
  color: #83c5be;

`;
 
export const Image = styled.div`
height: 15em;
width: 18em;
fill: yellow;
background-size: 100%;
background-repeat: no-repeat;
background-position: -60px 10px;
background-image: url(${Computer});
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 30%;
  padding: 5px;
  &:hover {
    .ContactLink {

    text-decoration: underline;
    color: #83c5be;
    }
    .ContactIcon {
      color: #83c5be;

    }
  }
`;

export const ContactMethod = styled.span`
`;

export const ContactLink = styled.a`
  color: #d3d3d3;
  text-decoration: none;
  
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
  font-size: 14px;
  
`;

export const Summary = styled.div`
  font-size: 16px;
  color: #36454F;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Date = styled.span`
color: #364EB9;
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
    <ContactLink className={'ContactLink'}href={item}> {text} </ContactLink>
  ) : (
    <ContactMethod>{text}</ContactMethod>
  );
  return (
    <ContactContainer>
      <ContactIcon icon={icon} className={'ContactIcon'} />
      {Content}
    </ContactContainer>
  );
};
