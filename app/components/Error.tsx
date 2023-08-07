import Image from "next/image";
import notFoundImg from "../images/dataNotFound.png";

const Error = () => {
  return (
    <div>
      <div className=" flex items-center justify-center mt-[100px] ">
        <Image src={notFoundImg} alt="notFound Img" width={500} />
      </div>
    </div>
  );
};

export default Error;
