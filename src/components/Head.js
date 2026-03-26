import React from "react";
import { FiSearch } from "react-icons/fi";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
        />
      </div>

      <div className="col-span-10 pl-28">
        <div className="flex items-center w-1/2">
          <input
            type="text"
            className="flex-grow border border-gray-400 p-2 rounded-l-full outline-none"
          />

          <button className="border border-gray-400 px-6 py-3 rounded-r-full bg-gray-100 flex items-center justify-center">
            <FiSearch className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="col-span-21">
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
