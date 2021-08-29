import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useOnScrollAnimation = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start("visable");
  }

  return [element, controls];
};
