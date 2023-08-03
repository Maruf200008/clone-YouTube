import Sidebar from "./Sidebar";
import Tags from "./Tags";
import Videos from "./Videos";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto ">
        <div className=" grid grid-cols-12 text-white">
          <div className=" col-span-1">
            <Sidebar />
          </div>
          <div className=" col-span-11 ">
            <Tags />
            <Videos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
