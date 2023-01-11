import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

const navigate =useNavigate();
const handleGoHome = () => {
  navigate(-1);
}
  return (
<>
  <div>
    <button className='btn' onClick={handleGoHome}>Go Home</button>
  </div>
    <h1>inspired by Command Shift</h1>
    <h2>for more information, please follow</h2>
    <a className='link' href='https://github.com/Claudiu-Petre/squizme'>Claudiu Petre</a>
    <br></br>
    <p>and</p>
    <a className='link' href='https://github.com/husseab/javascript-quiz-api'>Abdikarim Hussein</a>

</>

)}

export default About
