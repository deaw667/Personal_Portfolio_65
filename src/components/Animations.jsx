// motionConfig.js
export const defaultTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: defaultTransition,
};

export const scaleBounce = {
  initial: { opacity: 1, scale: 0, x: 50 },
  whileInView: { opacity: 1, scale: 1, x: 0 },
  transition: { type: "spring", stiffness: 120, damping: 15 },
  viewport: { once: false, amount: 0.1 },
};

export const transinorm = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { type: "spring", stiffness: 200, damping: 20, duration: 0.6 },
};

export const elementanim = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.05 },
  viewport: { once: false, amount: 0.1 },
};
