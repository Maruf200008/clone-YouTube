"use client";
import { useGetVideoQuery } from "@/app/redux/features/videos/apiSlice";
import RelatedVideos from "./RelatedVideos";
import VideoPlayer from "./VideoPlayer";

const Hero = ({ videoId }) => {
  const { data, isLoading, isError } = useGetVideoQuery(videoId);
  console.log(data);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" grid grid-cols-12 gap-6">
        <div className=" col-span-9  ">
          <VideoPlayer />
        </div>
        <div className=" col-span-3 ">
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default Hero;
