import { motion } from "framer-motion";
import { useState } from "react";

const UniAchievement = ({ achieve }) => {
  const [expand, setExpand] = useState(false);
  const descClickHandler = () => {
    setExpand(!expand);
  };
  return (
    <motion.li layout className="uni-achievement-container">
      <motion.h3 layout onClick={descClickHandler}>
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
          <p>{achieve.desc}</p>
          {achieve.image ? (
            <img src={achieve.image} />
          ) : (
            <video controls width="500" preload="none" poster={achieve.poster}>
              <source src={achieve.video} type="video/mp4" />
              Your browser doesn't suport video!
            </video>
          )}
        </motion.div>
      )}
      <div></div>
    </motion.li>
  );
};

export default UniAchievement;
