"use client";

import { useUpdateVideoMutation } from "@/app/redux/features/videos/apiSlice";
import NumberDisplay from "@/app/utils/NumberDisplay";
import { MdNotificationsActive } from "react-icons/md";

import { addSubscribe } from "@/app/redux/features/videos/videosSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFatThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import Comments from "./Comments";
import Description from "./Description";

const VideoPlayer = ({
  video,
}: {
  video?: {
    chanelLogo: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    videoUrl: string;
    title: string;
    views: number;
    like: number;
    dislike: number;
    subscriber: number;
    thumbnails: string;
    id: number;
    tag: string;
    subscribe: boolean;
    comments: Array;
  };
}) => {
  const {
    chanelLogo = "",
    channelTitle = "",
    description = "",
    publishedAt = "",
    videoUrl = "",
    title = "",
    views = 0,
    like = 0,
    dislike = 0,
    subscriber = 0,
    thumbnails = "",
    id = 0,
    tag = "",
    subscribe,
    comments,
  } = video || {};

  const [updateVideo] = useUpdateVideoMutation();
  const dispatch = useDispatch();

  const [updateLike, setUpdateLike] = useState(like);
  const [updateDisLike, setUpdateDisLike] = useState(dislike);

  const [updateSubscribe, setUpdateSubscribe] = useState(subscribe);
  console.log(video);

  const handleLike = () => {
    setUpdateLike((prev) => prev + 1);
    updateVideo({
      id,
      data: {
        id,
        thumbnails,
        videoUrl,
        title,
        chanelLogo,
        views,
        tag,
        channelTitle,
        subscriber,
        description,
        publishedAt,
        subscribe,
        comments,
        like: updateLike + 1,
        dislike,
      },
    });
  };

  const handledisLike = () => {
    setUpdateDisLike((prev) => prev + 1);
    updateVideo({
      id,
      data: {
        id,
        thumbnails,
        videoUrl,
        title,
        chanelLogo,
        views,
        tag,
        channelTitle,
        subscriber,
        description,
        subscribe,
        publishedAt,
        like,
        comments,
        dislike: updateDisLike + 1,
      },
    });
  };

  const handleSubscribe = () => {
    console.log(updateSubscribe);
    dispatch(addSubscribe(updateSubscribe));

    updateVideo({
      id,
      data: {
        id,
        thumbnails,
        videoUrl,
        title,
        chanelLogo,
        views,
        tag,
        channelTitle,
        subscriber,
        description,
        publishedAt,
        like,
        comments,
        dislike,
        subscribe: updateSubscribe,
      },
    });
  };

  useEffect(() => {
    handleSubscribe();
  }, [updateSubscribe]);

  return (
    <>
      <title>{title}</title>
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
                  <h3 className=" text-[14px] font-medium">{channelTitle}</h3>
                  <p className=" text-[12px] text-[#cbcbcb]">{subscriber}</p>
                </div>
              </div>

              {updateSubscribe ? (
                <button
                  onClick={() => setUpdateSubscribe(!updateSubscribe)}
                  className=" flex items-center gap-3 text-sm bg-[#3f3f3f]  text-white transition px-4 py-2 rounded-full font-medium"
                >
                  <div className=" text-lg">
                    <MdNotificationsActive />
                  </div>
                  Subscribed
                </button>
              ) : (
                <button
                  onClick={() => setUpdateSubscribe(!updateSubscribe)}
                  className=" text-sm bg-white hover:bg-slate-200 transition px-4 py-2 rounded-full font-medium"
                >
                  Subscribe
                </button>
              )}
            </div>
            <div className=" space-x-2 flex items-center">
              <div
                className="inline-flex rounded-full shadow-sm  "
                role="group"
              >
                <button
                  onClick={handleLike}
                  type="button"
                  className=" inline-flex items-center px-4 py-2 text-sm font-medium  rounded-l-full bg-[#222222]   text-white hover:bg-[#3f3f3f] transition  "
                >
                  <div className=" text-2xl mr-3">
                    <AiOutlineLike />
                  </div>
                  <NumberDisplay value={updateLike} />
                </button>

                <button
                  onClick={() => handledisLike()}
                  type="button"
                  className=" inline-flex items-center px-4 py-2 text-sm font-medium  rounded-r-full bg-[#222222]   text-white hover:bg-[#3f3f3f] transition border-l border-[#3f3f3f]  "
                >
                  <div className=" text-2xl mr-3">
                    <AiOutlineDislike />
                  </div>
                  {updateDisLike === 0 ? (
                    ""
                  ) : (
                    <NumberDisplay value={updateDisLike} />
                  )}
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
          <Comments comments={comments} />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
