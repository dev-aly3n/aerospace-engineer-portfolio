import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Achievement from "../Achievement";
import { uniAchievementData } from "../achievementData";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useOnScrollAnimation } from "../useOnScrollAnimation";
import {
  pageAnimation,
  textAnimation,
  leftToRightAnimation,
  buttonAnimation,
  photoAnimation,
  rightToLeftAnimation,
  sectionAnimation,
} from "../animation";

const Home = () => {
  const [sec1, controls1] = useOnScrollAnimation();
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
            <motion.h3 variants={textAnimation}>I am Atefeh Hassani.</motion.h3>
          </div>
          <br />
          <div>
            <motion.h3 variants={textAnimation}>
              An <span className="text-blue-600">AeroSpace</span> engineer.
            </motion.h3>
          </div>
        </motion.div>
        <motion.img variants={photoAnimation} src="/media/uni/firstuni.png" />
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
        <motion.img variants={photoAnimation} src="/media/uni/seconduni.png" />
        <div className="text-and-title">
          <motion.p variants={textAnimation} style={{ lineHeight: 1.5 }}>
            I <span className="text-green-600">working</span> on UAVs
            <br />
            Airplanes and <br />
            Drones...
          </motion.p>
          <motion.p variants={textAnimation}>
            This is one of my team work artifact that we called it super drone
            plane. we worked on it for 3 month designing calculating and
            manufacturing. we made it on a team with 6 member at KNTU university
            of technology.{" "}
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
            There are diferent activities I have in university:
            <br />
            -studying hard <br />
            -focus on projects <br />
            -programming in <span className="text-yellow-500">Python</span>{" "}
            <br />
            -volunteer works like holding competetions, working on scintific
            magzine(<span className="text-green-500">ASPAD</span>),
            participating in aerospace scintific assosiation’s activity and
            ect...
          </motion.p>
        </div>
        <motion.img variants={photoAnimation} src="/media/uni/thirduni.jpg" />
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
        <div></div>
        <AnimateSharedLayout>
          <motion.ul layout className="achieve-list-container">
            {uniAchievementData[0] &&
              uniAchievementData.map((uniachieve) => {
                return <Achievement achieve={uniachieve} />;
              })}
          </motion.ul>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};

export default Home;
