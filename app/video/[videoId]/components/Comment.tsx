import NumberDisplay from "@/app/utils/NumberDisplay";
import moment from "moment";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
const Comment = ({ comment }) => {
  const { userName, commentDate, commentTitle, like, dislike } = comment || {};
  return (
    <div className=" flex gap-3">
      <div className=" text-white text-2xl">
        <BiSolidUser />
      </div>
      <div className=" text-white text-sm space-y-3 ">
        <div className=" flex items-center gap-3 ">
          <p>{userName}</p>
          <p className="text-[13px] text-[#787878]">
            {moment(commentDate).startOf("day").fromNow()}
          </p>
        </div>
        <p>{commentTitle}</p>
        <div className=" flex items-center gap-3  ">
          <div className=" text-lg clear-left flex items-center gap-2  hover:bg-[#3f3f3f] transition rounded-full cursor-pointer px-3 py-1">
            <AiOutlineLike />
            <p className=" text-sm">
              {like !== 0 ? <NumberDisplay value={like} /> : ""}
            </p>
          </div>
          <div className=" text-lg clear-left flex items-center gap-2  hover:bg-[#3f3f3f] transition rounded-full cursor-pointer px-3 py-1">
            <AiOutlineDislike />
            <p className=" text-sm">
              {dislike !== 0 ? <NumberDisplay value={dislike} /> : ""}
            </p>
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
