import React from "react";

const Controller = ({onMatch}) => {
    return (
        <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => onMatch('visual')}>
                Visual Match
            </button>
            <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => onMatch('audio')}>
                Audio Match
            </button>
        </div>
    );
};

export default Controller;