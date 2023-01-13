import React, { useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { AppContext } from '../contexts/app';
import QuestionsFrontEnd from './Questions';


const Frontend = () => {

  const [appState, dispatch] = useContext(AppContext);

  const navigate =useNavigate();
    const handleGoBack = () => {
    navigate(-1);
    }

  const apiUrl =  'https://javascript-quiz.onrender.com/questions'

//'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
  

    useEffect(() => {
    if(appState.questions.length > 0) {
      return;
    }

    fetch(apiUrl, {mode: 'cors'})
    .then(res => res.json())
    .then(data => {
      console.log('data', data)
      dispatch({type: 'LOADED_QUESTIONS', payload: data});
    });
  });

  return (
    <>
    <div>
        <button className='btn' onClick={handleGoBack}>Go Home</button>
      </div>
    <div className='container'>
      <div className="app">
      
          {appState.showResults && (
            <div className='results'>
              <div className='well-done'>Well done!</div>
              <div className='results-info'>
                <div>You have been s.Quiz.ed</div>
                <br></br>
                <div>Performance: {appState.correctAnswerCount} of {appState.questions.length}</div>
              </div>
              <div className='play-again' onClick={() => dispatch({ type: 'RESTART' })}>Play again</div>
            </div>
          )}

          {!appState.showResults && appState.questions.length > 0 && (
            <div>
              <div className="score">Question {appState.currentQuestionIndex + 1}/{appState.questions.length}</div>
              <QuestionsFrontEnd />
              <div className="next-button" onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>
                Next
              </div>
            </div>)}
        </div>
      </div>
      </> 
        
  
        )}



export default Frontend;