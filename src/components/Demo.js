import React, { useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const findPrime = findNthPrime(text);
  console.log("Rendering...");
  return (
    <div
      className={
        "border border-black m-4 p-2 w-96 h-96" + isDarkTheme && "bg-gray-900"
      }
    >
      <div>
        <button
          className="bg-green m-8 p-2"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          On Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-80 p-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h1 className="font-bold text-xl p-2">nth Prime: {findPrime}</h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;
