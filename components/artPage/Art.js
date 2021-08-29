import { faMusic, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Achievement from "../Achievement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { artAchievementData } from "../achievementData";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useRef, useState } from "react";
import LoadingRing from "../LoadingRing";
import {pageAnimation} from '../animation';

const Art = () => {
  const firstVideoRef = useRef(null);
  const [showBtn, setShowBtn] = useState(true);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const achieveRef = useRef(null);
  const musicNotes = [...Array(15).keys()];

  const firstVideoClickHandler = () => {
    if (firstVideoRef.current.paused) {
      firstVideoRef.current.play();
      setShowBtn(false);
    } else {
      firstVideoRef.current.pause();
      setShowBtn(true);
    }
  };

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="visable" className="art-container">
      {/* first */}
      {/* first */}
      {/* first */}
      <div>
        <div className="peer">
          <p> Daf is fun</p>
          <div>
            {musicNotes.map((note) => {
              const randomNum = Math.random().toFixed(1) * 10;
              return (
                <img
                  style={{
                    animation: `musicNote${randomNum % 5} ${
                      (randomNum % (showBtn ? 8 : 1)) + (showBtn ? 5 : 1)
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
          className={`
          ${
            showBtn
              ? "md:peer-hover:translate-x-10 filter peer-hover:grayscale peer-hover:blur-ssm"
              : ""
          }`}
          onClick={firstVideoClickHandler}
        >
          {showBtn && (
            <div className="play-btn peer">
              <FontAwesomeIcon
                className="font-icon-class"
                icon={faPlayCircle}
              />
            </div>
          )}
          {!showBtn && isLoadingVideo && (
            <div className="loading-ring">
              <LoadingRing />
            </div>
          )}
          <video
            onWaiting={() => setIsLoadingVideo(true)}
            onCanPlay={() => setIsLoadingVideo(false)}
            ref={firstVideoRef}
            preload="none"
            loop
            poster={"/media/art/artfirst.jpg"}
            width="500px"
            className={`${showBtn ? "peer-hover:scale-110" : ""} `}
            alt=""
          >
            <source src={"/media/art/artvideofirst.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* second */}
      {/* second */}
      {/* second */}

      <div>
        <h3>About Daf</h3>
        <div>
          <div>
            <p>
              <FontAwesomeIcon icon={faMusic} /> Daf is a Middle Eastern frame
              drum musical instrument.
            </p>
            <p>
              <FontAwesomeIcon icon={faMusic} /> Nowruz and other festive
              occasions have been accompanied by daf in Sassanid periods (224
              A.D. - 651 A.D.).
            </p>
            <p>
              <FontAwesomeIcon icon={faMusic} /> The sound is produced by
              hitting the membrane with either hand – the left hand, which also
              holds the Daf, strikes the edges, and the right hand strikes the
              center. The right-hand fingers are fastened about their neighbours
              and suddenly released (like the action of finger-snapping) to
              produce loud, rapid, sharp sounds.
            </p>
            <p>
              <FontAwesomeIcon icon={faMusic} /> Playing Daf is a hobby for me
              for filling my time by beauty of music. It's about 4 years that I
              play Daf. I training once a week and had participate in some
              festivals.
            </p>
          </div>
          <div>
            <img src="media/art/artsecond.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* third */}
      {/* third */}
      {/* third */}
      <div>
        <div>
          <img src="media/art/artthird.png" alt="" />
        </div>
        <div>
          <div ref={achieveRef} className="achievement ">
            <h2 className="!text-black !font-bold">My Achievements</h2>
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
    </motion.div>
  );
};

export default Art;
