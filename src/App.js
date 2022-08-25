import './App.css';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SplashPage from './components/SplashPage.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/contacts';
import CalendarSplash from './AppFiles/Calendar_App_JS/calendarSplash.js'
import ATCSplash from './AppFiles/Air_Traffic_Controler/ATC';
import IncrementalGame from './AppFiles/Incremental_Game/IncrementalGame';
import EcommerceSplash from './AppFiles/Ecommerce_App/EcommerceApp';


function App() {

  return (
    <div className='AllRouterWrapper'>
      <Routes>
        <Route path='/' element={<SplashPage />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contacts />}></Route>
        <Route path='/calendar_app/' element={<CalendarSplash />}></Route>
        <Route path='/incremental_game/' element={<IncrementalGame />}></Route>
        <Route path='/ecommerce_app/' element={<EcommerceSplash />}></Route>
        <Route path='/air_traffic_control/' element={<ATCSplash />}></Route>
      </Routes>
    </div>
  );
}

export default App;
