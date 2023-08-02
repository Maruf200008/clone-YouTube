import Image from "next/image";
import Link from "next/link";

const Video = ({ video }) => {
  const { id, thumbnails, videoUrl, title, chanelLogo, views, channelTitle } =
    video;

  return (
    <div className=" space-y-3">
      <Link href={`video/${id}`}>
        <Image
          src={thumbnails}
          alt="as"
          className=" rounded-md"
          width={700}
          height={100}
        />
      </Link>
      <div className=" grid grid-cols-7  ">
        <Link href="/" className=" col-span-1">
          <Image
            src={chanelLogo}
            alt="chanelLogo"
            width={30}
            height={30}
            className=" rounded-full "
          />
        </Link>
        <div className="space-y-1 col-span-6">
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
