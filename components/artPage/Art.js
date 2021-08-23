const Art = () => {
  const musicNotes = [...Array(15).keys()];
  console.log(musicNotes);
  return (
    <div className="w-full h-full flex flex-col bg-white art-container">
      <div className="flex flex-col ssm:flex-row justify-between bg-pink-100">
        <div
          className="h-52 -mb-12 ssm:h-auto ssm:w-1/2 md:w-7/12 flex justify-center items-center
           text-4xl sm:text-5xl md:text-7xl font-black relative hover:scale-110 duration-1000 peer"
          style={{ color: "#307393" }}
        >
          <p> Daf is fun</p>
          <div className="absolute flex gap-x-7 justify-evenly w-screen top-6 ssm:top-10 sm:top-20 md:top-32 lg:top-44 xl:top-64">
            {musicNotes.map((note) => {
              const randomNum = Math.random().toFixed(1) * 10;
              return (
                <img
                  className="h-8"
                  style={{
                    animation: `musicNote${randomNum % 5} ${
                      (randomNum % 8) + 5
                    }s ease-out 0s infinite alternate`,
                  }}
                  src={`/media/art/musicnote${note % 3}.png`}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="relative ssm:w-1/2 md:w-5/12 h-full duration-1000 peer-hover:translate-x-10">
          <img
            className="w-10/12 m-auto ssm:w-full h-full filter contrast-75 shadow-2xl rounded-md
            hover:scale-110 ssm:rounded-none duration-1000 "
            src="/media/art/artfirst.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Art;
