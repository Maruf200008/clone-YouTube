import Image from "next/image";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import userImg from "../../../images/userImg.jpg";
import Comment from "./Comment";
const Comments = ({ comments }) => {
  return (
    <div className=" space-y-3">
      <div className=" flex items-center gap-5 text-white ">
        <p>74 Comments</p>
        <button
          type="button"
          className=" inline-flex items-center px-4 py-2 text-sm font-medium  rounded-full  text-white "
        >
          <div className=" text-2xl mr-3">
            <HiOutlineBars3BottomLeft />
          </div>
          Sort by
        </button>
      </div>
      <div className="  flex items-center gap-5    ">
        <Image
          src={userImg}
          alt="userImg"
          width={40}
          height={40}
          className=" rounded-full mb-10"
        />
        <form className=" w-[880px]">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-white focus:outline-none focus:ring-0  peer"
              placeholder=" Add a comment..."
              required
            />
          </div>

          <div className=" flex justify-end">
            <button className="text-white  font-medium rounded-full text-sm  px-5 py-2.5 text-center hover:bg-[#3f3f3f] transition">
              Cancel
            </button>
            <button
              type="submit"
              className="text-white  font-medium rounded-full text-sm  px-5 py-2.5 text-center bg-[#222222] hover:bg-[#3f3f3f] transition"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      {comments.map((c, index) => (
        <Comment key={index} comment={c} />
      ))}
    </div>
  );
};

export default Comments;
