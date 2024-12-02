import {
  backend,
  bttc,
  carrent, creator, figma, git, javascript, jobit,
  ju,
  materialui,
  mobile, mongodb, next,
  niyd,
  nodejs,
  ph,
  reactjs,
  redux,
  tailwind,
  threejs, tripguide, typescript, web, wordpress
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "GIS Expert",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Geography and Environment",
    company_name: "Jahangirnagar University, Savar",
    icon: ju,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "BSc in Geography and Environment",
      "GIS and Remote Sensing Lab Training",
      "Data Analysis workshops",
      "Academic Research",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rubel proved me wrong.",
    name: "John North",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rubel does.",
    name: "Adam Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rubel optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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


export { experiences, projects, services, skillsData, technologies, testimonials };

