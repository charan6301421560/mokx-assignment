import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SinglePage from './Components/SinglePage/SinglePage';
import Home from './Components/home/home'
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from './Components/SignupPage/SignupPage';
import VedicAIPage from './Components/WelCome/WelCome';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SinglePage/>} />
        <Route path='/home' element ={ <Home/>}/>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/vedic-ai' element={<VedicAIPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
