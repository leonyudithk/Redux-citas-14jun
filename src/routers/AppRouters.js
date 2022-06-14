import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NavBars from '../components/NavBars';

const AppRouters = () => {
    return (
       <BrowserRouter>
       <NavBars/>
           <Routes>
               <Route path="/" element={<Home/>}/>
           </Routes>
       </BrowserRouter>
    );
};

export default AppRouters;