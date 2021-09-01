import { motion } from "framer-motion";
const UniWave = () => {
  return (
    <svg
      className=" absolute top-10 md:top-32 h-full -left-[20%] transform"
      style={{ width: "120vw" }}
      viewBox="0 0 970 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        className="stroke-[14px] md:stroke-[7px] "
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          transition: { duration: 3.5, delay: 0 },
        }}
        d="M3 62.0001C259 257 343 243 487 130C728.056 -59.1616 863 -1.99975 967 77.0001"
        stroke="#f277ea"
        strokeOpacity="0.5"
        stroke-linecap="round"
        fill="none"
      />
    </svg>
  );
};

export default UniWave;
