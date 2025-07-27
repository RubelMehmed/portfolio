import { motion } from "framer-motion";
import { trainings } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const TrainingCard = ({ training, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-[#1a1a2e] p-5 rounded-xl shadow-lg border-l-4 border-purple-600 flex flex-col sm:flex-row gap-5 items-start"
  >
    {training.logo && (
      <img
        src={training.logo}
        alt={`${training.institution} logo`}
        className="w-12 h-12 object-contain mt-1"
      />
    )}

    <div>
      <h3 className="text-white text-lg font-bold">{training.title}</h3>
      <p className="text-gray-400 text-sm font-medium mt-1">
        {training.institution} • {training.year}
      </p>

      <ul className="mt-2 list-disc list-inside text-sm text-gray-300 space-y-1">
        {training.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      {training.certificate && (
        <a
          href={training.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-purple-400 underline text-sm hover:text-purple-300"
        >
          View Certificate
        </a>
      )}
    </div>
  </motion.div>
);

const Training = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Certifications & Training</p>
        <h2 className={styles.sectionHeadText}>Professional Learning</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-6">
        {trainings.map((training, index) => (
          <TrainingCard key={training.title} training={training} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Training, "training");