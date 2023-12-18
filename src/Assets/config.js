// Navigation Bar SECTION
const navBar = {
    show: true,
  };
  
  // Main Body SECTION
  const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Raghavendra",
    middleName: "Reddy",
    lastName: "Munagala",
    message: "Passionate about changing the world with technology.",
    icons: [
      {
        image: "fa-github",
        url: "https://github.com/raghavendrareddy23",
      },
      {
        image: "fa-facebook",
        url: "https://www.facebook.com/munagala.raghavendrareddy",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/munagalaraghavendrareddy/",
      },
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/munagala-raghavendra-reddy-23662419b/",
      },
    ],
  };
  
  const about = {
    show: true,
    heading: "About Me",
    imageLink: require("./IMG-20220115-WA0002.jpg"),
    imageSize: 375,
    message:
      "My name is MUNAGALA RAGHAVENDRA REDDY. I’m a graduated in 2023 from Parul University at Vadodara, Gujarat with a degree in Bachelor's of Computer Science & Engineering . I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
    resume: require("./Raghavendra Resume.pdf"),
  };

  
  
  // SKILLS SECTION
  const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "React", value: 80 },
      { name: "JavaScript", value: 80 },
      { name: "Data Structures", value: 75 },
      { name: "HTML/CSS", value: 85 },
      { name: "Java", value: 70 },
      { name: "Node", value: 60 },
    ],
    softSkills: [
      { name: "Leadership", value: 90 },
      { name: "Commitment", value: 90 },
      { name: "Positivity", value: 75 },
      { name: "Team Spirit", value: 85 },
      { name: "Problem Solving", value: 75 },
      { name: "Empathy", value: 90 },
      { name: "Organization", value: 70 },
      { name: "Creativity", value: 90 },
    ],
  };
  
  // GET IN TOUCH SECTION
  const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
      "I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, ",
    email: "raghavendrareddy.munagala23@gmail.com",
  };
  
  
  export {
    navBar,
    mainBody,
    about,
    skills,
    getInTouch,
  };
  