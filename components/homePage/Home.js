import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import UniAchievement from "./UniAchievement";
import { uniAchievementData } from "../achievementData";
import {AnimateSharedLayout, motion} from 'framer-motion';

const Home = () => {
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
        <button>
          Know me better{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
        </button>
      </div>

      {/* second */}
      {/* second */}
      {/* second */}
      <div>
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
      </div>

      {/* achievement */}
      <div className="w-full flex flex-col justify-center items-center mt-5">
      <h2 className="text-3xl text-white">My Achievements</h2>
      <div className="w-8/12 sm:w-1/2 h-px mt-2 bg-white"></div>
      <AnimateSharedLayout>
      <motion.ul layout className="uni-achieve-list-container flex flex-col gap-y-10 md:gap-y-20 mx-10 py-10 w-10/12 md:w-8/12">
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
