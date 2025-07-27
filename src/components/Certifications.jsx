import { motion } from "framer-motion";

import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const CertificationCard = ({
  index,
  title,
  provider,
  year,
  description,
  image,
  url,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full'
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={image}
        alt={`${provider}-logo`}
        className='w-12 h-12 rounded-full object-cover mb-4 hover:scale-110 transition-transform duration-300'
      />
    </a>
    <h3 className='text-white font-semibold text-[20px]'>{title}</h3>
    <p className='text-secondary text-[14px] mt-1'>
      {provider} • {year}
    </p>
    <p className='text-white text-[14px] mt-3'>{description}</p>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`} id='certifications'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Trainings and Achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");

//____________________________________previous one
// import { motion } from "framer-motion";
// import React from "react";

// import { testimonials } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";
// import { fadeIn, textVariant } from "../utils/motion";

// const CirtificateCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Cirtifications = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`} id='testimonial'>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Cirtifications.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <CirtificateCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Cirtifications, "cirtifications");
