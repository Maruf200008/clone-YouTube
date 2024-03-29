import NumberDisplay from "@/app/utils/NumberDisplay";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import elips from "../../../images/ellipse7.png";

const RelatedVideo = ({
  video,
}: {
  video?: {
    channelTitle: string;
    id: number;
    publishedAt: string;
    thumbnails: string;
    title: string;
    views: number;
  };
}) => {
  const {
    channelTitle = "",
    id = 0,
    thumbnails = "",
    title = "",
    views = 0,
    publishedAt = "",
  } = video || {};

  return (
    <div>
      <div className=" grid grid-cols-2 items-center gap-3">
        <div>
          <Link href={`/video/${id}`}>
            <Image
              src={thumbnails}
              alt="as"
              className=" rounded-md"
              width={700}
              height={100}
            />
          </Link>
        </div>
        <div className=" text-white ">
          <Link href={`/video/${id}`} className=" text-[15px] ">{`${title.slice(
            0,
            30
          )}...`}</Link>
          <p className=" text-[13px] text-[#787878] mt-2">{channelTitle}</p>
          <div className=" flex items-center gap-1 text-[11px] text-[#787878] ">
            <p>
              <NumberDisplay value={views} /> views
            </p>
            <Image src={elips} alt="elips" width={5} />
            <p> {moment(publishedAt).startOf("day").fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideo;
