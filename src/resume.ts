export type ResumeBasics = {
  name: string;
  label: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  summary: string;
};

export type ResumeJob = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
};

export type ResumeEducation = {
  institution: string;
  program: string;
  studyType: string;
  startDate: string;
  endDate: string;
};

export type ResumeProject = {
  name: string;
  date: string;
  link: string;
  summary: string;
  techstack: string[];
};

export type ResumeSkill = {
  title: string;
  skills: string;
};

export type ResumeVolunteer = {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
};

export type Resume = {
  basics: ResumeBasics;
  work: ResumeJob[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  skills: ResumeSkill[];
  volunteer: ResumeVolunteer;
};

export const resume: Resume = {
  basics: {
    name: 'Lindsay Stewart',
    label: 'Web Developer',
    email: 'lj.stewart00@gmail.com',
    phone: '+16048131948',
    github: 'http://github.com/haggisbreakfast',
    linkedin: 'http://linkedin.com/in/lindsayjanestewart',
    location: 'Vancouver, BC',
    summary:
      "I am a Web Developer with a passion for creating sites and applications that are equal parts accessible, intuitive, and attractive. I am an adept and determined problem-solver, and a strong communicator with a love for creative collaboration.",
  },
  work: [
    {
      company: 'Glance Digital',
      position: 'Jr. Web Developer',
      startDate: 'Mar 2019',
      endDate: 'current',
      summary:
        'As Junior Developer for Glance, I specialized in transforming design mock-ups into sleek, responsive, user-friendly websites. This role also entailed troubleshooting and maintaining existing sites, corresponding and collaborating with clients, working in a variety of frameworks and languages, and performing technical research.',
    },
    {
      company: 'SocsDog Co-op',
      position: 'Front End Developer',
      startDate: 'Dec 2018',
      endDate: 'April 2019',
      summary:
        'In this internship position, I was in charge of Front-End development, working alongside a small team on a range of different features for an up-and-coming booking software product. The Bookery.io tech stack is comprised of React, Typescript, Apollo-client, Styled-Components, Formik and React-Router.',
    },
    {
      company: 'Omega Nutrition',
      position: 'Customer Service Representative/Project Coordinator',
      startDate: 'May 2017',
      endDate: 'Sept 2018',
      summary:
        'This role primarily entailed corresponding with customers and providing support via chat, email, and phone. Additionally, I was responsible for managing social media, processing customer orders, utilizing and maintaining Shopify for order processing, data entry, and sales analysis.',
    },
  ],
  volunteer: {
    organization: 'CiTR Radio',
    position: 'Station Volunteer',
    startDate: 'Sept 2012',
    endDate: 'Feb 2016',
    summary:
      'My role involved assisting with fundraising events, digitizing and organizing music libraries, tabling live shows and events, and composing written contributions to station magazine, Discorder.',
  },
  education: [
    {
      institution: 'Lighthouse Labs',
      program: 'Web Development',
      studyType: 'Diploma',
      startDate: 'Sept 2018',
      endDate: 'Nov 2018',
    },
    {
      institution: 'University of British Columbia',
      program: 'Psychology',
      studyType: 'B.A.',
      startDate: 'Sept 2012',
      endDate: 'May 2014',
    },
  ],
  projects: [
    { 
    name: 'Carine Redmond',
    date: 'Feb 2020',
    link: 'http://carineredmond.com/',
    summary: 'A collaborative, customized site built by Glance for a clients PR business.',
    techstack: [
      'github'
    ]
  },
    {     
    name: 'Bookery.io homepage',
    date: 'Dec 2018',
    link: 'https://bookery.io/',
    summary: 'summary',
    techstack: [
      'code',
      'code'
    ]

  },
    {
      name: 'Bookery.io homepage',
      date: 'Dec 2018',
      link: 'https://bookery.io/',
      summary:
        'Bookery.io is booking software that is currently in production. I built the homepage using ReactJS, Typescript, and Styled-Components.',
        techstack: [
          'code',
          'code'
        ]
    
    },
    {
      name: 'Good Synth (collaborative)',
      date: 'Nov 2018',
      link: 'https://multi-player-piano.herokuapp.com/',
      summary:
        'Good Synth is an interactive, collaborative Synthesizer Interface, which allows you to make music with all other connected users in real-time! It was built with ReactJS, Web Audio API, Express, WebSockets, JSX, ES6, and SCSS. ',
        techstack: [
          'code',
          'code'
        ]
    
    },
    {
      name: 'Chatty App',
      date: 'Nov 2018',
      link: 'https://github.com/haggisbreakfast/chatty',
      summary:
        'Chatty App is a simple, single page web app that allows users to chat in real-time. Built with ReactJS, Webpack with Babel, JSX, ES6, WebSockets, and SCSS.',
        techstack: [
          'code',
          'code'
        ]
    
    },
    {
      name: 'Choo-Chooser (collaborative)',
      date: 'Oct 2018',
      link: 'https://github.com/haggisbreakfast/Decision-Maker',
      summary:
        'Choo-Chooser is a simple polling web application to aid its users in making (what can be) difficult decisions. Full-stack web application built with HTML, Sass, JS, jQuery, AJAX, EJS, Node, Express, Knex, Mailgun and PostgresSQL',
        techstack: [
          'code',
          'code'
        ]
    
    },
    {
      name: 'Tweeter',
      date: 'Sept 2018',
      link: 'https://github.com/haggisbreakfast/tweeter',
      summary:
        'Tweeter is a simple, single-page Twitter clone, built upon the provided starter code for this project to put my HTML, CSS, JS, jQuery and AJAX front-end skills, as well as my Node, Express and MongoDB back-end skills to work.',
        techstack: [
          'code',
          'code'
        ]
    
    },
  ],

  skills: [
    {
      title: 'Languages',
      skills: 'Javascript, TypeScript, HTML, CSS, Sass',
    },
    {
      title: 'Frameworks, Libraries & Environments',
      skills: 'ReactJS, jQuery, NodeJS, Express, EJS, Styled-Components',
    },
    {
      title: 'Databases',
      skills: 'PostgreSQL, MongoDB',
    },
  ],
};
