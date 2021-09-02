import { motion } from "framer-motion";
const SportWave = () => {
  return (
    <svg
      className=" absolute top-0 left-0 z-10"
       viewBox="200 250 1500 2150"
      xmlns="http://www.w3.org/2000/svg"

    >
      <motion.path
        className="stroke-[0px]  xl:stroke-[7px] "
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          transition: { duration: 30, delay: 0, ease:[.12,.35,.9,1.05]},
        }}
        d="M65.9998 2978C91 2783.5 244.969 2662.99 777.5 2465C1011.5 2378 1554.2 2121.3 1541 1960.5C1524.5 1759.5 233.5 1571.5 233.5 1228C233.5 903.7 1401 961 1520.5 667.5C1640 374 -68.5 340.5 7.99993 1.5"
        stroke="#FBBF24"
        strokeLinecap="round"
        strokeOpacity="1"
        fill="none"
      />
    </svg>
  );
};

export default SportWave;
