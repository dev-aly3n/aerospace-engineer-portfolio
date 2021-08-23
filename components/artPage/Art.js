const Art = () => {
  const musicNotes = [...Array(15).keys()];
  console.log(musicNotes);
  return (
    <div className="w-full h-full flex flex-col bg-white art-container">
      <div className="flex justify-between bg-pink-100">
        <div
          className="w-7/12 flex justify-center items-center text-7xl font-black relative"
          style={{ color: "#307393" }}
        >
          <p> Daf is fun</p>
          <div className="absolute flex justify-evenly w-screen top-72">
            {musicNotes.map((note) => {
              const randomNum = Math.random().toFixed(1) * 10;
              return (
                <img
                  className="h-8"
                  style={{
                    animation: `musicNote${randomNum % 5} ${
                      (randomNum % 8) + 3
                    }s ease-out 0s infinite alternate`,
                  }}
                  src={`/media/art/musicnote${note % 3}.png`}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="relative w-5/12 h-full">
          <img
            className="w-full h-full filter contrast-75 shadow-2xl  duration-700"
            src="/media/art/artfirst.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Art;
