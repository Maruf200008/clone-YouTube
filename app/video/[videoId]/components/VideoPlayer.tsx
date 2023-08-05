"use client";

import NumberDisplay from "@/app/utils/NumberDisplay";
import Image from "next/image";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFatThin } from "react-icons/pi";
import Comments from "./Comments";
import Description from "./Description";

const VideoPlayer = ({ video }) => {
  const {
    chanelLogo,
    channelTitle,
    description,
    publishedAt,
    videoUrl,
    title,
    views,
    like,
    subscriber,
  } = video || {};

  const handleLike = (value) => {
    console.log(value);
  };

  return (
    <div className=" flex flex-col gap-3 mb-20 ">
      <div className=" space-y-4">
        <div>
          <iframe
            width="950"
            height="505"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h1 className=" text-white text-xl font-bold">{title}</h1>
        </div>
        <div className=" flex items-center justify-between">
          <div className=" flex justify-between items-center gap-8">
            <div className=" flex items-center gap-3 text-white ">
              <div>
                <Image
                  src={chanelLogo}
                  alt="Chanellogo"
                  width={40}
                  height={40}
                  className=" rounded-full"
                />
              </div>
              <div>
                <h3 className=" text-[14px]">{channelTitle}</h3>
                <p className=" text-[12px] text-[#cbcbcb]">{subscriber}</p>
              </div>
            </div>

            <button className=" text-sm bg-white hover:bg-slate-200 transition px-4 py-2 rounded-full font-medium">
              Subscribe
            </button>
          </div>
          <div className=" space-x-3 flex items-center">
            <div className="inline-flex rounded-full shadow-sm  " role="group">
              <button
                onClick={() => handleLike(1)}
                type="button"
                className=" inline-flex items-center px-4 py-2 text-sm font-medium  rounded-l-full bg-[#222222]   text-white hover:bg-[#3f3f3f] transition  "
              >
                <div className=" text-2xl mr-3">
                  <AiOutlineLike />
                </div>
                <NumberDisplay value={like} />
              </button>

              <button
                onClick={() => handleLike(1)}
                type="button"
                className=" inline-flex items-center px-4 py-2 text-sm font-medium  rounded-r-full bg-[#222222]   text-white hover:bg-[#3f3f3f] transition border-l border-[#3f3f3f]  "
              >
                <div className=" text-2xl mr-3">
                  <AiOutlineDislike />
                </div>
                5
              </button>
            </div>
            <button
              type="button"
              className=" inline-flex items-center px-4 py-2 text-sm font-medium  rounded-full bg-[#222222]   text-white hover:bg-[#3f3f3f] transition  "
            >
              <div className=" text-2xl mr-3">
                <PiShareFatThin />
              </div>
              Share
            </button>
            <button
              type="button"
              className=" inline-flex items-center px-4 py-2 text-sm font-medium  rounded-full bg-[#222222]   text-white hover:bg-[#3f3f3f] transition  "
            >
              <div className=" text-2xl mr-3">
                <LiaDownloadSolid />
              </div>
              Download
            </button>
            <button
              type="button"
              className=" inline-flex items-center px-3.5 py-1 text-sm font-medium  rounded-full bg-[#222222]   text-white hover:bg-[#3f3f3f] transition  "
            >
              <div className=" text-2xl  flex items-center pb-2">...</div>
            </button>
          </div>
        </div>
        <Description
          description={description}
          publishedAt={publishedAt}
          views={views}
        />
        <Comments />
      </div>
    </div>
  );
};

export default VideoPlayer;
