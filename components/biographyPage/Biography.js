import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const Biography = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="visable" className="flex flex-col justify-center items-center">
      {/* first */}
      {/* first */}
      {/* first */}
      <div className="w-full h-full relative">
        <img
          src="/media/life/lifefirst.jpg"
          className="  min-h-screen lg:h-full object-cover object-midleft lg:object-center duration-2000"
        />
        <div className="w-full h-full absolute left-0 top-0 bg-black/10"></div>
        <div
          className="absolute left-[20%] md:left-auto md:right-[10%] lg:right-1/4 xl:right-1/4
           bottom-16 md:bottom-auto md:top-20 xl:top-20
        text-3xl md:text-4xl xl:text-5xl md:gap-y-5 xl:gap-y-10 text-pink-800 font-black 
        px-2 py-1 flex flex-col justify-center items-center
         hover:scale-125 duration-3000 animate-pulse select-none"
          style={{ fontFamily: "'Rampart One', cursive" }}
        >
          <span>My</span> <span>Dream</span> <span>IS</span>
          <span>To</span> <span>Fly...</span>
        </div>
      </div>
      {/* second */}
      {/* second */}
      {/* second */}
      <div className="text-white w-1/2 mt-32 mb-20">
        <h3 className="text-4xl font-black">My name is Atefeh hasani</h3>
        <p className="text-lg mt-5">
          I born in 1999 at Tehran. I born in 1999 at Tehran.I born in 1999 at
          Tehran.I born in 1999 at Tehran. I born in 1999 at Tehran.I born in
          1999 at Tehran.I born in 1999 at Tehran.I born in 1999 at Tehran.I
          born in 1999 at Tehran.I born in 1999 at Tehran.I born in 1999 at
          Tehran.I born in 1999 at Tehran.I born in 1999 at Tehran.I born in
          1999 at Tehran.I born in 1999 at Tehran.I born in 1999 at Tehran.I
          born in 1999 at Tehran.I born in 1999 at Tehran.I born in 1999 at
          Tehran.I born in 1999 at Tehran.I born in 1999 at Tehran.I born in
          1999 at Tehran.{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default Biography;
