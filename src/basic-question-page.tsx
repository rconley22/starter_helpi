
//import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./basic-question-page.css";
import { useState } from "react";
import React from "react";




//import { Button } from "react-bootstrap";
export function BasicQuestionPage(): JSX.Element {
    // State variable to track progress
    const [progress, setProgress] = useState(0);
    // State to track which questions have been answered
    type multAnswers = 'Strongly Disagree' | 'Disagree' | 'Neutral' | 'Agree' | 'Strongly Agree'|''
    const [quest1, setQuest1] = useState<multAnswers>('');
    const [quest2, setQuest2] = useState<multAnswers>('');
    const [quest3, setQuest3] = useState<multAnswers>('');
    const [quest4, setQuest4] = useState<multAnswers>('');
    const [quest5, setQuest5] = useState<multAnswers>('');
    const [quest6, setQuest6] = useState<multAnswers>('');
    const [quest7, setQuest7] = useState<multAnswers>('');
    const [lastPress1, setLastPress1] = useState<multAnswers>('');
    const [lastPress2, setLastPress2] = useState<multAnswers>('');
    const [lastPress3, setLastPress3] = useState<multAnswers>('');
    const [lastPress4, setLastPress4] = useState<multAnswers>('');
    const [lastPress5, setLastPress5] = useState<multAnswers>('');
    const [lastPress6, setLastPress6] = useState<multAnswers>('');
    const [lastPress7, setLastPress7] = useState<multAnswers>('');

    // Function to handle user answering a question
    const handleAnswerQuestion1 = (response1: multAnswers) => {
        // Increment progress by 1 for each answered question
          if(lastPress1 === '')
            setProgress(prevProgress => prevProgress + 1);
          setLastPress1(response1)
        }
    
    const resetProgress  = () =>{
        setProgress(0);
        setLastPress1('');
        setLastPress2('');
        setLastPress3('');
        setLastPress4('');
        setLastPress5('');
        setLastPress6('');
        setLastPress7('');
    }




    
    

    return (

        <><div>
            <h2>Basic Questions Page</h2>
            <hr></hr>
            <p>If you feel unsure about your future career but don't want to
                think about it too much, look no further. In a few short minutes,
                you can get a basic idea as to what career suit you. All you have
                to do is answer the questions below!</p>
            <hr></hr>
            <h4>I prefer working in a group rather than alone.</h4>
            <button onClick={() => handleAnswerQuestion1('Strongly Disagree')} disabled={'Strongly Disagree' === lastPress1}>Strongly Disagree</button>
            <button onClick={() => handleAnswerQuestion1('Disagree')} disabled={'Disagree' === lastPress1}>Disagree</button>
            <button onClick={() => handleAnswerQuestion1('Neutral')} disabled={'Neutral' === lastPress1}>Neutral</button>
            <button onClick={() => handleAnswerQuestion1('Agree')} disabled={'Agree' === lastPress1}>Agree</button>
            <button onClick={() => handleAnswerQuestion1('Strongly Agree')} disabled={'Strongly Agree' === lastPress1}>Strongly Agree</button>
            <hr></hr>
            {/* <h4>I'd rather create something new than learn what's already out there.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I value enjoyment over a high salary.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I prefer a quiet, distraction-free environment over a busy, noisy one.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I'm crafty and good with my hands.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I like working through decisions instead of going with my gut.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button>
            <hr></hr>
            <h4>I enjoy keeping up with current events.</h4>
            <button className="submitAns" onClick={handleAnswerQuestion}>Answer</button> */}
            
            {progress === 7 && 
                <div>
                    <hr></hr>
                    <p className="questions">All questions answered!</p>
                    <Button className="submitAns">Submit Answers</Button>
                </div>}
            <hr></hr>
            <button className="submitAns"onClick={resetProgress}>Reset Progress</button>
        </div><div className="progress">
                <div className="progress-bar" style={{ width: `${(progress / 7) * 100}%` }} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={7}></div>
            </div></>


    );
    
}