//global
//global
//global
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visable: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  out: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5 },
  },
};

export const leftToRightAnimation = {
  hidden: {
    opacity: 0,
    x: -700,
  },

  visable: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
  out: {
    opacity: 0,
    x: 200,
    transition: { duration: 0.5 },
  },
};

export const rightToLeftAnimation = {
    hidden: {
      opacity: 0,
      x: 700,
    },
  
    visable: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
    out: {
      opacity: 0,
      x: -200,
      transition: { duration: 0.5 },
    },
  };
//home
//home
//home
export const textAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visable: {
    transition: { duration: 0.7, ease: "easeOut" },
    y: 0,
    opacity: 1,
    textShadow: "0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc",
  },
};

export const buttonAnimation = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visable: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export const photoAnimation = {
  hidden: {
    scale: 1.15,
    opacity: 0,
  },
  visable: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
