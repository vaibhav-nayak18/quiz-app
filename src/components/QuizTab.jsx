import React, { useState } from "react";
import updatedData from "../../apikey";
import Question from "./Question";
import Submit from "./Submit";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const QuizTab = ({ changePage }) => {
    const [allAnswered, setAllAnswered] = useState(false);
    const [expand, setExpand] = useState(true);
    const handelSubmit = () => {
        setExpand((prev) => !prev);
    };
    return (
        <div className="glassBg center my-16 px-5 animate-pop relative ">
            <div className="flex flex-col mx-2 my-10 gap-8 transition-all duration-700 ease-in-out">
                {updatedData.map((que, index) => {
                    return (
                        <Question
                            question={que.question}
                            id={que.QId}
                            key={que.QId}
                            options={que.options}
                            questionNumber={index + 1}
                            style={"flex flex-col gap-3 "}
                        />
                    );
                })}
                {expand && <Submit />}
            </div>
            <div className="absolute -bottom-3  left-[49%] cursor-pointer transition-all active:scale-90 ">
                <BsArrowUpCircle
                    onClick={handelSubmit}
                    size={27}
                    color={"rgb(226 232 240)"}
                    className={`${
                        !expand && "rotate-180 "
                    } transition-all duration-150 ease-linear`}
                />
            </div>
        </div>
    );
};

export default QuizTab;
