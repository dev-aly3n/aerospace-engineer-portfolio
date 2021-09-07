import { faMusic, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Achievement from "../Achievement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { artAchievementData } from "../achievementData";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Fragment, useRef, useState, useEffect } from "react";
import LoadingRing from "../LoadingRing";
import {
  pageAnimation2,
  artTranAnimation,
  sectionAnimation,
  artTranAnimationContainer,
  textAnimation,
  leftToRightAnimation,
  photoAnimation,
  lineAnimation,
  sectionAnimation2,
} from "../animation";
import { useOnScrollAnimation } from "../useOnScrollAnimation";
import MusicNote from "./MusicNote";

const Art = () => {
  const [sec1, controls1] = useOnScrollAnimation();
  const [sec2, controls2] = useOnScrollAnimation();
  const [sec3, controls3] = useOnScrollAnimation();

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
    <Fragment>
      <motion.div
        className="art-transition-elements"
        variants={artTranAnimationContainer}
        initial="hidden"
        animate="visable"
      >
        <motion.div
          variants={artTranAnimation}
          className="bg-green-300"
        ></motion.div>
        <motion.div
          variants={artTranAnimation}
          className="bg-pink-300"
        ></motion.div>
        <motion.div
          variants={artTranAnimation}
          className="bg-yellow-300"
        ></motion.div>
      </motion.div>
      <motion.div
        variants={pageAnimation2}
        initial="hidden"
        animate="visable"
        exit="out"
        className="art-container"
      >
        {/* first */}
        {/* first */}
        {/* first */}
        <motion.div
          ref={sec1}
          animate={controls1}
          initial="hidden"
          variants={sectionAnimation}
        >
          <motion.div variants={leftToRightAnimation} className="peer">
            <p> Daf is fun</p>
            <div>
              {musicNotes.map((note) => {
                return <MusicNote key={note} note={note} showBtn={showBtn} />;
              })}
            </div>
          </motion.div>
          <div
            className={`
          ${
            showBtn
              ? "md:peer-hover:translate-x-10 !transform filter peer-hover:grayscale peer-hover:blur-ssm"
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
            <motion.video
              variants={photoAnimation}
              onWaiting={() => setIsLoadingVideo(true)}
              onCanPlay={() => setIsLoadingVideo(false)}
              ref={firstVideoRef}
              preload="none"
              loop
              poster={"/media/art/artfirst.jpg"}
              width="500px"
              className={`${showBtn ? "!transform peer-hover:scale-110" : ""} `}
              alt=""
            >
              <source src={"/media/art/artvideofirst.mp4"} type="video/mp4" />
            </motion.video>
          </div>
        </motion.div>
        {/* second */}
        {/* second */}
        {/* second */}

        <motion.div
          variants={sectionAnimation2}
          ref={sec2}
          initial="hidden"
          animate={controls2}
        >
          <motion.h3 variants={textAnimation}>About Daf</motion.h3>
          <div>
            <div>
              <motion.p variants={textAnimation}>
                <FontAwesomeIcon icon={faMusic} /> Daf is a Middle Eastern frame
                drum musical instrument.
              </motion.p>
              <motion.p variants={textAnimation}>
                <FontAwesomeIcon icon={faMusic} /> Nowruz and other festive
                occasions have been accompanied by daf in Sassanid periods (224
                A.D. - 651 A.D.).
              </motion.p>
              <motion.p variants={textAnimation}>
                <FontAwesomeIcon icon={faMusic} /> The sound is produced by
                hitting the membrane with either hand – the left hand, which
                also holds the Daf, strikes the edges, and the right hand
                strikes the center. The right-hand fingers are fastened about
                their neighbours and suddenly released (like the action of
                finger-snapping) to produce loud, rapid, sharp sounds.
              </motion.p>
              <motion.p variants={textAnimation}>
                <FontAwesomeIcon icon={faMusic} /> Playing Daf is a hobby for me
                for filling my time by beauty of music. It's about 4 years that
                I play Daf. I am training once a week and have participated in many
                festivals.
              </motion.p>
            </div>
            <motion.div variants={photoAnimation}>
              <img src="media/art/artsecond.jpg" alt="" />
            </motion.div>
          </div>
        </motion.div>

        {/* third */}
        {/* third */}
        {/* third */}
        <motion.div
          variants={sectionAnimation}
          ref={sec3}
          animate={controls3}
          initial="hidden"
        >
          <div>
            <motion.img
              variants={photoAnimation}
              src="media/art/artthird.png"
              alt=""
            />
          </div>
          <div>
            <div ref={achieveRef} className="achievement ">
              <h2 className="!text-black !font-bold">My Achievements</h2>
              <motion.div
                variants={lineAnimation}
                className="!bg-black"
              ></motion.div>
              <AnimateSharedLayout>
                <motion.ul layout className="achieve-list-container !w-full ">
                  {artAchievementData[0] &&
                    artAchievementData.map((artachieve, index) => {
                      return (
                        <Achievement
                          key={artachieve.id}
                          num={index+1}
                          light={true}
                          achieve={artachieve}
                        />
                      );
                    })}
                </motion.ul>
              </AnimateSharedLayout>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default Art;
