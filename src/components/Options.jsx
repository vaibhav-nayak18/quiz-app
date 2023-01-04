import React from "react";

const Options = ({ option, selectAnswer, style }) => {
    return (
        <span
            onClick={() => selectAnswer(option)}
            className={` px-2 py-[1px] ml-4 bg-red-300 rounded-2xl min-w-[45px] text-center hover:scale-105 focus:scale-105 active:scale-95 transition-all  cursor-pointer ${style}`}
        >
            {option}
        </span>
    );
};

export default Options;
