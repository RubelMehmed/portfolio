import { motion } from "framer-motion";
import React from 'react';

import { skillsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const fadeInner = (direction, ease, delay, duration) => {
    return {
      hidden: { opacity: 0, y: direction === "down" ? 100 : -100 },
      show: { opacity: 1, y: 0, transition: { delay, duration, ease } },
    };
  };

const Overview = () => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.4, 1)}
      initial="hidden"
      animate="show"
      className="mt-1"
    >      

      {/* Table with Staggered Animations for Rows */}
      <motion.table
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
        }}
        className="table-auto mt-1 w-full"
      >
        <tbody>
          {skillsData.map((skill, index) => (
            <motion.tr
              key={index}
              variants={fadeInner("down", "easeOut", index * 0.2, 0.6)}
              className="hover:text-orange-800 transition-all"
            >
              <th className="text-left p-2">{skill.category}</th>
              <td className="p-2">{skill.skills}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </motion.div>
  )
}

export default SectionWrapper(Overview, "Overview")
