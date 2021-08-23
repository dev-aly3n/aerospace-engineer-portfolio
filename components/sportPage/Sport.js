import { AnimateSharedLayout, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { sportAchievementData } from "../achievementData";
import { useRef } from "react";
import Achievement from "../Achievement";

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
    <div className="sport-container">
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
        <p style={{lineHeight:1.7}}>
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
      <div className="flex relative w-full justify-evenly items-center mt-32 mb-80">
        <div className="absolute top-10 left-5 sm:left-10 lg:left-36 xl:left-60 h-[400px] bg-gray-900 w-full"></div>
        <img
          className="h-[400px] z-10 shadow-2xl "
          style={{ borderRadius: "0.5rem 1.5rem 8rem 0.9rem" }}
          src="/media/sport/sportthird.jpg"
          alt=""
        />
        <p className="z-10 text-4xl text-white w-[550px] font-black mr-10">
          I am NOT a big fan of beating people, so I focus just on{" "}
          <span className="text-yellow-400">Taekwondo Poomsae</span> <br />
          <span className="text-xl font-medium">
            There is a world of peace for me in Taekwondo, I use it to clean my
            brain and make my body healthy. I have many{" "}
            <span className="text-yellow-400">Medals</span> in Poomsae
            competetions that you can see them
            <button
              onClick={atTheFollowingHandler}
              className="text-blue-300 hover:scale-105 duration-700 hover:text-blue-600 font-black"
            >
              at the following!{" "}
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </button>
          </span>
        </p>
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
    </div>
  );
};

export default Sport;
