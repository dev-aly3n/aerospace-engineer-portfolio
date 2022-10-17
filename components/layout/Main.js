import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const Main = (props) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className={`main-container`}
        key={router.pathname}
      >
        {props.children}
      </motion.main>
    </AnimatePresence>
  );
};

export default Main;
