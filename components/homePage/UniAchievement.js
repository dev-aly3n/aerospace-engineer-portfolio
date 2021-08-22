import { motion } from "framer-motion";
import { useState } from "react";

const UniAchievement = ({ achieve }) => {
  const [expand, setExpand] = useState(false);
  const descClickHandler = () => {
    setExpand(!expand);
  };
  return (
    <motion.li
      layout
      className="uni-achievement-container flex flex-col justify-center items-start w-full"
    >
      <motion.h3
        layout
        onClick={descClickHandler}
        className="text-xl md:text-2xl text-gray-200 font-semibold w-full hover:text-blue-200 cursor-pointer"
      >
        {achieve.title}
      </motion.h3>
      {expand && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col justify-center items-start mx-auto mt-2 md:mt-10 min-h-[200px] md:min-h-[500px] w-11/12"
        >
          <p className="text-[0.85rem] md:text-base mb-3 text-white">
            {achieve.desc}
          </p>
          {achieve.image ? (
            <img src={achieve.image} className="block w-[500px] self-center" />
          ) : (
            <video
              className="block self-center w-[500px]"
              controls
              width="500"
              preload="none"
              poster={achieve.poster}
            >
              <source src={achieve.video} type="video/mp4" />
              Your browser doesn't suport video!
            </video>
          )}
        </motion.div>
      )}
      <div className="w-full h-0.5 mt-2 bg-white"></div>
    </motion.li>
  );
};

export default UniAchievement;
