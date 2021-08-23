import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Sport = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* first */}
      {/* first */}
      {/* first */}
      <div className="flex relative w-full justify-evenly items-center mt-10">
        <div className="absolute top-10 left-5 sm:left-10 lg:left-36 xl:left-60 h-[469px] bg-yellow-400 w-full"></div>
        <div className="z-10 flex xl:gap-x-20">
          <p
            className="z-10 text-[35px] font-black -mt-16"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            TAEKWONDO
          </p>
          <img
            className="h-[300px] z-10 hidden md:block"
            src="/media/sport/sportfirst2.png"
          />
        </div>
        <img
          className="h-[600px] z-10 "
          src="/media/sport/sportfirst.png"
          alt=""
        />
      </div>
      {/* second */}
      {/* second */}
      {/* second */}
      <div className="flex relative w-full justify-evenly items-center mt-32">
        <div className="absolute top-10 right-5 sm:right-10 lg:right-36 xl:right-60 h-[400px] bg-gray-900 w-full"></div>
        <img
          className="h-[500px] z-10 border-r-8 border-t-4 rounded-3xl" style={{borderColor:"#FCCEC1"}}
          src="/media/sport/sportsecond.png"
          alt=""
        />
        <p className="z-10 text-[35px] text-white w-[480px] font-black mr-10">
          I am a professional athlete in{" "}
          <span className="text-yellow-400">Taekwondo</span> for more than 6
          years.
          <br />
          <span className="text-lg font-medium">
            my mother is a Taekwondo master and she always encorage me to
            continue.
          </span>
        </p>
      </div>

      {/* third */}
      {/* third */}
      {/* third */}
      <div className="flex relative w-full justify-evenly items-center mt-32 mb-80">
        <div className="absolute top-10 left-5 sm:left-10 lg:left-36 xl:left-60 h-[400px] bg-gray-900 w-full"></div>
        <img
          className="h-[400px] z-10 shadow-2xl " style={{borderRadius:"0.5rem 1.5rem 8rem 0.9rem"}}
          src="/media/sport/sportthird.jpg"
          alt=""
        />
        <p className="z-10 text-4xl text-white w-[550px] font-black mr-10">
          I am NOT a big fan of beating people, so I focus just on{" "}
          <span className="text-yellow-400">Taekwondo Poomsae</span> <br />
          <span className="text-xl font-medium">
            There is a world of peace for me in Taekwondo, I use it to clean my
            brain and make my body healthy. I have many{" "}
            <span className="text-yellow-400">Medals</span> in Poomsae
            competetions that you can see them
            <button className="text-blue-300 hover:scale-105 duration-700 hover:text-blue-600 font-black">
              at the following!{" "}
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sport;
