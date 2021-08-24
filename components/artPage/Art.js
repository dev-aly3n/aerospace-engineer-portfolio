import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Achievement from "../Achievement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { artAchievementData } from "../achievementData";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useRef } from "react";

const Art = () => {
  const achieveRef = useRef(null);
  const musicNotes = [...Array(15).keys()];
  console.log(musicNotes);
  return (
    <div className="w-full h-full flex flex-col bg-blue-50 art-container">
      {/* first */}
      {/* first */}
      {/* first */}
      <div className="flex flex-col ssm:flex-row justify-between bg-pink-100 overflow-hidden shadow-lg">
        <div
          className="h-52 -mb-12 ssm:h-auto ssm:w-1/2 md:w-7/12 flex justify-center items-center
           text-4xl sm:text-5xl md:text-7xl font-black relative hover:scale-110 duration-1000 peer"
          style={{ color: "#307393" }}
        >
          <p> Daf is fun</p>
          <div className="absolute flex gap-x-7 justify-evenly w-screen top-6 ssm:top-10 sm:top-20 md:top-32 lg:top-44 xl:top-64">
            {musicNotes.map((note) => {
              const randomNum = Math.random().toFixed(1) * 10;
              return (
                <img
                  className="h-8 "
                  style={{
                    animation: `musicNote${randomNum % 5} ${
                      (randomNum % 8) + 5
                    }s ease-out 0s infinite alternate`,
                  }}
                  src={`/media/art/musicnote${note % 3}.png`}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div
          className="relative ssm:w-1/2 md:w-5/12 h-full duration-2000 md:peer-hover:translate-x-10
         filter peer-hover:grayscale peer-hover:blur-ssm shadow-lg"
        >
          <img
            className="w-10/12 m-auto ssm:w-full h-full filter contrast-75 shadow-2xl rounded-md
            hover:scale-110 ssm:rounded-none duration-1000 "
            src="/media/art/artfirst.jpg"
            alt=""
          />
        </div>
      </div>
      {/* second */}
      {/* second */}
      {/* second */}

      <div className="flex flex-col ssm:flex-row justify-evenly items-center bg-blue-50 h-full my-44 mx-auto w-10/12 relative">
        <h3 className="absolute top-10 left-16 text-3xl font-bold">
          About Daf
        </h3>
        <div className="flex flex-col gap-y-10 justify-evenly items-start text-xl w-1/2">
          <p>
            <FontAwesomeIcon icon={faMusic} /> Daf is a Middle Eastern frame
            drum musical instrument.
          </p>
          <p>
            <FontAwesomeIcon icon={faMusic} /> Nowruz and other festive
            occasions have been accompanied by daf in Sassanid periods (224 A.D.
            - 651 A.D.).
          </p>
          <p>
            <FontAwesomeIcon icon={faMusic} /> The sound is produced by hitting
            the membrane with either hand – the left hand, which also holds the
            Daf, strikes the edges, and the right hand strikes the center. The
            right-hand fingers are fastened about their neighbours and suddenly
            released (like the action of finger-snapping) to produce loud,
            rapid, sharp sounds.
          </p>
          <p className="font-semibold text-xl">
            <FontAwesomeIcon icon={faMusic} /> Playing Daf is a hobby for me for
            filling my time by beauty of music. It's about 4 years that I play
            Daf. I training once a week and had participate in some festivals.
          </p>
        </div>
        <div className="w-[400px] rounded-md overflow-hidden hover:translate-x-3 duration-1500 shadow-neu1 ">
          <img
            className="w-full  hover:scale-105 hover:rotate-2 duration-1500 "
            src="media/art/artsecond.jpg"
            alt=""
          />
        </div>
      </div>

      {/* third */}
      {/* third */}
      {/* third */}
      <div className="flex flex-col ssm:flex-row justify-center items-start bg-blue-50 h-full mx-auto w-10/12 relative">
        <div className="w-[400px]">
          <img src="media/art/artthird.png" alt="" />
        </div>
        <div className="w-10/12  -mt-44">
          <div ref={achieveRef} className="achievement ">
            <h2 className="!text-black">My Achievements</h2>
            <div className="!bg-black"></div>
            <AnimateSharedLayout>
              <motion.ul layout className="achieve-list-container !w-full ">
                {artAchievementData[0] &&
                  artAchievementData.map((uniachieve) => {
                    return <Achievement light={true} achieve={uniachieve} />;
                  })}
              </motion.ul>
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
