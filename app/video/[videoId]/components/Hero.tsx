"use client";
import { useGetVideoQuery } from "@/app/redux/features/videos/apiSlice";
import { useSelector } from "react-redux";
import RelatedVideos from "./RelatedVideos";
import VideoPlayer from "./VideoPlayer";

const Hero = ({ videoId }: { videoId: number }) => {
  interface VideoType {
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
  }

  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);
  const { subscribe } = useSelector((state) => state.videos);
  console.log(subscribe);
  console.log(video);

  let content;
  console.log("I call here");

  if (isLoading) {
    content = <div> Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div> Somthing is rong!!!</div>;
  } else if (!isLoading && !isError && video.length > 0) {
    content = video.map((v: VideoType) => {
      return (
        <div key={v.id} className=" grid grid-cols-12 gap-6">
          <div className=" col-span-9  ">
            <VideoPlayer video={v} />
          </div>
          <div className=" col-span-3 ">
            <RelatedVideos video={v} />
          </div>
        </div>
      );
    });
  }

  return <div className="max-w-screen-xl mx-auto">{content}</div>;
};

export default Hero;
