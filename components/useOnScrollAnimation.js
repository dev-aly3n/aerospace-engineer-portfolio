import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useOnScrollAnimation = (tHold=0.3) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: tHold });

  if (view) {
    controls.start("visable");
  }

  return [element, controls];
};
