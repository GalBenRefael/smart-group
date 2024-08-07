/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FadeLeftSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.15, // Trigger when 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeftSection;
