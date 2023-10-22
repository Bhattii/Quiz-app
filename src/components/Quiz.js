import React, { useState } from "react";
import "./Quiz.css";
import questions from "./QuizData";
import { Result } from "./Result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5)
      setCorrectAns(correctAns + 1)

    }
    setClicked(true)

  };
  const handleNextOption = () => {
    setClicked(false)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };
  const handlePlayAgain = () => {
    setCurrentQuestion(0)
    setScore(0)
    setCorrectAns(0)
    setShowResult(false)
  }
  return (
    <div className="main">

      <div className="app">
        {showResult ? (<Result score={score} correctAns={correctAns} handlePlayAgain={handlePlayAgain} />) : (
          <>

            <div className="question-section">

               <div className="question-count">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
              </div>

              <div className="score-section">
                <h4>Score : {score}</h4>
              </div>
              <div className="question-text">
                <h2>{questions[currentQuestion].questinText}</h2>
              </div>
            
            
              {questions[currentQuestion].answerOptions.map((ans, i) => {
                return (
                  <div className="options"> <button
                    className={`button ${clicked & ans.isCorrect ? "correct" : "button"}`}
                    disabled={clicked}
                    key={i}
                    onClick={() => handleAnswerOption(ans.isCorrect)
                    }>
                    {ans.answerText}
                  </button> </div>
                )
              })}
            
           
            

            

            </div> 




             <div className="answer-section"> 


              <div className="actions">
              
                <button className="next" disabled={!clicked} onClick={handleNextOption}>Next</button>
                <button className="reset" onClick={handlePlayAgain}>Restart</button>

              </div>
              

            </div> 
          </>
        )}





      </div>
    </div>

  );
};

export default Quiz;
