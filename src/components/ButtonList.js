import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Music",
    "Sports",
    "News",
    "Live",
    "Cooking",
    "Comedy",
    "Educational",
    "Science",
    "Technology",
  ];
  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
