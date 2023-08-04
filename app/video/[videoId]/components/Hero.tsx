"use client";
import { useGetVideoQuery } from "@/app/redux/features/videos/apiSlice";
import RelatedVideos from "./RelatedVideos";
import VideoPlayer from "./VideoPlayer";

const Hero = ({ videoId }) => {
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

  let content;

  if (isLoading) {
    content = <div> Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div> Somthing is rong!!!</div>;
  } else {
    content = video.map((v) => (
      <div key={v.id} className=" grid grid-cols-12 gap-6">
        <div className=" col-span-9  ">
          <VideoPlayer video={v} />
        </div>
        <div className=" col-span-3 ">
          <RelatedVideos video={v} />
        </div>
      </div>
    ));
  }
  console.log(video);
  return <div className="max-w-screen-xl mx-auto">{content}</div>;
};

export default Hero;
