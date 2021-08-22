import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import UniAchievement from "./UniAchievement";
import { uniAchievementData } from "../achievementData";
import { AnimateSharedLayout, motion } from "framer-motion";

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
    <div className="home-container">
      {/* first */}
      {/* first */}
      {/* first */}
      <div>
        <div></div>
        <p style={{ lineHeight: 2.5 }}>
          Hello there.
          <br />
          I am Atefeh Hassani.
          <br />
          An <span className="text-blue-600">AeroSpace</span> engineer.
        </p>
        <img src="/media/uni/firstuni.png" />
        <button onClick={knowMeBtnHandler}>
          Know me better{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
        </button>
      </div>

      {/* second */}
      {/* second */}
      {/* second */}
      <div ref={secondRef}>
        <div></div>
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
          <motion.ul layout className="uni-achieve-list-container">
            {uniAchievementData[0] &&
              uniAchievementData.map((uniachieve) => {
                return <UniAchievement achieve={uniachieve} />;
              })}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default Home;
