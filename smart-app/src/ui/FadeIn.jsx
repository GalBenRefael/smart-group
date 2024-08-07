/* eslint-disable react/prop-types */
// components/FadeInSection.jsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FadeInSection = ({ children, direction = 'up' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const variants = {
    up: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 },
    },
    right: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: inView ? 1 : 0, x: inView ? 0 : 50 },
    },
    left: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction].initial}
      animate={variants[direction].animate}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
