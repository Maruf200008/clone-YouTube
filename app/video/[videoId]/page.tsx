import { Hero } from "./components";

const Page = ({ params }: { params?: { videoId: number } }) => {
  const { videoId = 0 } = params || {};

  return (
    <div>
      <Hero videoId={videoId} />
    </div>
  );
};

export default Page;
