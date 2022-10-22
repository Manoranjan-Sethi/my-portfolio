/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import sail from "./assets/images/sail.png";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Manoranjan Sethi",
  title: "Hi all, I'm Manoranjan",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having an experience of designing and building Web applications with HTML5, CSS3, JavaScript, React.js, Redux, Node.js, Express.js, MongoDB and Material-UI"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hDSjE4iBivr_ss06Dhn-qObBJmmTN95M/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Manoranjan-Sethi",
  linkedin: "https://www.linkedin.com/in/manoranjan-sethi/",
  gmail: "manoranjansethi97@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/"
  // instagram: "https://www.instagram.com/manoranjan-sethi/",
  twitter: "https://twitter.com/manoranjan_97",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MERN STACK DEVELOPMENT",
  skills: [
    emoji("⚡  I love designing websites and coding."),
    emoji("⚡ Fun fact Time, Tide and JavaScript waits for none."),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."),
    // emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
    },
    // {
    //   skillName: "Redux",
    //   fontAwesomeClassname: "fab fa-redux-js",
    // },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fab fa-node-js",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa fa-database",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MASAI SCHOOL",
      logo: require("./assets/images/Masai.jpg"),
      subHeader: "Full Stack Web Development",
      duration: "December 2021 - July 2022",
      desc: "Learnt MERN stack and data-structure and algorithms",
    },
    {
      schoolName: "Banaras Hindu University, Varanashi, U.P.",
      logo: require("./assets/images/BHU.jpg"),
      subHeader: "Masters In Computer Application",
      duration: "August 2020 - May 2022",
      desc:
        " Took courses about Computer Application, DBMS, A.I., Machine Learning etc...",
    },
    {
      schoolName: "Christ College, Cuttack",
      logo: require("./assets/images/christ.jpg"),
      subHeader: "Bachelor of Science ",
      duration: "June 2016 - May 2019",
      // desc: "Ranked top 10% in the program. Took stream as science, ...",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/CSS3", //Insert stack or technology you have experience in
      progressPercentage: "80%",
    },
    {
      Stack: "Javascript",
      progressPercentage: "70%",
    },
    {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "70%",
    },
    {
      Stack: "Data Structure & Algorithms",
      progressPercentage: "80%",
    },
    {
      Stack: "Express",
      progressPercentage: "60%",
    },
    {
      Stack: "Mongo Db",
      progressPercentage: "50%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Electrical Work-shop Intern",
      company: "Rourkela Steel Plant - SAIL",
      companylogo: sail,
      date: "August 2021 – November 2021",
      desc:
        "Rourkela Steel Plant (RSP), the first integrated steel plant in the public sector in India, was set up with German collaboration",
      descBullets: [],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Manoranjan-Sethi", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/makeMyTrip.png"),
      projectName: "MakeMyTrip-clone",
      projectDesc:
        "Make My Trip provides online travel services including airline tickets, domestic and international holiday packages, hotel reservations, rail, and bus tickets.",
      projectTech: "Tech Stack : React JS. React-Redux, Chakra UI, JSON",
      projectFeatures:
        "Features : Sign Up, Login, Landing Page, Flight Page, Bookings and Payment page",
      projectResponsibility:
        "Responsibility : Made some custom components in the landing page along with the routing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://precious-basbousa-c15149.netlify.app/",
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/hellnoid/MakeMyTrip",
        },
      ],
    },
    {
      image: require("./assets/images/reliance.png"),
      projectName: "Reliance Digital-clone",
      projectDesc:
        "Reliance Digital is a chain of stores that sells consumer electronic appliances.",
      projectTech: "Tech Stack :- HtML5, CSS3. JS, JSON Server",
      projectFeatures:
        "Features : Sign Up, Login, Landing Page, Products, Add to cart and Payment page",
      projectResponsibility:
        "Responsibility : Made a landing page for all televisions products and the user can see each individual product with multiple images of a particular product",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reliance-digital123.netlify.app/",
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Manoranjan-Sethi/reliance_digital_clone",
        },
      ],
    },
    {
      image: require("./assets/images/rodan.png"),
      projectName: "Rodan + Fields-clone",
      projectDesc:
        "Rodan + Fields is a leading skincare brand founded in 2000 with a passion for giving people the best skin of their lives — and the confidence that comes with it.",
      projectTech: "Tech Stack :- HtML5, CSS3. JS, JSON Server",
      projectFeatures:
        "Features : Sign Up, Login, Landing Page, Products, Add to cart and Payment page",
      projectResponsibility:
        "Responsibility : Made the landing page with some products sliders and also managed the github repo",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rodanandfields-clone.vercel.app/",
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Manoranjan-Sethi/RodanAndFields_clone",
        },
        //  you can add extra buttons here.
      ],
    },
    // {
    //   image: require("./assets/images/amazon.PNG"),
    //   projectName: "Amazon-clone",
    //   projectDesc:
    //     "A clone Of Amazon e-commerce website made with React.js ,redux and Firebase .  Redux is used to store all the cart data and Firebase is used to authenticate the user.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://clone-88a30.web.app/",
    //     },
    //     {
    //       name: "Github Repo",
    //       url: "https://github.com/BiswajitDas1802/amazzon-clone",
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  //   title: emoji("Achievements And Certifications 🏆 "),
  //   subtitle:
  //     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  //   achievementsCards: [
  //
  //         {
  //           name: "Award Letter",
  //           url:
  //             ""
  //         },
  //         {
  //           name: "Google Code-in Blog",
  //           url:
  //             ""
  //         }
  //       ]
  //     },
  //
  //       ]
  //     },

  //
  //   ],
  display: false, // Set false to hide this section, defaults to true
};

// // Blogs Section

const blogSection = {
  //   title: "Blogs",
  //   subtitle:
  //     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  //   blogs: [
  //     {
  //       url:
  //         "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //       description:
  //         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //     },
  //     {
  //       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //       title: "Why REACT is The Best?",
  //       description:
  //         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //     }
  //   ],
  display: false, // Set false to hide this section, defaults to true
};

// // Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// // Podcast Section

const podcastSection = {
  //   title: emoji("Podcast 🎙️"),
  //   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  //   // Please Provide with Your Podcast embeded Link
  //   podcast: [
  //     ""
  //   ],
  //   display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "7809121208",
  email_address: "manoranjansethi97@gmail.com",
};

// Twitter Section

const twitterDetails = {
  //   userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  //   display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
