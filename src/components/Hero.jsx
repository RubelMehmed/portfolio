// import { motion } from "framer-motion";
import { styles } from "../styles";
// import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-77 h-40 violet-gradient' />
        </div>

            <div className="flex items-center flex-wrap gap-4">
              <div>
                  <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I'm <br className='sm:block hidden' /> <span className='text-[#aac3df]'>Rubel Fakir</span>
                  </h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                  I transform data into <br className='sm:block hidden' /> interactive maps, visualizations, and web-apps
                 </p>
              </div>
              
              {/* <div className="flex-shrink-0">
                <img
                  src={RubelMehmed} // ensure this is a valid image import or URL
                  alt="Rubel Fakir"
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-[#a9abe9] shadow-lg"
                />
              </div> */}
          </div>
          

        </div>
      {/* <ComputersCanvas />

      <div className='absolute xs:bottom-8 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
        
    </section>
  );
};

export default Hero;