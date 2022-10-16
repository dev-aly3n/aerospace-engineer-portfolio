//libs
import { useRef } from "react";

//components
import { AnimateSharedLayout, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Achievement from "../Achievement";
import SportWave from "./SportWave";

//helpers & data
import { sportAchievementData } from "../achievementData";
import { useOnScrollAnimation } from "../useOnScrollAnimation";

//animations
import {
  pageAnimation,
  textAnimation,
  leftToRightAnimation,
  buttonAnimation,
  photoAnimation,
  rightToLeftAnimation,
  sectionAnimation,
  lineAnimation,
  twAnimation,
  sportImgAnimation,
  sportPhotoAnimation,
  borderAnimation,
} from "../animation";

import Image from "next/image";

import sportfirst2 from "../../assets/sport/sportfirst2.png";
import sportfirst from "../../assets/sport/sportfirst.png";
import sportsecond from "../../assets/sport/sportsecond.png";
import sportthird from "../../assets/sport/sportthird.jpg";

const Sport = () => {
  const [sec1, controls1] = useOnScrollAnimation(0.3);
  const [sec2, controls2] = useOnScrollAnimation();
  const [sec3, controls3] = useOnScrollAnimation();
  const [sec4, controls4] = useOnScrollAnimation(0.1);

  const achieveRef = useRef(null);
  const atTheFollowingHandler = () => {
    achieveRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visable"
      exit="out"
      className="sport-container"
    >
      <SportWave controls1={controls1} />

      {/* first */}
      {/* first */}
      {/* first */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        animate={controls1}
        ref={sec1}
      >
        <motion.div variants={rightToLeftAnimation}></motion.div>
        <div>
          <motion.span
            variants={sportImgAnimation}
            className="overflow-hidden relative h-[300px] w-[246px] z-10 hidden md:block"
          >
            <Image
              src={sportfirst2}
              alt={"atefeh hasani taekwondo athlete"}
              placeholder="blur"
              layout="responsive"
            />
          </motion.span>
          <p>
            <motion.span variants={twAnimation} custom={0}>
              T
            </motion.span>
            <motion.span variants={twAnimation} custom={1}>
              A
            </motion.span>
            <motion.span variants={twAnimation} custom={2}>
              E
            </motion.span>
            <motion.span variants={twAnimation} custom={3}>
              K
            </motion.span>
            <motion.span variants={twAnimation} custom={4}>
              W
            </motion.span>
            <motion.span variants={twAnimation} custom={5}>
              O
            </motion.span>
            <motion.span variants={twAnimation} custom={6}>
              N
            </motion.span>
            <motion.span variants={twAnimation} custom={7}>
              D
            </motion.span>
            <motion.span variants={twAnimation} custom={8}>
              O
            </motion.span>
          </p>
        </div>
        <motion.span
          variants={sportPhotoAnimation}
          className="overflow-hidden relative h-[600px] z-10 w-[229px]"
        >
          <Image
            src={sportfirst}
            alt={"atefeh hasani taekwondo athlete"}
            placeholder="blur"
            layout="responsive"
          />
        </motion.span>
      </motion.div>
      {/* second */}
      {/* second */}
      {/* second */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        animate={controls2}
        ref={sec2}
      >
        <motion.div variants={leftToRightAnimation}></motion.div>
        <div>
          <motion.p variants={textAnimation} style={{ lineHeight: 1.7 }}>
            I am a professional athlete in{" "}
            <span className="text-yellow-400">Taekwondo</span> for more than 11
            years.
            <br />
          </motion.p>
          <motion.p variants={textAnimation}>
            my mother is a Taekwondo master and she always encourages me to
            continue.
          </motion.p>
        </div>
        <motion.span
          variants={borderAnimation}
          className="overflow-hidden relative ssm:h-[500px] w-[382px] z-10 border-r-8 border-t-4 border-[#fccec1] rounded-3xl mt-7"
        >
          <Image
            src={sportsecond}
            alt={"atefeh hasani taekwondo athlete"}
            placeholder="blur"
            layout="responsive"
          />
        </motion.span>
      </motion.div>

      {/* third */}
      {/* third */}
      {/* third */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        animate={controls3}
        ref={sec3}
      >
        <motion.div variants={rightToLeftAnimation}></motion.div>
        <div>
          <motion.p variants={textAnimation}>
            I am NOT a big fan of beating people, so I focus just on{" "}
            <span className="text-yellow-400">Taekwondo Poomsae</span>
          </motion.p>
          <motion.p variants={textAnimation}>
            <span className="text-lg lg:text-xl font-normal lg:font-medium">
              There is a world of peace for me in Taekwondo, I use it to clean
              my mind and make my body healthy. I have many{" "}
              <span className="text-yellow-400">Medals</span> in Taekwondo
              competitions that you can see them{" "}
              <motion.button
                variants={buttonAnimation}
                onClick={atTheFollowingHandler}
              >
                at the following!
                <FontAwesomeIcon
                  className="animate-bounce"
                  icon={faArrowDown}
                />
              </motion.button>
            </span>
          </motion.p>
        </div>
        <motion.span
          variants={photoAnimation}
          style={{ borderRadius: "0.5rem 1.5rem 8rem 0.9rem" }}
          className="overflow-hidden relative ssm:h-[330px] lg:h-[400px] w-[534px] z-10 shadow-2xl mt-8"
        >
          <Image
            src={sportthird}
            alt={"atefeh hasani taekwondo athlete"}
            placeholder="blur"
            layout="responsive"
          />
        </motion.span>
      </motion.div>

      {/* achievement */}
      {/* achievement */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        animate={controls4}
        ref={sec4}
        className="achievement"
      >
        <h2 ref={achieveRef}>My Achievements and Championships</h2>
        <motion.div variants={lineAnimation}></motion.div>
        <AnimateSharedLayout>
          <motion.ul className="achieve-list-container">
            {sportAchievementData[0] &&
              sportAchievementData.map((sportachieve, index) => {
                return (
                  <Achievement
                    key={sportachieve.id}
                    num={index + 1}
                    achieve={sportachieve}
                  />
                );
              })}
          </motion.ul>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};

export default Sport;
