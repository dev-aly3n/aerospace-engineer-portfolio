import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Achievement from "../Achievement";
import { uniAchievementData } from "../achievementData";
import { AnimateSharedLayout, motion } from "framer-motion";
import {useOnScrollAnimation} from "../useOnScrollAnimation";
import {
  pageAnimation,
  textAnimation,
  leftToRightAnimation,
  buttonAnimation,
  photoAnimation,
  rightToLeftAnimation,
} from "../animation";

const Home = () => {
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
      <div>
        <motion.div variants={leftToRightAnimation}></motion.div>
        <motion.div
          className="introduction-uni-head z-50"
          style={{ lineHeight: 2.5 }}
          variants={{hidden:{},visable:{transition:{staggerChildren:0.3}}}}
        >
          <div><motion.h3 variants={textAnimation}>Hello there.</motion.h3></div>
          <br />
          <div><motion.h3 variants={textAnimation}>I am Atefeh Hassani.</motion.h3></div>
          <br />
          <div><motion.h3 variants={textAnimation}>
            An <span className="text-blue-600">AeroSpace</span> engineer.
          </motion.h3></div>
        </motion.div>
        <motion.img variants={photoAnimation} src="/media/uni/firstuni.png" />
        <motion.button variants={buttonAnimation} onClick={knowMeBtnHandler}>
          Know me better{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
        </motion.button>
      </div>

      {/* second */}
      {/* second */}
      {/* second */}
      <div ref={secondRef}>
        <motion.div variants={rightToLeftAnimation}></motion.div>
        <img src="/media/uni/seconduni.png" />
        <div className="text-and-title">
          <p className="" style={{ lineHeight: 1.5 }}>
            I <span className="text-green-600">working</span> on UAVs
            <br />
            Airplanes and <br />
            Drones...
          </p>
          <p className="">
            This is one of my team work artifact that we called it super drone
            plane. we worked on it for 3 month designing calculating and
            manufacturing. we made it on a team with 6 member at KNTU university
            of technology.{" "}
          </p>
        </div>
      </div>

      {/* third */}
      {/* third */}
      {/* third */}
      <div>
        <div></div>
        <p style={{ lineHeight: 1.5 }}>
          There are diferent activities I have in university:
          <br />
          -studying hard <br />
          -focus on projects <br />
          -programming in <span className="text-yellow-500">Python</span> <br />
          -volunteer works like holding competetions, working on scintific
          magzine(<span className="text-green-500">ASPAD</span>), participating
          in aerospace scintific assosiation’s activity and ect...
        </p>
        <img src="/media/uni/thirduni.jpg" />
        <button onClick={learnMoreBtnHandler}>
          Learn more...{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
        </button>
      </div>

      {/* achievement */}
      {/* achievement */}
      <div ref={achieveRef} className="achievement">
        <h2>My Achievements</h2>
        <div></div>
        <AnimateSharedLayout>
          <motion.ul layout className="achieve-list-container">
            {uniAchievementData[0] &&
              uniAchievementData.map((uniachieve) => {
                return <Achievement achieve={uniachieve} />;
              })}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
};

export default Home;
