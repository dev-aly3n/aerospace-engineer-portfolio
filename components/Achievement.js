import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Achievement = ({ achieve, light }) => {
  const [expand, setExpand] = useState(false);
  const descClickHandler = () => {
    setExpand(!expand);
  };
  return (
    <motion.li
      layout
      className={`achievement-container ${light ? "!text-black" : ""}`}
    >
      <motion.h3
        layout
        onClick={descClickHandler}
        className={`${light ? "!text-black" : ""}`}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className={` transform  duration-700 ${expand ? "rotate-90 " : ""}`}
        />
        {achieve.title}
      </motion.h3>
      {expand && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="expand-div"
        >
          <p className={`${light ? "!text-black" : ""}`}>{achieve.desc}</p>
          {achieve.image && (
            <Fragment>
              <Image
                src={achieve.image}
                alt=""
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                width={achieve.width}
                height={achieve.height}
              />
              {achieve.image2 && (
                <Image
                  src={achieve.image2}
                  alt=""
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                  width={achieve.width2}
                  height={achieve.height2}
                />
              )}
            </Fragment>
          )}
          {achieve.video && (
            <video controls width="700" preload="none" poster={achieve.poster}>
              <source src={achieve.video} type="video/mp4" />
              Your browser doesn't suport video!
            </video>
          )}
        </motion.div>
      )}
      <span className={`${light ? "!bg-black" : ""}`}></span>
    </motion.li>
  );
};

export default Achievement;
