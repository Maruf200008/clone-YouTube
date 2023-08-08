import type { Metadata } from "next";
import { Hero } from "./components";

export const metadata: Metadata = {
  title: "Bangladesh",
  description: "...",
};

const Page = ({ params }: { params?: { videoId: number } }) => {
  const { videoId = 0 } = params || {};

  return (
    <div>
      <Hero videoId={videoId} />
    </div>
  );
};

export default Page;
