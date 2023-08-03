import Image from "next/image";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import userImg from "../../../images/userImg.jpg";

const Comment = () => {
  return (
    <div className=" flex gap-3">
      <div>
        <Image src={userImg} alt="image" width={30} className=" rounded-full" />
      </div>
      <div className=" text-white text-sm space-y-3 ">
        <div className=" flex items-center gap-3 ">
          <p>@bahauddinchishte</p>
          <p className="text-[13px] text-[#787878]">2 years ago</p>
        </div>
        <p>
          প্রায়ত আইয়ুব বাচ্চু স্যার বলেছেন হাবিবের গান শুনলে বাংলা গানের যে
          প্রাণ আছে সেটা বোঝা যায়💙
        </p>
        <div className=" flex items-center gap-3  ">
          <div className=" text-lg clear-left flex items-center gap-2  hover:bg-[#3f3f3f] transition rounded-full cursor-pointer px-3 py-1">
            <AiOutlineLike />
            <p className=" text-sm">300</p>
          </div>
          <div className=" text-lg clear-left flex items-center gap-2  hover:bg-[#3f3f3f] transition rounded-full cursor-pointer px-3 py-1">
            <AiOutlineDislike />
            <p className=" text-sm">3</p>
          </div>
          <button className="  text-[12px] px-3 py-1 hover:bg-[#3f3f3f] transition rounded-full">
            Replay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
