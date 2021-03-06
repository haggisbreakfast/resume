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
  type: string;
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
    location: 'Vancouver BC',
    summary:
      "I am a Web Developer with a passion for creating sites and applications that are equal parts accessible, intuitive, and visually appealing. I am an adept and determined problem-solver, and a strong communicator with a love for creative collaboration.",
  },
  work: [
    {
      company: 'Glance Digital',
      position: 'Jr. Web Developer',
      startDate: 'Mar 2019',
      endDate: 'current',
      summary:
        'As Junior Developer for Glance, I specialized in transforming design mock-ups into sleek, responsive, user-friendly websites. This role also entailed troubleshooting and maintaining existing sites, corresponding and collaborating with clients, working in a variety of frameworks and languages, and technical research and writing.',
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
      name: 'Personal website',
      date: 'Jul 2020',
      type: 'independent project',
      link: 'http://lindsaystewart.me/',
      summary: "My personal online resume/portfolio.",
      techstack: [
        'ReactJS', 'Typescript', 'Styled-Components'

      ]
    },
    {
      name: 'The Moody Rentals',
      date: 'Apr 2020',
      type: 'collaborative work project',
      link: 'https://themoodyrentals.ca/',
      summary: "Landing page built by Glance for a home rental company in Port Moody.",
      techstack: [
        'Wordpress', 'php', 'jquery', 'scss'

      ]
    },
    {
      name: 'Web Accessibility',
      date: 'Apr 2020',
      type: 'technical writing/research work project',
      link: 'https://www.glance.digital/website-accessibility-guidelines/',
      summary: "A blog post about meeting web content accessibility guidelines and the importance of making your wesbsite accessible. Composed for the Glance website.",
      techstack: [
        ''

      ]
    },

    {
      name: 'Cookie Consent',
      date: 'Mar 2020',
      type: 'technical writing/research work project',
      link: 'https://www.glance.digital/cookie-banners-on-canadian-websites/',
      summary: "A blog post explaining the laws and requirements surrounding website cookie banners and consent. Composed for the Glance website.",
      techstack: [
        ''

      ]
    },
    {
      name: 'Curranne Labercane',
      date: 'Feb 2020',
      type: 'collaborative work project',
      link: 'https://www.currannelabercane.com/',
      summary: "A customized website built by Glance for a client's business.",
      techstack: [
        'Wordpress', 'php', 'jquery', 'scss'
      ]
    },
    {
      name: 'Carine Redmond',
      date: 'Feb 2020',
      type: 'collaborative work project',
      link: 'http://carineredmond.com/',
      summary: "A customized website built by Glance for a client's PR business.",
      techstack: [
        'Wordpress', 'php', 'jquery', 'scss'
      ]
    },

    {
      name: 'JDa',
      date: 'Jul 2019',
      type: 'collaborative work project',
      link: 'https://jdarch.ca/',
      summary: "A dynamic, customized website built by Glance for an architecture company.",
      techstack: [
        'Wordpress', 'php', 'jquery', 'scss'

      ]

    },
    {
      name: 'Lepp Construction',
      date: 'Jun 2019',
      type: 'collaborative work project',
      link: '  https://www.leppconstruction.com',
      summary: "A dynamic, customized website built by Glance for a construction company.",
      techstack: [
        'Wordpress', 'php', 'jquery', 'scss'

      ]

    },
    {
      name: 'Career Works',
      date: 'May 2019',
      type: 'collaborative work project',
      link: 'https://careerworks.ca/',
      summary: "A dynamic, customized website built by Glance for a career consulting business.",
      techstack: [
        'Wordpress', 'php', 'jquery', 'scss'

      ]

    },
    {
      name: 'Bookery.io homepage',
      date: 'Feb 2019',
      link: 'https://bookery.io/',
      type: 'collaborative website',
      summary:
        'A single page site for Bookery.io, a booking software that is currently in production.',
      techstack: [
        'ReactJS', 'Typescript', 'Styled-Components'
      ]

    },
    {
      name: 'Good Synth',
      type: 'collaborative web app',
      date: 'Nov 2018',
      link: 'https://multi-player-piano.herokuapp.com/',
      summary:
        'An interactive Synthesizer Interface, which allows visitors to make music with all other connected users in real-time! Built and presents as final project for graduation form Lighthouse Labs. ',
      techstack: [
        'ReactJS', 'Web Audio API', 'Express', 'WebSockets', 'JSX', 'ES6', 'SCSS'
      ]

    },
    {
      name: 'Chatty App',
      date: 'Nov 2018',
      type: 'independent web app',
      link: 'https://github.com/haggisbreakfast/chatty',
      summary:
        'A simple, single page web app that allows users to chat in real-time. Built and submitted as a project for Lighhouse Labs.',
      techstack: [
        'ReactJS', 'Webpack with Babel', 'JSX', 'ES6', 'WebSockets', 'SCSS'
      ]

    },

  ],

  skills: [
    {
      title: 'Languages',
      skills: 'Javascript, TypeScript, PHP, HTML, CSS, SCSS/SASS',
    },
    {
      title: 'Frameworks, Libraries & Environments',
      skills: 'ReactJS, jQuery, Wordpress, NodeJS, Express, EJS, Styled-Components, Git',
    },
    {
      title: 'Databases',
      skills: 'PostgreSQL, MongoDB, MySQL'
    },
  ],
};
