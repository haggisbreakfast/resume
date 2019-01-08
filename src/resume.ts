export type ResumeBasics = {
  name: string;
  label: string;
  email: string;
  phone: string;
  github: string;
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
};
export type ResumeSkill = {
  languages: string;
  frameworks: string;
  databases: string;
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

// lets make resume be of type Resume
export const resume: Resume = {
  basics: {
    name: 'Lindsay Stewart',
    label: 'Junior Web Developer',
    email: 'lj.stewart00@gmail.com',
    phone: '(604) 813-1948',
    github: 'http://github.com/haggisbreakfast',
    summary:
      "Junior Web Developer with a passion for creating applications that are equal parts accessible, user-friendly, and visually appealing.  Following my graduation from Lighthouse Lab's Web Development Bootcamp, I am eager to put my new skills to work. I am a strong communicator with a keenness for creative collaboration. In addition to coding, I love playing in bands and spending quality time with my two cats, Betty and Jughead. ",
  },
  work: [
    {
      company: 'Omega Nutrition',
      position: 'Customer Service Representative/Project Coordinator',
      startDate: 'May 2017',
      endDate: 'Sept. 2018',
      summary:
        'providing customer support via chat, email, and phone, managing Social Media, processing customer orders, Utilizing and maintaining company Shopify for order processing, Data entry and sales analysis',
    },
    {
      company: 'Choices Market',
      position: 'Bulk Department Head/Purchaser',
      startDate: 'June 2012',
      endDate: 'May 2017',
      summary:
        'Providing customer support, Merchandizing and creating in -store displays, Purchasing product and maintaining inventory, Planning and managing monthly specials',
    },
    {
      company: 'Monarch House',
      position: 'Behavior Interventionist',
      startDate: 'Feb. 2015',
      endDate: 'Sept. 2015',
      summary:
        'Administering ABA therapy to children with Autism, Working alongside Clinicians, Speech Pathologists and Occupational Therapists to design learning programs for clients, Maintaining fluent and consistent communication with parents and Clinicians, Composing client progress reports',
    },
  ],
  volunteer: {
    organization: 'CiTR Radio',
    position: 'Station Volunteer',
    startDate: 'Sept. 2012',
    endDate: 'Feb. 2016',
    summary:
      'Assisting with fundraising events, Digitizing, and organizing music libraries, Tabling live shows and events, Written contributions to station magazine, Discorder',
  },
  education: [
    {
      institution: 'Lighthouse Labs',
      program: 'Web Development',
      studyType: 'Diploma',
      startDate: 'Sept. 2018',
      endDate: 'Nov. 2018',
    },
    {
      institution: 'University of British Columbia',
      program: 'Psychology',
      studyType: 'B.A.',
      startDate: 'Sept. 2012',
      endDate: 'May 2014',
    },
  ],
  projects: [
    {
      name: 'Good Synth (collaborative)',
      date: 'Nov. 2018',
      link: 'https://multi-player-piano.herokuapp.com/',
      summary:
        'Good Synth is an interactive, collaborative Synthesizer Interface, which allows you to make music with all other connected users in real-time! It was built with ReactJS, Web Audio API, Express, WebSockets, JSX, ES6, and SCSS. ',
    },
    {
      name: 'Chatty App',
      date: 'Nov. 2018',
      link: 'https://github.com/haggisbreakfast/chatty',
      summary:
        'Chatty App is a simple, single page web app that allows users to chat in real-time. Built with ReactJS, Webpack with Babel, JSX, ES6, WebSockets, and SCSS.',
    },
    {
      name: 'Choo-Chooser (collaborative)',
      date: 'Oct. 2018',
      link: 'https://github.com/haggisbreakfast/Decision-Maker',
      summary:
        'Choo-Chooser is a simple polling web application to aid its users in making (what can be) difficult decisions. Full-stack web application built with HTML, Sass, JS, jQuery, AJAX, EJS, Node, Express, Knex, Mailgun and PostgresSQL',
    },
    {
      name: 'Tweeter',
      date: 'Sept. 2018',
      link: 'https://github.com/haggisbreakfast/tweeter',
      summary:
        'Tweeter is a simple, single-page Twitter clone, built upon the provided starter code for this project to put my HTML, CSS, JS, jQuery and AJAX front-end skills, as well as my Node, Express and MongoDB back-end skills to work.',
    },
  ],

  skills: [
    {
      languages: 'Languages: Javascript, HTML, CSS, Sass',
      frameworks:
        'Frameworks, Libraries & Environments: ReactJS, NodeJS, Express, jQuery, EJS',
      databases: 'Databases: PostgreSQL, MongoDB',
    },
  ],
};
