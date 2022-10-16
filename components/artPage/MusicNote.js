import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import musicnote0 from "../../assets/art/musicnote0.png";
import musicnote1 from "../../assets/art/musicnote1.png";
import musicnote2 from "../../assets/art/musicnote2.png";

export const musicNotesImgs = [musicnote0, musicnote1, musicnote2];

const MusicNote = ({ showBtn, note }) => {
  const noteRef = useRef(null);

  useEffect(() => {
    const randomNum = Math.random().toFixed(1) * 10;

    noteRef.current.style.animation = `musicNote${randomNum % 5} ${
      (randomNum % (showBtn ? 8 : 1)) + (showBtn ? 5 : 1)
    }s ease-out 0s infinite alternate`;
  }, [showBtn]);
  return (
    <motion.span ref={noteRef} className="overflow-hidden h-8 w-8 relative">
      <Image
        src={musicNotesImgs[note % 3]}
        alt={"atefeh hasani aerospace engineer"}
        placeholder="blur"
        layout="responsive"
      />
    </motion.span>
  );
};

export default MusicNote;
