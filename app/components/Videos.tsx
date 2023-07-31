import Video from "./Video";

const key = "AIzaSyBfv7C9BrkBSB6PPJbLUxpGv7n-bEBV_Fo";
const id = "@freecodecamp";

const Videos = async () => {
  return (
    <>
      <div className=" grid grid-cols-4 gap-5 mt-5 overflow-hidden">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </>
  );
};

export default Videos;
