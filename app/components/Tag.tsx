"use client";
import { useState } from "react";

const Tag = ({ tag }) => {
  const [isActive, setIsActive] = useState("All");
  const handleClicke = (value) => {
    if (isActive === value) {
      setIsActive("");
    } else {
      setIsActive(value);
    }
  };
  return (
    <div
      className={`bg-[#292929] ${
        tag === isActive ? " bg-white text-gray-900 hover:bg-white" : ""
      } px-2 py-1 rounded-md hover:bg-[#444444] transition`}
    >
      <button onClick={() => handleClicke(tag)} className=" text-[14px]">
        {tag}
      </button>
    </div>
  );
};

export default Tag;
