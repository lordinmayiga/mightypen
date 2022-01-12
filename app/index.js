import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useRoutes, BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";

import Home from "./pages/Home"
import Praise from "./pages/Prasie"
import NotFound from "./pages/NotFound"
const App = function(){
    
    return (
            <BrowserRouter>
                <Routes>
                
                
                    <Route path="/quotes" element={<Praise/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    
}

ReactDOM.render(
    
        
            <App/>
        
        
    

, document.getElementById('app'));
