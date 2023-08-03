import Image from "next/image";
import Link from "next/link";
import elips from "../../../images/ellipse7.png";

const RelatedVideo = () => {
  const title =
    "Coke asd Season 9| Afreen Afreen| Rahat Fateh Ali Khan & Momina Mustehsan";
  return (
    <div>
      <div className=" grid grid-cols-2 items-center gap-3">
        <div>
          <Link href={`video`}>
            <Image
              src="https://img.youtube.com/vi/kw4tT7SCmaY/maxresdefault.jpg"
              alt="as"
              className=" rounded-md"
              width={700}
              height={100}
            />
          </Link>
        </div>
        <div className=" text-white ">
          <Link href={`video`} className=" text-[15px] ">{`${title.slice(
            0,
            35
          )}...`}</Link>
          <p className=" text-[13px] text-[#787878] mt-2">Yahia Amin</p>
          <div className=" flex items-center gap-1 text-[11px] text-[#787878] ">
            <p>127K views</p>
            <Image src={elips} alt="elips" width={5} />
            <p>3 Weeks ago </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideo;
