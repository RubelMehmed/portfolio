import {
  backend, carrent, creator, figma, git, javascript, jobit, materialui, meta, mobile, mongodb, next, nodejs, reactjs,
  redux, shopify, starbucks, tailwind,
  threejs, tripguide, typescript, web, wordpress
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React.js Developer",
    company_name: "Shopkpr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - Sep 2022",
    points: [
      "Build and maintain web apps with React.js and related tech.",
      "Collaborate with cross-functional teams for quality products.",
      "Implement responsive design, ensure cross-browser compatibility.",
      "Participate in code reviews, offer constructive feedback.",
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "Webbattalion",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Develop and maintain web apps with React.js, WordPress, and related tech.",
      "Collaborate with cross-functional teams for top-notch products.",
      "Implement responsive design, ensure cross-browser compatibility.",
      "Participate in code reviews, give constructive feedback",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Codemanbd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Build and maintain full-stack web applications using the MERN stack.",
      "Collaborate with cross-functional teams to create high-quality products.",
      "Implement responsive design, ensuring cross-browser compatibility.",
      "Participate in code reviews and offer constructive feedback to teammates."
    ]    
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "John North",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Adam Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
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

export { experiences, projects, services, technologies, testimonials };

