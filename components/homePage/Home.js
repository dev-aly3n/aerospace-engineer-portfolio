import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home-container">
      {/* first */}
      {/* first */}
      {/* first */}
      <div>
        <div></div>
        <p
          style={{ lineHeight: 2.5 }}
        >
          Hello there.
          <br />
          I am Atefeh Hassani.
          <br />
          An <span className="text-blue-600">AeroSpace</span> engineer.
        </p>
        <img
          src="/media/uni/firstuni.png"
        />
        <button
          
        >
          Know me better{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
        </button>
      </div>

      {/* second */}
      {/* second */}
      {/* second */}
      <div className="relative flex justify-around pb-24 py-5 mt-10">
        <div className="absolute w-screen h-96 left-16 top-24 bg-gray-600 z-0"></div>
        <img
          src="/media/uni/seconduni.png"
          className="w-[500px] ml-[150px] h-full z-10 rounded-3xl"
        />
        <div className="flex flex-col">
          <p
            className="text-5xl font-black z-10 mt-20 text-white ml-5"
            style={{ lineHeight: 1.5 }}
          >
            I <span className="text-green-600">working</span> on UAVs
            <br />
            Airplanes and <br />
            Drones...
          </p>
          <p className="text-white z-10 w-72 ml-5">
            This is one of my team work artifact that we called it super drone
            plane. we worked on it for 3 month designing calculating and
            manufacturing. we made it on a team with 6 member at KNTU university
            of technology.{" "}
          </p>
        </div>
      </div>

      {/* third */}
      {/* third */}
      {/* third */}
      <div >
        <div ></div>
        <p
        
          style={{ lineHeight: 1.5 }}
        >
          There are diferent activities I have in university:<br/>
          -studying hard <br/>
          -focus on projects <br/>
          -programming in <span className="text-yellow-500">Python</span> <br/>
          -volunteer works like
          holding competetions, working on scintific magzine(<span className="text-green-500">ASPAD</span>), participating in
          aerospace scintific assosiation’s activity and ect...
        </p>
        <img
          src="/media/uni/thirduni.jpg"
        />
  
      </div>
    </div>
  );
};

export default Home;
