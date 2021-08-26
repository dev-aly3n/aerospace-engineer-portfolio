const Life = () => {
  return (
    <div className="w-full h-full relative">
      <img src="/media/life/lifefirst.jpg" className=" h-screen lg:h-full object-cover object-midleft lg:object-center duration-2000" />
      <div className="w-full h-full absolute left-0 top-0 bg-black/10"></div>
      <div className="absolute right-1/4 top-44 text-pink-800 font-black text-5xl
        px-2 py-1 flex flex-col justify-center items-center gap-y-10" style={{fontFamily:"'Rampart One', cursive"}}><span>My</span> <span>Dream</span> <span>IS</span><span>To</span> <span>Fly...</span></div>
    </div>
  );
};

export default Life;
