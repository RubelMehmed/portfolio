import { motion } from "framer-motion";
import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import { Tilt } from "react-tilt";
import { services } from "../constants/index.js";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { Button } from "./index.js";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' rubel.mehmut@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am an aspiring research fellow specializing in GeoInformatics, GIScience, Remote Sensing, and GeoAI. My research focuses on Climate Change, Smart Cities, Disaster Management, and Environmental Modeling.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

                {/* Grid Tech Stack */}

        <div className="c-space my-7">
          <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container">
                <img src="src\assets\profile-pic (3).png" alt="grid-1" className="w-full sm:h-[226px] h-fit object-contain"  />

                <div>
                  <p className="grid-headtext ">Hi there, I’m Rubel Fakir</p>
                  <p className="grid-subtext">
                    An Undergraduate Student of Geography and Environment
                  </p>
                  <a
                    href="https://github.com/rubelmehmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                >
                  
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-600      rounded-full shadow-lg hover:bg-blue-700 transition-colors overflow-hidden">
                    <img
                      src="../assets/tech/git.png"
                      alt="Github"
                      // className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Hover Text */}
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-sm rounded px-2 py-1 top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              
                  </span>
                </a>
                </div>
              </div>
            </div>

            

            <div className="col-span-1 xl:row-span-4">
              <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                  <Globe
                    height={326}
                    width={326}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"

                    labelsData={[{ lat: 23.80, lng: 90.41, text: 'Dhaka, Bangladesh', color: 'white', size: 49 }]}
                  />

                </div>
                <div>
                  <p className="grid-headtext">Globally Flexible with Time Zone</p>
                  <p className="grid-subtext">I am open to research fellowship opportunities worldwide.</p>
                  <a
                    href="https://linkedin.com/in/rubelmehmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-10 flex items-center justify-center"
                  >
                    <Button name="Contact Me" isBeam containerClass="w-full mt-10">
                      <img
                        src="../assets/tech/linkedin.png"
                        alt="LinkedIn Logo"
                        className="w-5 h-5 ml-2"
                      />
                    </Button>
                  </a>

                </div>
              </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
              <div className="grid-container">
                <img src="src\assets\techsolar.png" alt="techsolar" className="w-full sm:h-[276px] h-fit object-contain" />

                <div>
                  <p className="grid-headtext">Tech Stack Domains</p>
                  <p className="grid-subtext">
                    I specialize in Geospatial Technologies that allow me to analysis, manipulate, visulize spatial data.
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
              <div className="grid-container">
                <img src="src\assets\tech.png" alt="grid-tech" className="w-full sm:h-[296px] h-fit object-contain" />

                <div>
                  <p className="grid-headtext">GeoInformatics & Geospatial Tech </p>
                  <p className="grid-subtext">
                    I love Data Science and building things through Data Analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
              <div className="grid-container">
                <img
                  src="src\assets\grid4.png"
                  alt="grid-4"
                  className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                />

                <div className="space-y-2">
                  <p className="grid-subtext text-center">Mail me</p>
                  <div className="copy-container" onClick={handleCopy}>
                    <img src={hasCopied ? 'src/assets/tick.svg' : 'src/assets/copy.svg'} alt="copy" />
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">rubel.mehmut@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </>
  );
};

export default SectionWrapper(About, "about");
