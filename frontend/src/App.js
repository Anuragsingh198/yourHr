import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route,  Switch, BrowserRouter } from 'react-router-dom';
import MainPage from './components/mainpage';
import SignupForm from './components/UserInformation/SignupForm';
import Confirmation from './components/confirmation';


const TestComponent = () => <div>Test</div>;

const App = () => {
  const [visible, setVisible] =   useState(true)
  useEffect(()=>{
    console.log("visible" ,  visible);
  } , [visible]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage  visible= {visible}/>} />
        <Route path="/signup" element={<SignupForm  setVisible= {setVisible}/>} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
    // <MainPage/>
  );
};



export default App;
