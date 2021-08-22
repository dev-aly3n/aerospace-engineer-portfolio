const Sport = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <div className="flex relative w-full justify-evenly items-center">
          <div className="absolute top-10 left-5 sm:left-10 lg:left-36 xl:left-60 h-[469px] bg-yellow-400 w-full"></div>
          <div className="z-10 flex xl:gap-x-20">
          <p className="z-10 text-[35px] font-black -mt-16" style={{writingMode:"vertical-lr", textOrientation:"upright"}}>TAEKWONDO</p>
          <img className="h-[300px] z-10 hidden md:block" src="/media/sport/sportfirst2.png" />
          </div>
          <img className="h-[600px] z-10 " src="/media/sport/sportfirst.png" alt="" />
      </div>
    </div>
  );
};

export default Sport;
