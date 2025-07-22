import {
  backend,
  bttc,
  carrent, creator, jobit,
  ju, mobile,
  niyd,
  ph,
  tripguide,
  web
} from "../assets";
// Import images for socialContacts

 import { datacamp, gmail, kaggle, linkedin, xlogo } from '../assets/social';
import {
  anaconda,
  anymap,
  arcgis,
  bootstrap,
  esri,
  figma,
  gdal,
  gee,
  geemap,
  geer,
  geopandas,
  git,
  github,
  javascript,
  jupyter,
  leaflet,
  leafmap,
  maplibre,
  materialui,
  matplotlib,
  mongodb,
  mysql,
  next,
  nodejs,
  numpy,
  pandas,
  postgresql,
  // GIS & Data Science
  python,
  qgis,
  reactjs,
  redux,
  rstudio,
  sass,
  seaborn,
  tailwind,
  threejs,
  vscode,
  wordpress
} from '../assets/tech'; // Adjust path if necessary

const technologies = [
  // --- Web Development ---
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Three JS", icon: threejs },
  { name: "Next JS", icon: next },
  { name: "Node JS", icon: nodejs },
  { name: "WordPress", icon: wordpress },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Material UI", icon: materialui },
  { name: "SASS", icon: sass },
  

  // --- GIS / Data Science ---
  { name: "Python", icon: python },
  { name: "Anaconda", icon: anaconda },
  { name: "Jupyter Notebook", icon: jupyter },
  { name: "RStudio", icon: rstudio },
  { name: "NumPy", icon: numpy },
  { name: "Pandas", icon: pandas },
  { name: "Matplotlib", icon: matplotlib },
  { name: "Seaborn", icon: seaborn },
  { name: "GeoPandas", icon: geopandas },
  { name: "GDAL", icon: gdal },
  { name: "ArcGIS", icon: arcgis },
  { name: "QGIS", icon: qgis },
  { name: "ESRI", icon: esri },
  { name: "Google Earth Engine", icon: gee },
  { name: "GEER", icon: geer },
  { name: "Geemap", icon: geemap },
  { name: "Leafmap", icon: leafmap },
  { name: "Anymap", icon: anymap },
  { name: "Leaflet", icon: leaflet },
  { name: "MapLibre", icon: maplibre },

  // --- Tools & Design ---
  { name: "Git", icon: git },
  { name: "VSCode", icon: vscode },
  { name: "Figma", icon: figma },
];


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "cirtifications",
    title: "Cirtifications",
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

// const technologies = [
//   // {
//   //   name: "CSS 3",
//   //   icon: css,
//   // },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "Next JS",
//     icon: next,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "Wordpress",
//     icon: wordpress,
//   },
  
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Material UI",
//     icon: materialui,
//   },

//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
  
// ];

const experiences = [
  {
    title: "MSc in Geography and Environment",
    company_name: "Jahangirnagar University, Savar",
    icon: ju,
    iconBg: "#E6DEDD",
    date: "May 2025 -  Present",
    points: [
      "Remote Sensing for Resource Appraisal and Mapping, Application of Geographic Information Systems",
      "Disaster Risk Management, Urban Systems, Regional Development and Planning", "Environmental Economics, Law and Sustainability",
      "Research in GeoInformatics, GIScience, and GeoAI",
    ]    
  },
  {
    title: "BSc in Geography and Environment",
    company_name: "Jahangirnagar University, Savar",
    icon: ju,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - April 2025",
    points: [
      "GIS and Remote Sensing Lab Training",
      "Data Analysis workshops",
      "Academic Research",
      "cliimatology, environmental modeling, oceanography, hydrology, spatial analysis, urban development, and disaster management",
    ]    
  },
  
  {
    title: "Web Development and Application",
    company_name: "National Institute of Youth  Development, Savar",
    icon: niyd,
    iconBg: "#383E56",
    date: "Sep 2022 - Feb 2023",
    points: [
      "C Programming, Basic Python",
      "Functional JavaScript, React.js, Django",
      "MySQL, DBMS Management",
      "Cisco Networking, Blockchain and Cryptocurrency",
    ],
  },
  {
    title: "MERN Stack Development",
    company_name: "Programming-Hero, Dhaka",
    icon: ph,
    iconBg: "#383E56",
    date: "Jun 2021 - Dec 2021",
    points: [
      "HTML-5, CSS-3, Bootstrap",
      "JavaScript, React.js",
      "Node,js, Express.js, and MongoDB",
      "Responsive Design, Figma",
    ],
  },
  
  {
    title: "Computer Operation",
    company_name: "Technical Training Center, Rajbari",
    icon: bttc,
    iconBg: "#383E56",
    date: "Jun 2019 - Dec 2019",
    points: [
      "Basic Computer Application",
      "Microsoft Office",
      "Basic Hardware Assembly",
    ],
  },
  
  
];



const projects = [
  {
    name: "Car Expo",
    description:
      "A Web-based destination to explore the latest automotive wonders. Immerse yourself in the world of cars, discover innovation, and experience driving excellence. Drive into the future at Car Expo!",
    tags: [
      {
        name: "mect.js",
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
      "Discover joy through our 'Adopt Pet' app—connecting you with lovable companions ready to fill your home with love and warmth. Adopt happiness today!",
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
      "An intelligent app that quickly condenses and summarizes lengthy content, providing users with concise insights and key information",
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
  { category: "Programming Languages", skills: "Python, JavaScript, R" },
  { category: "Geospatial Tools & Platforms", skills: "ArcGIS, QGIS, Google Earth Engine" },
  { category: "Data Science & Geospatial Libraries", skills: "Pandas, GeoPandas, Scikit-learn" },
  { category: "Mapping Platforms", skills: "Leaflet, Mapbox" },
  { category: "Web Development", skills: "React.js" },
  { category: "Database Systems", skills: "PostgreSQL (PostGIS)" },
  { category: "Approach", skills: "Leveraging advanced geospatial technologies and data science techniques, dedicated to innovative solutions for global challenges" }
];
const socialContacts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rubelmehmed",
    logo: linkedin,
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/rubelmehmed",
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


export { certifications, experiences, profiles, projects, services, skillsData, socialContacts, technologies };

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