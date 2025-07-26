import React from "react";

const Grid = ({activeIndex}) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {Array.from({length: 9}).map((_, i) => (
                <div key={i} className={`w-16 h-16 rounded-md transition-all duration-300 ${i === activeIndex ? `bg-blue-400` : `bg-gray-700`}`} />
            ))}
        </div>
    );
};

export default Grid;