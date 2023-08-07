"use client";

import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import NumberDisplay from "../utils/NumberDisplay";

const Video = ({
  video,
}: {
  video?: {
    id: number;
    thumbnails: string;
    title: string;
    chanelLogo: string;
    views: number;
    channelTitle: string;
    publishedAt: string;
  };
}) => {
  const {
    id = 0,
    thumbnails = "",
    title = "",
    chanelLogo = "",
    views = 0,
    channelTitle = "",
    publishedAt = "",
  } = video || {};

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
          <Link href={`video/${id}`} className=" text-[15px]">{`${title.slice(
            0,
            55
          )}...`}</Link>
          <div className="text-[13px] text-[#cbcbcb]">
            <p className=" ">{`${channelTitle.slice(0, 30)}...`}</p>
            <p>
              {" "}
              <NumberDisplay value={views} /> views .{" "}
              {moment(publishedAt).startOf("day").fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
