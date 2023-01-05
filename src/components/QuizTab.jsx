import axios from "axios";
import React, { useEffect, useState } from "react";
import API_KEY from "../../apikey";
import Loader from "./Loader";
import Question from "./Question";
import Submit from "./Submit";

const QuizTab = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(0);
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const a = async () => {
            await axios
                .get(API_KEY, {
                    cancelToken: source.token,
                })
                .then((res) => res.data)
                .then((req) => {
                    setData(process(req.results));
                })
                .catch((err) => {});
        };

        a();

        return () => {
            source.cancel();
        };
    }, [reload]);

    const createOptions = (res) => {
        const answer = [...res.incorrect_answers, res.correct_answer];
        return shuffle(answer);
    };

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }

    function process(results) {
        const updatedData = [];
        results.map((res, index) => {
            updatedData.push({
                QId: index,
                question: res.question,
                answer: res.correct_answer,
                options: createOptions(res),
                userAnswer: "",
            });
        });
        return updatedData;
    }

    const handelSubmit = () => {
        setShowAnswer(true);
    };
    const clickReload = () => {
        setShowAnswer(false);
        setData([]);
        setReload((prev) => prev + 1);
    };
    return (
        <>
            {data.length > 0 ? (
                <div className="glassBg center my-16 px-5 animate-pop relative ">
                    <div className="flex flex-col mx-2 my-10 gap-8 transition-all duration-700 ease-in-out">
                        {data.map((que, index) => {
                            return (
                                <Question
                                    question={que.question}
                                    id={que.QId}
                                    key={que.QId}
                                    options={que.options}
                                    questionNumber={index + 1}
                                    data={que}
                                    style={"flex flex-col gap-3 "}
                                    showAnswer={showAnswer}
                                />
                            );
                        })}
                        <Submit
                            handelSubmit={
                                !showAnswer ? handelSubmit : clickReload
                            }
                            text={!showAnswer ? "submit" : "reload"}
                        />
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default QuizTab;
