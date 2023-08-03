"use client";

import { Hero } from "./components";

const Page = ({ params }) => {
  const { videoId } = params;

  return (
    <div>
      <Hero videoId={videoId} />
    </div>
  );
};

export default Page;
