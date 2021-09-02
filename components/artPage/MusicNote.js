import { useEffect, useRef } from "react";

const MusicNote = ({ showBtn, note }) => {
  const noteRef = useRef(null);

  useEffect(() => {
    const randomNum = Math.random().toFixed(1) * 10;

    noteRef.current.style.animation = `musicNote${randomNum % 5} ${
      (randomNum % (showBtn ? 8 : 2)) + (showBtn ? 5 : 1)
    }s ease-out 0s infinite alternate`;
  }, [showBtn]);

  return (
    <img ref={noteRef} src={`/media/art/musicnote${note % 3}.png`} alt="" />
  );
};

export default MusicNote;
