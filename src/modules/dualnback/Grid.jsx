import React from "react";

const Grid = ({ activeIndex }) => {
  const cells = Array.from({ length: 9 }, (_, i) => (
    <div
      key={i}
      className={`w-16 h-16 border border-white flex items-center justify-center text-black font-bold ${
        i === activeIndex ? "bg-yellow-400" : "bg-white"
      }`}
    >
      {i}
    </div>
  ));

  return <div className="grid grid-cols-3 gap-2">{cells}</div>;
};

export default Grid;