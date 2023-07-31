import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import liberies from "../images/library.png";
import shorts from "../images/shortsLogo.png";
import subscriptions from "../images/subscriptions.png";
const Sidebar = () => {
  return (
    <>
      <div className=" space-y-5  ml-[-25px] flex flex-col w-[100px] items-center ">
        <div>
          <button className=" text-xl text-center flex items-center flex-col hover:bg-[#3b3b3b] px-2 py-1 rounded-md transition  ">
            <AiFillHome />
            <p className=" text-[12px]">Home</p>
          </button>
        </div>
        <div>
          <button className=" text-xl text-center flex items-center flex-col hover:bg-[#3b3b3b] px-2 py-1 rounded-md transition  ">
            <Image src={shorts} alt="logo" width={30} />
            <p className=" text-[12px]">Shorts</p>
          </button>
        </div>
        <div>
          <button className=" text-xl text-center flex items-center flex-col hover:bg-[#3b3b3b] px-2 py-1 rounded-md transition  ">
            <Image src={subscriptions} alt="logo" width={28} />
            <p className=" text-[12px]">Subscriptions</p>
          </button>
        </div>
        <div>
          <button className=" text-xl text-center flex items-center flex-col hover:bg-[#3b3b3b] px-2 py-1 rounded-md transition  ">
            <Image src={liberies} alt="logo" width={28} />
            <p className=" text-[12px]">Library</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
