import { useGetRelatedVideosQuery } from "@/app/redux/features/videos/apiSlice";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ video }) => {
  const { tag } = video || {};
  const { data: videos, isLoading, isError } = useGetRelatedVideosQuery(tag);

  let content;

  if (isLoading) {
    content = <div> Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div> Somthing is rong!!!</div>;
  } else if (!isLoading && !isError && videos.length === 0) {
    content = <div> No data found!!!</div>;
  } else if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ));
  }

  return <div className=" space-y-3">{content}</div>;
};

export default RelatedVideos;
