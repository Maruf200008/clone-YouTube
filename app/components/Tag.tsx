"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag } from "../redux/features/videos/videosSlice";
import { RootState } from "../redux/store";

const Tag = () => {
  interface TagType {
    title: string;
    link: string;
  }
  const tags: TagType[] = [
    { title: "All", link: "" },
    { title: "Mixes", link: "mixes" },
    { title: "Music", link: "music" },
    { title: "News", link: "news" },
    { title: "Computer Science", link: "computerScience" },
    { title: "Live", link: "live" },
    { title: "Dramedy", link: "drama" },
    { title: "Bollywood Music", link: "bollywoodMusic" },
    { title: "Cricket", link: "cricket" },
    { title: "Indian Pop Music", link: "indianPopmusic" },
    { title: "Bangla Music", link: "banglaMusic" },
    { title: "Motu Patlu", link: "motuPatlu" },
  ];

  const { tag } = useSelector((state: RootState) => state.videos);
  const [activeTag, setActiveTag] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (tag === "") {
      setActiveTag("all");
    }
  }, [tag]);
  const handleClicke = (value: string) => {
    setActiveTag(value);
    dispatch(addTag(value));
  };
  return (
    <div className="flex items-center gap-4">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`bg-[#292929] ${
            tag.link === activeTag
              ? " bg-white text-gray-900 hover:bg-white"
              : ""
          } px-2 py-1 rounded-md hover:bg-[#444444] transition`}
        >
          <button
            onClick={() => handleClicke(tag.link)}
            className="text-[14px]"
          >
            {tag.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tag;
