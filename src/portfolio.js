/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Siddhanth Veeranna Arkasali",
  title: "Hi all, I'm Siddhanth",
  subTitle: emoji(
    "I'm an Engineering Data Science and AI graduate student at the University of Houston, with a strong software engineering foundation from my Master’s in Computer Applications (MCA). I focus on building machine learning and analytics solutions that work in real-world settings—prioritizing usability, interpretability, and reliable decision support over raw accuracy. I'm interested in applying data, ML, and AI to problems in business analytics, manufacturing, operations, healthcare, energy, and safety-critical systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ptertH-9MQ8QGwQxCrqb_LFPcHS1HV8t/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  profileImage: "src/assets/images/profile.png"
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/siddhanthva",
  linkedin: "https://www.linkedin.com/in/siddhanth-arkasali/",
  gmail: "siddhanthva@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENCE AND AI ENGINEER FOCUSED ON BUILDING INTELLIGENT, DATA-DRIVEN SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and develop end-to-end machine learning pipelines, from data preprocessing and feature engineering to model training and evaluation"
    ),
    emoji("⚡ Build predictive analytics and statistical models to extract actionable insights and support data-driven decision-making"
    ),
    emoji(
      "⚡ Develop AI-powered applications, including LLM-based and retrieval-augmented systems, using modern Python frameworks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "Machine Learning",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "Data Analysis",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Time Series",
    fontAwesomeClassname: "fas fa-clock"
  },
  {
    skillName: "Statistics",
    fontAwesomeClassname: "fas fa-square-root-alt"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Databricks",
    fontAwesomeClassname: "fas fa-layer-group"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-pie"
  },
  {
    skillName: "Jupyter Notebook",
    fontAwesomeClassname: "fas fa-book"
  },
  {
    skillName: "Generative AI",
    fontAwesomeClassname: "fas fa-robot"
  }
],
display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Houston",
      logo: require("./assets/images/uhlogo.jpg"),
      subHeader: "Master of Science in Engineering Data Science and AI",
      duration: "August 2025 - May 2027",
      desc: "Graduate program focused on applied data science, machine learning, and AI-driven engineering solutions",
      descBullets: [
        "Coursework: Data Science, Machine Learning, Probability and Statistics, Artificial Neural Networks, AI for Engineers",
        "Hands-on projects involving predictive modeling, analytics, and AI applications"
      ]
    },
    {
      schoolName: "Amrita Vishwa Vidyapeetham University",
      logo: require("./assets/images/amritalogo.jpg"),
      subHeader: "Integrated Masters in Computer Applications",
      duration: "July 2019 - August 2024",
      desc: "Comprehensive program covering computer science foundations and applied software systems",
      descBullets: ["Coursework in DBMS, Data Mining, Software Engineering, and Cloud Computing"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming (Python, SQL, R)",
      progressPercentage: "80%"
    },
    {
      Stack: "AI & Generative AI",
      progressPercentage: "75%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
  role: "Testing Proctor",
  company: "Center for Academic Support and Assessment (CASA), University of Houston",
  companylogo: require("./assets/images/uhlogo.jpg"),
  date: "February 2026 – Present",
  desc: "Supported secure and efficient exam administration by monitoring testing environments, enforcing academic integrity policies, and assisting students during high-stakes assessments.",
  descBullets: [
    "Proctored secure testing sessions for 50–100+ students per shift, enforcing academic integrity policies with zero violations",
  "Managed exam logistics, including check-in, ID verification, seating, and secure material handling for 100+ sessions weekly",
  "Provided real-time exam support, resolving technical and procedural issues to minimize disruptions"
  ]
},
    {
      role: "Data Validation Intern",
      company: "JK Files and Engineering Limited",
      companylogo: require("./assets/images/jkfileslogo.jpg"),
      date: "December 2024 – January 2025",
      desc: "Worked on data quality assurance and analytics readiness across manufacturing, operations, and HR datasets to support reliable reporting and decision-making.",
      descBullets: [
        "Validated, audited, and standardized enterprise datasets using SQL-based data quality checks, achieving 94% data accuracy across audited records",
        "Implemented consistency, completeness, and anomaly detection checks to improve analytics-ready data reliability",
        "Streamlined and partially automated data verification workflows, reducing turnaround time by 15% and improving KPI tracking and reporting"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SELECTED PROJECTS IN DATA SCIENCE, MACHINE LEARNING, AND AI SYSTEMS (PROBLEM → METHOD → IMPACT)",
  projects: [
    {
      image: require("./assets/images/livlogo.png"),
      projectName: "The Anatomy of a Livable Neighborhood",
      projectDesc: "Problem: Urban livability is often subjective, limiting data-driven planning decisions. Method: Used EDA and an interpretable multivariate regression model on 2,080 housing records to quantify the impact of walkability and housing features. Tech Used: Python, Pandas, NumPy, Matplotlib, Scikit-Learn, regression modeling. Impact: Achieved R² = 0.806 with ~58% lower MAE vs baseline, validating walkability as a key driver of neighborhood desirability and affordability",
      footerLink: [
        {
          name: "Github",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/multilogo.png"),
      projectName: "Multitudinous Transfer Learning for Paddy Yield Prediction (IEEE Xplore)",
      projectDesc:
        "Problem: Crop yield prediction is highly uncertain due to environmental variability. Method: Applied transfer learning for time-series forecasting using multi-source environmental data. Tech Used: Python, deep learning, transfer learning, time-series modeling, climate, soil, and groundwater datasets. Impact: Achieved R² = 0.91 and outperformed Bi-LSTM baselines, enabling earlier and more reliable yield forecasts.",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/<your-paper-id>"
        }
        ]
      },
      {
      image: require("./assets/images/curvelogo.png"),
      projectName: "Mountain Road Blind-Curve Alert System (IoT Safety Solution)",
      projectDesc:
        "Problem: Blind-curve roads increase collision risk due to limited visibility. Method: Designed a real-time IoT-based alert system integrating sensors, microcontroller logic, and cloud-backed notifications. Tech Used: Arduino/embedded C, ultrasonic sensors, microcontroller programming, IoT architecture, cloud logging. Impact: Enabled real-time vehicle warnings and post-event analysis to improve road safety.",
      footerLink: [
        {
          name: "Publication",
          url: "https://www.tijer.org/<your-article-link>"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Leadership & Volunteership",
  subtitle:
    "Leadership roles involving event coordination, collaboration, and community engagement at institutional scale.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Event Coordinator | Amrita Graduation Ceremony Committee (Sep 2023 – Aug 2023, India)",
      description:
        "Coordinated hospitality operations for 100+ attendees, managing guest support, logistics, and on-site coordination to ensure smooth execution of the graduation ceremony."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Organizing Committee Member | Amrita CODATHON Competition (Apr 2023 – May 2023, India)",
      description:
        "Collaborated with faculty and peers to manage event timelines and curate problem statements for a multi-team coding competition, ensuring structured evaluation and smooth event flow."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Group Manager | Inaugural Ceremony of Amrita Hospital (Jul 2022 – Aug 2022, India)",
      description:
        "Managed on-ground operations for a large-scale inaugural event, coordinating dignitaries, logistics, and attendee flow for 500+ participants."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 281-236-0192",
  email_address: "siddhanthva@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable,
  resumeSection
};
