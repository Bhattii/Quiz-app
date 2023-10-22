import React from 'react'
import questions from './QuizData'

export const Result = (props) => {
  return (
  
    <div className='result'>
        <h1>Completed</h1>
        <h2>Total Score: {props.score}/25 </h2>
        <h3>Your correct questions {props.correctAns} out of {questions.length}</h3>
        <button onClick={props.handlePlayAgain}><b>Play Again</b></button>
    </div>
  
  )
}
