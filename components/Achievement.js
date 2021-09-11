//libs
import { Fragment, useState } from "react";

//components
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

//helpers & data
import { useOnScrollAnimation } from "./useOnScrollAnimation";
import { shimmer, toBase64 } from "./util";

//animations
import { achieveAnimation } from "./animation";

const Achievement = ({ achieve, light, num }) => {
  const [sec, controls] = useOnScrollAnimation(1);
  const [expand, setExpand] = useState(false);
  const descClickHandler = () => {
    setExpand(!expand);
  };
  return (
    <motion.li
      variants={achieveAnimation}
      initial="hidden"
      ref={sec}
      animate={controls}
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
        {num}
        {". "}
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
          {achieve.image && (
            <Fragment>
              <Image
                src={achieve.image}
                alt={"atefeh hasani - " + achieve.title}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                width={achieve.width}
                height={achieve.height}
              />
              {achieve.image2 && (
                <Image
                  src={achieve.image2}
                  alt=""
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                  width={achieve.width2}
                  height={achieve.height2}
                />
              )}
            </Fragment>
          )}
          {achieve.video && (
            <video controls width="700" preload="none" poster={achieve.poster}>
              <source src={achieve.video} type="video/mp4" />
              Your browser doesn't suport video!
            </video>
          )}
        </motion.div>
      )}
      <span className={`${light ? "!bg-black" : ""}`}></span>
    </motion.li>
  );
};

export default Achievement;
