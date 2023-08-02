"use client";

import { useGetVideosQuery } from "../redux/features/videos/apiSlice";
import LoadingSkeltion from "./LoadingSkeltion";
import Video from "./Video";

const Videos = () => {
  const { data, isLoading, isError } = useGetVideosQuery();

  let content;

  if (isLoading) {
    content = <LoadingSkeltion />;
  } else if (!isLoading && isError) {
    content = <div>Somthing is error</div>;
  } else {
    content = data?.map((video) => <Video key={video.id} video={video} />);
  }

  return (
    <>
      <div className=" grid grid-cols-4 gap-5 mt-5 overflow-hidden">
        {content}
      </div>
    </>
  );
};

export default Videos;
