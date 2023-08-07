"use client";

import { useSelector } from "react-redux";
import { useGetVideosQuery } from "../redux/features/videos/apiSlice";
import { RootState } from "../redux/store";
import Error from "./Error";
import LoadingSkeltion from "./LoadingSkeltion";
import Video from "./Video";

const Videos = () => {
  interface VideoType {
    id: number;
    thumbnails: string;
    title: string;
    chanelLogo: string;
    views: number;
    channelTitle: string;
  }
  type TagType = {
    tag: string;
    search: string;
  };
  const { tag, search }: TagType = useSelector(
    (state: RootState) => state.videos
  );
  console.log(search);

  const { data, isLoading, isError } = useGetVideosQuery({ tag, search });

  let content;

  if (isLoading) {
    content = <LoadingSkeltion />;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error</div>;
  } else if (!isLoading && !isError && data.length === 0) {
    content = <Error />;
  } else {
    content = (
      <div className=" grid grid-cols-4 gap-5 mt-5 overflow-hidden">
        {data?.map((video: VideoType) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    );
  }

  return <>{content}</>;
};

export default Videos;
