import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Achievement = ({ achieve, light }) => {
  const [expand, setExpand] = useState(false);
  const descClickHandler = () => {
    setExpand(!expand);
  };
  return (
    <motion.li
      layout
      className={`achievement-container ${light ? "!text-black" : ""}`}
    >
      <motion.h3
        layout
        onClick={descClickHandler}
        className={`${light ? "!text-black" : ""}`}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className={` transform  duration-700 ${expand ? "rotate-90 " : ""}`}
        />{" "}
        {achieve.title}
      </motion.h3>
      {expand && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="expand-div"
        >
          <p className={`${light ? "!text-black" : ""}`}>{achieve.desc}</p>
            {achieve.image ? (
              <img  src={achieve.image} />
            ) : (
              <video
                controls
                preload="none"
                poster={achieve.poster}
              >
                <source src={achieve.video} type="video/mp4" />
                Your browser doesn't suport video!
              </video>
            )}
        </motion.div>
      )}
      <div className={`${light ? "!bg-black" : ""}`}></div>
    </motion.li>
  );
};

export default Achievement;
