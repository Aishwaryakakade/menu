import React from "react";
import { FaCocktail } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <FaCocktail className="text-6xl text-myteal animate-bounce" />
      <p>Shake Mix Stir</p>
    </div>
  );
};

export default Loading;
