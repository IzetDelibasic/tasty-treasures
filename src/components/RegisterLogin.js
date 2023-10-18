import React from 'react'
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../components/Home.css'
import { Recipe } from './Recipe'
import { RegLogPage } from './RegLogPage';



export default function RegisterLogin() {


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} /> 
          <Route path="/reglog" element={<RegLogPage />} /> 
        </Routes>
      </div> 
    </BrowserRouter>
  );
}