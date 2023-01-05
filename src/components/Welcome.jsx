import React from "react";

const Welcome = ({ changePage }) => {
    return (
        <div className="center flex-col h-screen w-screen">
            <div className="animate-bounce text-center transition-all duration-200 ">
                <h1>Welcome to Quiz app</h1>
                <button onClick={changePage}>Start</button>
            </div>
        </div>
    );
};

export default Welcome;
