import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const useOnScrollAnimation = (tHold = 0.3) => {
  const [viewed, setViewed] = useState(false);
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: tHold });

  if (view && !viewed) {
    setViewed(true);
    controls.start("visable");
  }

  return [element, controls];
};
