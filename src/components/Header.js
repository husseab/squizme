import React from 'react';
import '../styles/header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <nav className='nav'>
        <div className='name'>s.Quiz.me</div>

        <ul>

          <li>
            <NavLink to='/about'> About</NavLink>
          </li>
          <li>
            <NavLink to='/frontend'>Quiz</NavLink>
          </li>
          
        </ul>

      </nav>
      
    <h1> For the bravest!</h1>
    <h2>Give it a try!</h2>
    <footer>&copy; Claudiu Petre and Abdikarim Hussein</footer>
    </>


      
    
  )
}

export default Header
