
//import React, { useState } from "react";
import "./basic-question-page.css";
import { useState } from "react";

//import { Button } from "react-bootstrap";
export function BasicQuestionPage(): JSX.Element {
    // State variable to track progress
    const [progress, setProgress] = useState(0);

    // Function to handle user answering a question
    const handleAnswerQuestion = () => {
        // Increment progress by 1 for each answered question
        setProgress(prevProgress => prevProgress + 1);
    };
    const resetProgress  = () =>{
        setProgress(0);
    }
    return (
        
            <><div className="progress">
            <div className="progress-bar" style={{ width: `${(progress / 7) * 100}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={7}></div>
        </div><div>
                <h2>Basic Questions Page</h2>
                <hr></hr>
                <p>Basic Questions Page Description</p>
                <hr></hr>
                <h4>Question 1</h4>
                <button onClick={handleAnswerQuestion}>Answer</button>
                <hr></hr>
                <h4>Question 2</h4>
                <button onClick={handleAnswerQuestion}>Answer</button>
                <hr></hr>
                <h4>Question 3</h4>
                <button onClick={handleAnswerQuestion}>Answer</button>
                <hr></hr>
                <h4>Question 4</h4>
                <button onClick={handleAnswerQuestion}>Answer</button>
                <hr></hr>
                <h4>Question 5</h4>
                <button onClick={handleAnswerQuestion}>Answer</button>
                <hr></hr>
                <h4>Question 6</h4>
                <button onClick={handleAnswerQuestion}>Answer</button>
                <hr></hr>
                <h4>Question 7</h4>
                <button onClick={handleAnswerQuestion}>Answer</button>
                <hr></hr>
                <button onClick={resetProgress}>Reset Progress</button>
            </div></>
    );
    
}