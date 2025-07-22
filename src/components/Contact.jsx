import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

import { profiles, socialContacts } from "../constants";

const Contact = () => {
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Find me on</p>
        <h3 className={styles.sectionHeadText}>Contact & Profiles.</h3>

        <div className='mt-8 grid grid-cols-2 gap-6'>
          {/* Contact Platforms */}
          <div>
            {/* <h4 className='text-white font-medium text-[18px] mb-4'>Contact Platforms</h4> */}
            <div className='flex flex-col gap-4'>
              {socialContacts.map((item) => (
                <div
                  key={item.name}
                  className='flex items-center gap-3 bg-gradient-to-r from-blue-900 to-purple-800 rounded-full px-4 py-2 shadow-lg'
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className='w-8 h-8 rounded-full bg-white p-1'
                  />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white text-[14px] hover:underline'
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Repositories & Profiles */}
          <div>
            {/* <h4 className='text-white font-medium text-[18px] mb-4'>Repositories & Profiles</h4> */}
            <div className='flex flex-col gap-4'>
              {profiles.map((item) => (
                <div
                  key={item.name}
                  className='flex items-center gap-3 bg-gradient-to-r from-blue-900 to-purple-800 rounded-full px-4 py-2 shadow-lg'
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className='w-8 h-8 rounded-full bg-white p-1'
                  />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white text-[14px] hover:underline'
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
