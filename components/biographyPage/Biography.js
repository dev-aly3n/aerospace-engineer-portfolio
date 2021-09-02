import { motion } from "framer-motion";
import {
  bioPhotoAnimation,
  pageAnimation,
  bioTextAnimation,
} from "../animation";
import { useOnScrollAnimation } from "../useOnScrollAnimation";

const Biography = () => {
  const [sec1, controls1] = useOnScrollAnimation();
  const [sec2, controls2] = useOnScrollAnimation();
  const [sec3, controls3] = useOnScrollAnimation();
  const [sec4, controls4] = useOnScrollAnimation();
  const [sec5, controls5] = useOnScrollAnimation();
  const [sec6, controls6] = useOnScrollAnimation();
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visable"
      exit="out"
      className="bio-container"
    >
      {/* first */}
      {/* first */}
      {/* first */}
      <div>
        <motion.img
          variants={bioPhotoAnimation}
          src="/media/life/lifefirst.jpg"
        />
        <div></div>
        <div>
          <span>My</span> <span>Dream</span> <span>IS</span>
          <span>To</span> <span>Fly...</span>
        </div>
      </div>
      {/* second */}
      {/* second */}
      {/* second */}
      <div>
        <h3>Atefeh hasani</h3>
        <motion.p
          variants={bioTextAnimation}
          initial="hidden"
          ref={sec1}
          animate={controls1}
        >
          Atefeh Hasani was born in 1999 at Tehran/Iran.she grown up in a nice
          family and went to high-scholl. It was the first place that she
          started 3 journy in her life. Taekwondo, Daf and thinking about
          Aerospace.
        </motion.p>
        <motion.p
          variants={bioTextAnimation}
          initial="hidden"
          ref={sec2}
          animate={controls2}
        >
          She was new to all of them but her mother helped her to train and
          train and train to be a professinal musician and athlete.
        </motion.p>
        <br />
        <motion.p
          variants={bioTextAnimation}
          initial="hidden"
          ref={sec3}
          animate={controls3}
        >
          After Entring University, young happy Atefeh was so excited so She
          started searching for anything she can discover in Aerospace.
        </motion.p>
        <motion.p
          variants={bioTextAnimation}
          initial="hidden"
          ref={sec4}
          animate={controls4}
        >
          Atefeh found her hobbies at the very first days in university. she
          found a tech-group to work with. the work was so exciting and it was
          about Drones. she involved in a proccess to build some drones , some
          new drones.
        </motion.p>
        <motion.p
          variants={bioTextAnimation}
          initial="hidden"
          ref={sec5}
          animate={controls5}
        >
          She also found a scintific magzine aka ASPAD. she worked in ASPAD as
          an editor and writer. her article about airplane engines was the most
          popular article in{" "}
          <a href="https://aspadmag.ir/?p=215" target="_blank">
            ASPAD website
          </a>
          .
        </motion.p>
        <motion.p
          variants={bioTextAnimation}
          initial="hidden"
          ref={sec6}
          animate={controls6}
        >
          And now after all she study hard and still works on her skills. she
          started to learn Python and decided to be a professional programmer as
          well.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Biography;
