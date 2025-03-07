import { motion, useInView } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef } from 'react';

const ScrollFadeInSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export { ScrollFadeInSection };
