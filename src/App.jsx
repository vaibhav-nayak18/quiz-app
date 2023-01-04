import { useState } from "react";
import QuizTab from "./components/QuizTab";
import Welcome from "./components/Welcome";

function App() {
    const [displayHome, setDisplayHome] = useState(true);

    const handleClick = () => {
        setDisplayHome((prevState) => !prevState);
    };
    return (
        <div className="  center ">
            <div className="">
                {displayHome ? (
                    <Welcome changePage={handleClick} />
                ) : (
                    <QuizTab changePage={handleClick} />
                )}
            </div>
        </div>
    );
}

export default App;
