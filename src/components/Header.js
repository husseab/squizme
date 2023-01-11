import React from 'react';
import '../styles/header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <nav className='nav'>
        <div className='name'>s.QUIZ.me!</div>

        <ul>

          <li>
            <NavLink to='/about'> About</NavLink>
          </li>
          <li>
            <NavLink to='/frontend'>Quiz</NavLink>
          </li>
          
        </ul>

      </nav>
      
    <h1> for the bravest!</h1>
    <h2>give it a try!</h2>
    </>


      
    
  )
}

export default Header
