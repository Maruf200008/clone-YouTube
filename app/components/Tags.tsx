import Tag from "./Tag";

const Tags = () => {
  const tags = [
    "All",
    "Mixes",
    "Music",
    "News",
    "Computer Science",
    "Live",
    "Dramedy",
    "Bollywood Music",
    "Cricket",
    "Indian pop music",
    "Bangla music",
    "Motu Patlu",
  ];
  return (
    <div className="flex items-center gap-4">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

export default Tags;
