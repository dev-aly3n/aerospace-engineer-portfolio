//libs
import { useRef } from "react";

//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Achievement from "../Achievement";
import { AnimateSharedLayout, motion } from "framer-motion";
import UniWave from "./UniWave";

//helpers & data
import { uniAchievementData } from "../achievementData";
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
} from "../animation";

const Home = () => {
  const [sec1, controls1] = useOnScrollAnimation(0.25);
  const [sec2, controls2] = useOnScrollAnimation();
  const [sec3, controls3] = useOnScrollAnimation();
  const [sec4, controls4] = useOnScrollAnimation();

  const secondRef = useRef(null);
  const achieveRef = useRef(null);

  const knowMeBtnHandler = () => {
    secondRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const learnMoreBtnHandler = () => {
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
      className="home-container"
    >
      {/* first */}
      {/* first */}
      {/* first */}
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        animate={controls1}
        ref={sec1}
      >
        <motion.div variants={leftToRightAnimation}></motion.div>
        <UniWave controls1={controls1} />
        <motion.div
          className="introduction-uni-head z-50"
          style={{ lineHeight: 2.5 }}
          variants={{
            hidden: {},
            visable: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <div>
            <motion.h3 variants={textAnimation}>Hello there.</motion.h3>
          </div>
          <br />
          <div>
            <motion.h3 variants={textAnimation}>I am Atefeh Hasani.</motion.h3>
          </div>
          <br />
          <div>
            <motion.h3 variants={textAnimation}>
              An <span className="text-blue-600">AeroSpace</span> engineer.
            </motion.h3>
          </div>
        </motion.div>
        <motion.img
          variants={photoAnimation}
          src="/media/uni/unifirst.png"
          alt="atefeh hasani aerospace engineer"
        />
        <motion.button
          ref={secondRef}
          variants={buttonAnimation}
          onClick={knowMeBtnHandler}
        >
          Know me better{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
        </motion.button>
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
        <motion.div variants={rightToLeftAnimation}></motion.div>
        <motion.img
          variants={photoAnimation}
          src="/media/uni/unisecond.png"
          alt="atefeh hasani aerospace engineer"
        />
        <div className="text-and-title">
          <motion.p variants={textAnimation} style={{ lineHeight: 1.5 }}>
            I <span className="text-green-600">working</span> on UAV
            <br />
            Airplanes and <br />
            Drones...
          </motion.p>
          <motion.p variants={textAnimation}>
            This is one of my team work project which is vertical & horizontal
            flying drone named VTOL. we worked on it for 3 month designing,
            calculating and manufacturing. we made it in a team with 6 member at
            KNTU university of technology.{" "}
          </motion.p>
        </div>
      </motion.div>

      {/* third */}
      {/* third */}
      {/* third */}
      <motion.div
        ref={sec3}
        variants={sectionAnimation}
        initial="hidden"
        animate={controls3}
      >
        <motion.div variants={leftToRightAnimation}></motion.div>
        <div>
          <motion.p variants={textAnimation} style={{ lineHeight: 1.5 }}>
            My diferent activities:
            <br />
            -studying hard <br />
            -Learning & Teaching English language <br />
            -programming in <span className="text-yellow-500">Python</span>{" "}
            <br />
            -volunteer works like holding competitions, working on scientific
            magazine(<span className="text-green-500">ASPAD</span>),
            participating in aerospace scientific association???s activity and
            ect.
          </motion.p>
        </div>
        <motion.img
          variants={photoAnimation}
          src="/media/uni/unithird.jpg"
          alt="atefeh hasani aerospace engineer"
        />
        <motion.button variants={buttonAnimation} onClick={learnMoreBtnHandler}>
          Learn more...{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
        </motion.button>
      </motion.div>

      {/* achievement */}
      {/* achievement */}
      <motion.div
        ref={sec4}
        variants={sectionAnimation}
        initial="hidden"
        animate={controls4}
        className="achievement"
      >
        <h2 ref={achieveRef}>My Achievements</h2>
        <motion.div variants={lineAnimation}></motion.div>
        <AnimateSharedLayout>
          <motion.ul layout className="achieve-list-container">
            {uniAchievementData[0] &&
              uniAchievementData.map((uniachieve, index) => {
                return (
                  <Achievement
                    key={uniachieve.id}
                    num={index + 1}
                    achieve={uniachieve}
                  />
                );
              })}
          </motion.ul>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};

export default Home;
