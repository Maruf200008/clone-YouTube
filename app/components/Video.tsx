import Image from "next/image";

const Video = ({ video }) => {
  const { id, thumbnails, videoUrl, title, chanelLogo, views, channelTitle } =
    video;

  return (
    <div className=" space-y-3">
      <Image
        src={thumbnails}
        alt="as"
        className=" rounded-md"
        width={700}
        height={100}
      />
      <div className=" flex gap-3 ">
        <div>
          {/* <Image src={chanelLogo} alt="chanelLogo" width={70} /> */}
        </div>
        <div className="space-y-1">
          <h2 className=" text-[15px]">{`${title.slice(0, 55)}...`}</h2>
          <div className="text-[13px] text-[#cbcbcb]">
            <p className=" ">{`${channelTitle.slice(0, 30)}...`}</p>
            <p>{views} views . 2 years ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
