import React from 'react'
import '../styles/questions.css'
import '../styles/answers.css'
import Answers from './Answers'
import { useContext } from 'react';
import { AppContext } from '../contexts/app';

const QuestionsFrontEnd = () => {
    const [appState, dispatch] = useContext(AppContext);
    
    const currentQuestion = appState.questions[appState.currentQuestionIndex]
    
  return (
<div>
    <div id='question'>
        {currentQuestion.question}
        
    </div>
        <div className='answers'>

            {appState.answers.map((answer, index)  => {
                const correctAnswerText = appState.answers.find(answer => answer.result === 'correct').answer;
                return (
                <Answers
                answerText={answer.answer} 
                key={index}
                index={index} 
                currentAnswer={appState.currentAnswer}
                correctAnswer={correctAnswerText}
                onSelectAnswer={(answerText) => dispatch({ type: 'SELECT_ANSWER', payload: answerText })}/>
            )
            } )}
        </div>

</div>
  )
}

export default QuestionsFrontEnd;
