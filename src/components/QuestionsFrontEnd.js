import React from 'react'
import '../styles/questionsFrontEnd.css'
import '../styles/answersFrontEnd.css'
import AnswersFrontEnd from './AnswersFrontEnd'
import { useContext } from 'react';
import { AppContext } from '../contexts/app';

const QuestionsFrontEnd = () => {
    const [appState, dispatch] = useContext(AppContext);
    
    const currentQuestion = appState.questions[appState.currentQuestionIndex]
    
  return (
<div>
    <div className='question'>
        {currentQuestion.question}
        
    </div>
        <div className='answers'>

            {appState.answers.map((answer, index)  => {
                const correctAnswerText = appState.answers.find(answer => answer.result === 'correct').answer;
                return (
                <AnswersFrontEnd
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
