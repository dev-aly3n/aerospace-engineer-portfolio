const Life = () => {
  return (
    <div className="w-full h-full relative">
      <img
        src="/media/life/lifefirst.jpg"
        className=" h-screen lg:h-full object-cover object-midleft lg:object-center duration-2000"
      />
      <div className="w-full h-full absolute left-0 top-0 bg-black/10"></div>
      <div
        className="absolute right-[50%] sm:right-[70%] md:right-[10%] lg:right-1/4 xl:right-1/4 top-96 md:top-20 xl:top-44
        text-3xl md:text-4xl xl:text-5xl md:gap-y-5 xl:gap-y-10 text-pink-800 font-black 
        px-2 py-1 flex flex-col justify-center items-center
         hover:scale-125 duration-3000 animate-pulse select-none "
        style={{ fontFamily: "'Rampart One', cursive" }}
      >
        <span>My</span> <span>Dream</span> <span>IS</span>
        <span>To</span> <span>Fly...</span>
      </div>
    </div>
  );
};

export default Life;
