import './App.css';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SplashPage from './components/SplashPage';

const MainWrapper = styled.div`
position: absolute;
top: 0;
background-color: #fcf8e8;
background-image: linear-gradient(120deg, #fcf8e8 8%, #ecb390 67%);
height: 100%;
width: 100%;
height: 100%;
margin: 0px;
`

function App() {

  return (
    <MainWrapper>
      <Routes>
        <Route path='/' element={<SplashPage />}></Route>
      </Routes>
    </MainWrapper>
  );
}

export default App;
