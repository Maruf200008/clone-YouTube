import Image from "next/image";
import chanelLogo from "../images/chanelLogo.png";

const Video = () => {
  const title =
    "#16 React Context API - How to use React Context API - React Tutorial Bangla Series";
  const chanelName = "Learn with Sumit - LWS - Bangladesh";

  return (
    <div className=" space-y-3">
      <Image
        src="https://img.youtube.com/vi/_cXDtc4Mjqo/maxresdefault.jpg"
        alt="as"
        className=" rounded-md"
        width={700}
        height={100}
      />
      <div className=" flex gap-3 ">
        <div>
          <Image src={chanelLogo} alt="chanelLogo" width={70} />
        </div>
        <div className="space-y-1">
          <h2 className=" text-[15px]">{`${title.slice(0, 55)}...`}</h2>
          <div className="text-[13px] text-[#cbcbcb]">
            <p className=" ">{`${chanelName.slice(0, 30)}...`}</p>
            <p>25K views . 2 years ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
