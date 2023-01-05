import React from "react";

const Submit = ({ handelSubmit, text }) => {
    return (
        <div
            onClick={handelSubmit}
            className=" flex justify-center animate-pop "
        >
            <button className="px-3 py-1 ml-4 bg-red-300 rounded-2xl min-w-[45px] text-center hover:scale-105 focus:scale-105 active:scale-95 transition-all  cursor-pointer">
                {text}
            </button>
        </div>
    );
};

export default Submit;
