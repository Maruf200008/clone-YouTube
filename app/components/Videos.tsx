import Video from "./Video";

const Videos = async () => {
  const res = await fetch("http://localhost:5000/videos");
  const data = await res.json();

  return (
    <>
      <div className=" grid grid-cols-4 gap-5 mt-5 overflow-hidden">
        {data.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

export default Videos;
