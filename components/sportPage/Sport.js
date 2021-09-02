import { AnimateSharedLayout, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { sportAchievementData } from "../achievementData";
import { Fragment, useRef } from "react";
import Achievement from "../Achievement";
import { useOnScrollAnimation } from "../useOnScrollAnimation";
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
import SportWave from "./SportWave";

const Sport = () => {
  const [sec1, controls1] = useOnScrollAnimation();
  const [sec2, controls2] = useOnScrollAnimation();
  const [sec3, controls3] = useOnScrollAnimation();
  const [sec4, controls4] = useOnScrollAnimation();

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
      className="sport-container relative"
    >
          <SportWave />

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
          <motion.img
            variants={sportImgAnimation}
            src="/media/sport/sportfirst2.png"
          />
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
        <motion.img
          variants={sportPhotoAnimation}
          src="/media/sport/sportfirst.png"
          alt=""
        />
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
            <span className="text-yellow-400">Taekwondo</span> for more than 6
            years.
            <br />
          </motion.p>
          <motion.p variants={textAnimation}>
            my mother is a Taekwondo master and she always encorage me to
            continue.
          </motion.p>
        </div>
        <motion.img
          variants={borderAnimation}
          src="/media/sport/sportsecond.png"
          alt=""
        />
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
              my brain and make my body healthy. I have many{" "}
              <span className="text-yellow-400">Medals</span> in Poomsae
              competetions that you can see them{" "}
              <motion.button variants={buttonAnimation} onClick={atTheFollowingHandler}>
                at the following!
                <FontAwesomeIcon
                  className="animate-bounce"
                  icon={faArrowDown}
                />
              </motion.button>
            </span>
          </motion.p>
        </div>
        <motion.img variants={photoAnimation} src="/media/sport/sportthird.jpg" alt="" />
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
        <h2 ref={achieveRef}>My Achievements</h2>
        <motion.div variants={lineAnimation}></motion.div>
        <AnimateSharedLayout>
          <motion.ul layout className="achieve-list-container">
            {sportAchievementData[0] &&
              sportAchievementData.map((uniachieve) => {
                return <Achievement achieve={uniachieve} />;
              })}
          </motion.ul>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};

export default Sport;
