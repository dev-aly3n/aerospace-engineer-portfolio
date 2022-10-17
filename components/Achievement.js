//libs
import { Fragment, useState } from "react";

//components
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

//helpers & data
import { useOnScrollAnimation } from "./useOnScrollAnimation";
import { shimmer, toBase64 } from "./util";

//animations
import { achieveAnimation, achievementExpandAni } from "./animation";

const Achievement = ({ achieve, light, num }) => {
  const [expand, setExpand] = useState(false);
  const descClickHandler = () => {
    setExpand(!expand);
  };
  return (
    <motion.li
      variants={achieveAnimation}
      initial="hidden"
      animate="visable"
      layout
      className={`flex flex-col justify-start items-start w-full h-full relative ${
        light ? "!text-black" : ""
      }`}
    >
      <motion.h3
        onClick={descClickHandler}
        className={`text-lg md:text-xl text-gray-200 font-bold w-full hover:text-blue-200 cursor-pointer ${
          light ? "!text-black" : ""
        }`}
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
      <AnimatePresence mode="wait">
      {expand && (
        <motion.div
          layout
          className={`flex flex-col justify-start items-start mx-auto sm:w-11/12 gap-y-8 overflow-hidden  mt-2 md:mt-10`}
          variants={achievementExpandAni}
          initial="hidden"
          animate="visable"
          exit={"out"}
        >
          <motion.p
          layout
            className={`text-[0.85rem] md:text-base mb-3 text-white ${
              light ? "!text-black" : ""
            }`}
          >
            {achieve.desc}
          </motion.p>
          {achieve.image && (
            <>
              <motion.div layout className="w-9/12 h-full relative mx-auto">
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
            <motion.video
            layout
              className="block self-center w-[700px] mx-auto"
              controls
              width="700"
              preload="none"
              poster={achieve.poster}
            >
              <source src={achieve.video} type="video/mp4" />
              Your browser doesn't suport video!
            </motion.video>
          )}
        </motion.div>
      )}
      </AnimatePresence>
      <motion.span
        layout
        className={`will-change-transform w-full !h-px mt-2 bg-white ${
          light ? "!bg-black" : ""
        }`}
      ></motion.span>
    </motion.li>
  );
};

export default Achievement;
