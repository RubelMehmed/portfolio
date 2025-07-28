import {
  backend,
  carrent, creator, jobit,
  ju, mobile,
  niyd,
  tripguide,
  web
} from "../assets";
import { eco, fds, kiva } from "../assets/projects";
// Import images for socialContacts

import { datacamp, gmail, kaggle, linkedin, xlogo } from '../assets/social';

import {
  arcgis,
  gee,
  geemap,
  geopandas,
  github,
  javascript,
  leafmap,
  matplotlib,
  mysql,
  numpy,
  pandas,
  postgresql,
  python,
  reactjs,
  seaborn
} from '../assets/tech';


import { arset, bmet, esri, fm, rgc } from '../assets/training';
const trainings = [
  {
    title: "Introduction to ArcGIS Pro:Essential Workflows",
    institution: "Esri Bangladesh",
    year: "2024",
    skills: ["ArcGIS Pro", "Geospatial Analysis", "Trend Analysis"],
    certificate: "https://www.linkedin.com/in/rubelmehmed/details/certifications/1749616054656/single-media-viewer/?profileId=ACoAADSO0pUBSHFFhdqS2TpkOaccMVK1ukatvDU",
    logo: esri
  },
  {
    title: "Earth Observations of BlueCarbon Ecosystems",
    institution: "NASA ARSET",
    year: "2023",
    skills: ["Remote Sensing", "Disaster Analysis", "Earth Observation"],
    certificate: "https://www.linkedin.com/in/rubelmehmed/details/certifications/1753679346259/single-media-viewer/?profileId=ACoAADSO0pUBSHFFhdqS2TpkOaccMVK1ukatvDU",
    logo: arset
  },
  
  {
    title: "Data Science using Python",
    institution: "Jahangirnagar University",
    year: "2024",
    skills: [ "Pandas", "Seaborn", "Matplotlib", ],
    certificate: "https://www.linkedin.com/in/rubelmehmed/details/certifications/1735203140531/single-media-viewer/?profileId=ACoAADSO0pUBSHFFhdqS2TpkOaccMVK1ukatvDU",
    logo: ju
  },
  
  {
    title: "Visualizing Geospatial Data in Python",
    institution: "DataCamp",
    year: "2024",
    skills: ["Python", "Geospatial Libraries", "Data Science"],
    certificate: "https://www.datacamp.com/statement-of-accomplishment/course/3bad2a7103cdeb5bb8a53f03a5aec6fc8de4822b?raw=1",
    logo: datacamp
  },
  {
    title: "Exploratoy Data Analysis in Python",
    institution: "DataCamp",
    year: "2024",
    skills: ["Python", "Geospatial Libraries", "Data Science"],
    certificate: "https://www.datacamp.com/statement-of-accomplishment/course/e354285bd3481f63286cfec2da8ee2230d659684?raw=1",
    logo: datacamp
  },
   {
    title: "Data Analyst in Python",
    institution: "DataCamp",
    year: "2024",
    skills: ["Python", "Geospatial Libraries", "Data Science"],
    certificate: "https://www.datacamp.com/statement-of-accomplishment/track/2ca21518166e1cd85f352d643686a7e90aec146b?raw=1",
    logo: datacamp
  },
   {
    title: "Introduction to Node.js, v2",
    institution: "Frontend Masters",
    year: "2023",
    skills: [ "Node.js", "Express", "APIs"],
    certificate: "https://static.frontendmasters.com/ud/c/33bc0cb500/rhuQtnYZzv/node-js-v2.pdf",
    logo: fm
  },
  {
    title: "Diploma in Web Application Development",
    institution: "National Institute of Youth Development",
    year: "2023",
    skills: ["Python", "Django", "MySQL"],
    certificate: "https://www.linkedin.com/in/rubelmehmed/details/certifications/1735201460558/single-media-viewer/?profileId=ACoAADSO0pUBSHFFhdqS2TpkOaccMVK1ukatvDU",
    logo: niyd
  },
   {
    title: "The Hard Parts of Functional JavaScript",
    institution: "Frontend Masters",
    year: "2023",
    skills: ["Functional Programming", "Currying", "Composition"],
    certificate: "https://static.frontendmasters.com/ud/c/33bc0cb500/LNUxgOqjlG/functional-js-fundamentals.pdf/",
    logo: fm
  },
   
   {
    title: "JavaScript: The Hard Parts",
    institution: "Frontend Masters",
    year: "2023",
    skills: ["State Management", "Error Handling", "Debugging",],
    certificate: "https://static.frontendmasters.com/ud/c/33bc0cb500/fjjCYVxYTO/javascript-hard-parts-v2.pdf/",
    logo: fm
  },
  {
    title: "Functional JavaScript First Steps",
    institution: "Frontend Masters",
    year: "2023",
    skills: ["Ajax", "Promises", "Async/Await"],
    certificate: "https://static.frontendmasters.com/ud/c/33bc0cb500/jIKTAxiZEg/functional-first-steps.pdf",
    logo: fm
  },
   {
    title: "Complete Intro to React, v8",
    institution: "Frontend Masters",
    year: "2022",
    skills: ["React", "Redux", "Hooks",],
    certificate: "https://static.frontendmasters.com/ud/c/33bc0cb500/BoYXCMJijv/complete-react-v8.pdf",
    logo: fm
  },
  {
    title: "Computer Operation",
    institution: "Technical Training Center, Rajbari",
    year: "2020",
    skills: ["Computer Basics", "MS Office Suite", "Hardware Assembly"],
    certificate: "https://www.linkedin.com/in/rubelmehmed/details/certifications/1735201793586/single-media-viewer/?profileId=ACoAADSO0pUBSHFFhdqS2TpkOaccMVK1ukatvDU",
    logo: bmet
  },
    
];


const technologies = [
  
  {
    name: "Arcgis",
    icon: arcgis
  },
  {
    name: "GEE",
    icon: gee
  },
  {
    name: "Geemaps",
    icon: geemap
  },
  {
    name: "Leafmap",
    icon: leafmap
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "NumPy",
    icon: numpy
  },
  {
    name: "Pandas",
    icon: pandas
  },
  {
    name: "Matplotlib",
    icon: matplotlib
  },
  {
    name: "Seaborn",
    icon: seaborn
  },
  {
    name: "GeoPandas",
    icon: geopandas
  },
  {
    name: "JavaScript",
    icon: javascript 
  },
  { 
    name: "React JS",
    icon: reactjs
  },
  {
    name: "MySQL",
    icon: mysql
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  },
];

  
const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Expertise",
  },
  {
    id: "training",
    title: "Training",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: mobile,
  },
 
  {
    title: "GIS Analyst",
    icon: creator,
  },
   {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  
];


const experiences = [
  {
    title: "MSc in Geography and Environment",
    company_name: "Jahangirnagar University, Savar",
    icon: ju,
    iconBg: "#E6DEDD",
    date: "May 2025 -  Present",
    points: [
      "Remote Sensing, GIS, Disaster Risk Management, Regional Development and Planning",
      ]
  },
  {
    title: "BSc in Geography and Environment",
    company_name: "Jahangirnagar University, Savar",
    icon: ju,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - April 2025",
    points: [
      "GIS and Remote Sensing, Climatology, Environmental Modeling, Oceanography, Hydrology, Spatial Analysis",
    ]
  },
  
  {
    title: "Higher Secondary Certificate",
    company_name: "Rajbari Government College",
    icon: rgc,
    iconBg: "#383E56",
    date: "April 2016 - May 2019",
    points: [
      "Science Section",
    ],
  },
  
  
  // {
  //   title: "Secondary School Certificate",
  //   company_name: "Kola Sadar Uddin High School, Rajbari",
  //   icon: khs,
  //   iconBg: "#383E56",
  //   date: "Jan 2011 - Feb 2016",
  //   points: [
  //     "Science Section",
  //   ],
  // },
  // {
  //   title: "Primary Education Certificate",
  //   company_name: "Baliadangi Govt. Primary School, Rajbari",
  //   icon: bmet,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2006 - Dec 2010",
  //   points: [
  //     "Primary Education",
  //   ]
  // },
];



const projects = [
  {
    name: "Env-Conservation",
    description:
      "A map visualizing environmental conservation forest accross New York.",
    tags: [
      {
        name: "geopandas",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "seaborn",
        color: "pink-text-gradient",
      },
    ],
    image: eco,
    source_code_link: "https://github.com/RubelMehmed/geospatial_analysis/blob/main/scripts/env_conservaton.ipynb",
  },
  {
    name: "Loan Map",
    description:
      "A map visualizing Kiva, an NGO, loan opportunities across the globe.",
    tags: [
      {
        name: "geopandas",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "seaborn",
        color: "pink-text-gradient",
      },
    ],
    image: kiva,
    source_code_link: "https://github.com/RubelMehmed/geospatial_analysis/blob/main/scripts/env_conservation.ipynb",
  },
  {
    name: "Flood Model",
    description:
      "A comprehensive flood simulation model that predicts flood events using historical data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: fds,
    source_code_link: "https://github.com/RubelMehmed/flood_model",
  },
  {
    name: "Car Expo",
    description:
      "A Web-based destination to explore the latest automotive wonders. Drive into the future at Car Expo!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/RubelMehmed/car_expo",
  },
  {
    name: "Adopt Pet",
    description:
      "Discover joy through 'Adopt Pet' app—connecting with companions to fill home with love and warmth.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/RubelMehmed/revite",
  },
  {
    name: "AI Summerizer",
    description:
      "An intelligent app that quickly condenses and summarizes lengthy content, providing user with concise",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/RubelMehmed/sumz",
  },
];


// ________Certifications constants________



const certifications = [
  {
    title: "Advanced GIS Techniques",
    provider: "ESRI",
    year: "2024",
    description: "Mastered spatial analysis, geostatistics, and network analysis using ArcGIS Pro.",
    image: "path/to/esri-logo.png",
    url: "https://www.esri.com/training/certification",
  },
  {
    title: "Data Science Specialization",
    provider: "Coursera - Johns Hopkins University",
    year: "2023",
    description: "Covered data wrangling, exploratory data analysis, and machine learning with R and Python.",
    image: "path/to/coursera-logo.png",
    url: "https://www.coursera.org/specializations/jhu-data-science",
  },
  {
    title: "Web Development Bootcamp",
    provider: "Udemy",
    year: "2022",
    description: "Full-stack web development with JavaScript, React, Node.js, and MongoDB.",
    image: "path/to/udemy-logo.png",
    url: "https://www.udemy.com/course/the-web-developer-bootcamp",
  },
];


// for overiver section of about comoponent

const skillsData = [
  { category: "Programming Languages", skills: "Python, JavaScript, R, C" },
  { category: "Geospatial Analysis Tools", skills: "ArcGIS, QGIS, Google Earth Engine, Google Earth Pro" },
  { category: "Data Anaytics & Visualization", skills: "Pandas, Numpy, Matplotlib, Scikit-learn, Seaborn, " },
  { category: "Spatial Libraries ", skills: "ArcPy, GeoPandas, Rasterio, Geemap, Leafmap, MapLibre" },
  { category: "Web Development", skills: "React.js, Next.js, Tailwind, Bootstrap, SASS, CSS3" },
  { category: "Database Systems", skills: "MySQL, MongoDB, PostgreSQL (PostGIS)" },
  { category: "Version control & IDEs", skills: "Git, GitHub, VS Code, Jupyter Notebook, Colab" },
  { category: "Productivity Tools", skills: "Jira, Notion, Slack, Microsoft Office Suite, Google Workspace" },
  { category: "Soft Skills", skills: "Analytical Thinking, Problem Solving, Leadership, Team Collaboration, Communication, Adaptability" },
];
const socialContacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rubelmehmed",
    logo: linkedin,
  },
  {
    name: "X ",
    url: "https://x.com/rubelmehmed",
    logo: xlogo,
  },
  {
    name: "Email",
    url: "mailto:rubel.mehmut@gmail.com",
    logo: gmail,
  },
];

const profiles = [
  {
    name: "GitHub",
    url: "https://github.com/rubelmehmed",
    logo: github,
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/rubelmehmed",
    logo: kaggle,
  },
  {
    name: "Datacamp",
    url: "https://www.datacamp.com/profile/rubelmehmed",
    logo: datacamp,
  },
];


export { certifications, experiences, navLinks, profiles, projects, services, skillsData, socialContacts, technologies, trainings };
// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rubel proved me wrong.",
//     name: "John North",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rubel does.",
//     name: "Adam Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rubel optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];