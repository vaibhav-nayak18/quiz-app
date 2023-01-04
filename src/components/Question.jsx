import React, { useState } from "react";
import Options from "./Options";

const Question = ({ question, id, options, questionNumber, style }) => {
    const [selectedOptions, setSelectedOptions] = useState("");
    const selectAnswer = (option) => {
        setSelectedOptions(option);
    };
    return (
        <div className={style}>
            <div className="flex gap-2 text-xl">
                <h1>{questionNumber}.</h1>
                <p>{question}</p>
            </div>
            <div className="flex text-base">
                {options &&
                    options.map((option, index) => {
                        return (
                            <Options
                                key={index}
                                option={option}
                                selectAnswer={selectAnswer}
                                style={
                                    option === selectedOptions &&
                                    "bg-yellow-700"
                                }
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Question;
