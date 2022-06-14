import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agregar from '../components/Agregar';
import Home from '../components/Home';
import NavBars from '../components/NavBars';

const AppRouters = () => {
    return (
       <BrowserRouter>
       <NavBars/>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/add" element={<Agregar />}/>
           </Routes>
       </BrowserRouter>
    );
};

export default AppRouters;