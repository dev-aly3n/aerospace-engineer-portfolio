import { motion } from "framer-motion";
const SportWave = () => {
  return (
    <svg
      className=" absolute -top-16 -left-5 z-10"
      style={{width:"110%"}}
      viewBox="0 0 1200 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        className="stroke-[0px] md:stroke-[7px] "
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          transition: { duration: 10, delay: 0.3 },
        }}
        d="M3 535C916.261 402.22 1219.33 345.651 690.102 270.963C-195.815 145.934 887.013 56.9419 1257 3"
        stroke="#ffe600"
        strokeLinecap="round"
        strokeOpacity="0.5"
        fill="none"
      />
    </svg>
  );
};

export default SportWave;
