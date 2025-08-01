import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
// import Tilt from 'react-tilt';


import { github } from "../assets/social/index.js";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// tilt default options here__________________

const defaultOptions = {
  max: 45,      // max tilt rotation (degrees)
  scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 450,  // Speed of the enter/exit transition
	// reverse:        false,  // reverse the tilt direction
	// max:            35,     
	// perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	// scale:          1.1,    
	// speed:          1000,   
 transition:     true,   // Set a transition on enter/exit.
 axis:           null,   // What axis should be disabled. Can be X or Y.
 reset:          true,    // If the tilt effect has to be reset on exit.
 easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={defaultOptions}
        className='bg-tertiary p-4 rounded-2xl w-full'
      >
        {/* <div className='w-full h-[230px]'> */}
          <div className='relative w-full h-[180px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />


          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-3 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Works Repo </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[26px]'
        >
          I have worked on a variety of projects that involve geospatial analysis, data visualization, and web development . 
          Here are some of my recent works that showcase my skills in these areas. 
          Each project is a unique solution to a specific problem, demonstrating my ability to adapt and innovate.
        </motion.p>
      </div>

      
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>

    </>
  );
};

export default SectionWrapper(Projects, "projects");
