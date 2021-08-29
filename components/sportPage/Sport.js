import { AnimateSharedLayout, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { sportAchievementData } from "../achievementData";
import { useRef } from "react";
import Achievement from "../Achievement";
import { pageAnimation } from "../animation";

const Sport = () => {
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
      {/* first */}
      {/* first */}
      {/* first */}
      <div>
        <div></div>
        <div>
          <p>TAEKWONDO</p>
          <img src="/media/sport/sportfirst2.png" />
        </div>
        <img src="/media/sport/sportfirst.png" alt="" />
      </div>
      {/* second */}
      {/* second */}
      {/* second */}
      <div>
        <div></div>
        <img src="/media/sport/sportsecond.png" alt="" />
        <div>
          <p style={{ lineHeight: 1.7 }}>
            I am a professional athlete in{" "}
            <span className="text-yellow-400">Taekwondo</span> for more than 6
            years.
            <br />
          </p>
          <p>
            my mother is a Taekwondo master and she always encorage me to
            continue.
          </p>
        </div>
      </div>

      {/* third */}
      {/* third */}
      {/* third */}
      <div>
        <div></div>

        <p>
          I am NOT a big fan of beating people, so I focus just on{" "}
          <span className="text-yellow-400">Taekwondo Poomsae</span> <br />
          <span className="text-lg lg:text-xl font-normal lg:font-medium">
            There is a world of peace for me in Taekwondo, I use it to clean my
            brain and make my body healthy. I have many{" "}
            <span className="text-yellow-400">Medals</span> in Poomsae
            competetions that you can see them{" "}
            <button onClick={atTheFollowingHandler}>
              at the following!
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </button>
          </span>
        </p>
        <img src="/media/sport/sportthird.jpg" alt="" />
      </div>

      {/* achievement */}
      {/* achievement */}
      <div ref={achieveRef} className="achievement">
        <h2>My Achievements</h2>
        <div></div>
        <AnimateSharedLayout>
          <motion.ul layout className="achieve-list-container">
            {sportAchievementData[0] &&
              sportAchievementData.map((uniachieve) => {
                return <Achievement achieve={uniachieve} />;
              })}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
};

export default Sport;
