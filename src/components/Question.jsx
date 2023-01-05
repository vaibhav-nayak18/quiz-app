import React, { useState } from "react";
import Options from "./Options";

const Question = ({
    question,
    id,
    data,
    options,
    questionNumber,
    style,
    showAnswer,
}) => {
    const [selectedOptions, setSelectedOptions] = useState("");
    const selectAnswer = (option) => {
        data.userAnswer = option;
        if (!showAnswer) {
            setSelectedOptions(option);
        }
    };

    function getBgColor(option) {
        if (data.answer === option) {
            return "bg-green-700";
        } else if (option === data.userAnswer) {
            return "bg-yellow-600";
        }
        return "bg-white";
    }

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
                                    showAnswer
                                        ? getBgColor(option)
                                        : selectedOptions === option
                                        ? "bg-yellow-700"
                                        : "bg-white"
                                }
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Question;
