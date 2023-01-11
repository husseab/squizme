import { createContext, useReducer } from "react";
import '../styles/app.css'

const initialState = {
    currentQuestionIndex: 0,
    questions: [],
    showResults: false,
    answers: [],
    currentAnswer: '',
    correctAnswerCount: 0,
  };
  
  const reducer = (state, action) => {

    switch (action.type) {
      case 'SELECT_ANSWER': {
        const correctAnswerText = state.questions[state.currentQuestionIndex].Answers
        .find(answer => answer.result === 'correct').answer;

        const correctAnswerCount = action.payload === correctAnswerText
        ? state.correctAnswerCount + 1
        : state.correctAnswerCount;
        return {
          ...state,
          currentAnswer: action.payload,
          correctAnswerCount,
        }
      };
      case 'NEXT_QUESTION':{
        const showResults = state.currentQuestionIndex === state.questions.length - 1;
        const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
        const answers = showResults ? [] : state.questions[currentQuestionIndex].Answers;
        return {
          ...state,
          currentQuestionIndex,
          showResults,
          answers,
          currentAnswer: '',
        };
      }
      case 'RESTART': {
           return initialState;
      }
      case 'LOADED_QUESTIONS': {
        return {
          ...state,
          questions: action.payload,
          answers: action.payload[state.currentQuestionIndex].Answers,
        }
      }
      default: {
        return state;
      }
    }
     
  };

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const value = useReducer(reducer, initialState);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}