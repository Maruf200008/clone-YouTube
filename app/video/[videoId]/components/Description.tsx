const Description = ({ description, publishedAt, views }) => {
  return (
    <div className=" bg-[#222222] hover:bg-[#3f3f3f] transition py-2 px-3 rounded-xl cursor-pointer text-white">
      <div className=" flex items-center gap-3 text-sm">
        <p>{views} views</p>
        <p>3 days ago</p>
        <p className=" text-gray-400"> Perspective Podcast with Yahia Amin</p>
      </div>
      <div>
        <p className=" mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Description;
