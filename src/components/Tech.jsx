import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { skillsData, technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Stack</p>
        <h2 className={styles.sectionHeadText}>Skills & Tools</h2>
      </motion.div>

      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            key={item.category}
            className=" p-6 rounded-xl shadow-md text-white border border-purple-500"
          >
            <h3 className="text-lg font-bold mb-2 text-white border-b border-white pb-1">
              {item.category}
            </h3>
            <p className="text-sm leading-relaxed text-gray-200">
              {item.skills}
            </p>
          </motion.div>
        ))}
      </div>
      <div className='mt-10 flex flex-row flex-wrap justify-center gap-8'>
       {technologies.map((technology) => (
         <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
     </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");



// import { technologies } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { BallCanvas } from "./canvas";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-8'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
