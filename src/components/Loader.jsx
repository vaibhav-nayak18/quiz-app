import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const Loader = () => {
    return (
        <div className="flex items-center mt-8">
            <p className=" h-11 animate-bounce text-gray-400">
                <BsArrowDownCircle size={40} />
            </p>
        </div>
    );
};

export default Loader;
