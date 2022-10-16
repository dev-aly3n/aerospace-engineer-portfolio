//libs
import { Fragment, useState } from "react";

//components
import { LayoutGroup, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

//helpers & data
import { useOnScrollAnimation } from "./useOnScrollAnimation";
import { shimmer, toBase64 } from "./util";

//animations
import { achieveAnimation, achievementExpandAni } from "./animation";

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
        onClick={descClickHandler}
        className={`${light ? "!text-black" : ""}`}
        layout
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
          className={`expand-div h-full mt-2 md:mt-10`}
          variants={achievementExpandAni}
          initial="hidden"
          animate="visable"
        >
          <motion.p  className={`${light ? "!text-black" : ""}`}>
            {achieve.desc}
          </motion.p>
          {achieve.image && (
            <>
              <motion.div  className="w-9/12 h-full relative mx-auto">
                <Image
                  src={achieve.image}
                  alt={"atefeh hasani - " + achieve.title}
                  placeholder="blur"
                  layout="responsive"
                />
              </motion.div>
              {achieve.image2 && (
                <motion.div layout className="w-9/12 h-full relative mx-auto">
                <Image
                  src={achieve.image2}
                  alt={"atefeh hasani - " + achieve.title}
                  placeholder="blur"
                  layout="responsive"
                />
                </motion.div>
              )}
            </>
          )}
          {achieve.video && (
            <video controls width="700" preload="none" poster={achieve.poster}>
              <source src={achieve.video} type="video/mp4" />
              Your browser doesn't suport video!
            </video>
          )}
        </motion.div>
      )}
      <motion.span
      layout
        className={` will-change-transform ${light ? "!bg-black" : ""}`}
      ></motion.span>
    </motion.li>
  );
};

export default Achievement;
