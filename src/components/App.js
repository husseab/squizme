import React from 'react';
import '../styles/app.css'
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Frontend from './Frontend';



function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={ <Header /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/frontend' element={<Frontend />} />
      </Routes>
  </>
 )};
      
      export default App;
    
