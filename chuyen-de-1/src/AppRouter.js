import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "./App";
import Add from "./components/Add";
// import { Switch, Route } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom'; 

function AppRouter(){
  return(
    <BrowserRouter>
     <Routes>  
         {/* <Route path='/' element={<App />} /> */}
         <Route path='/' element={<App />} /> 
       </Routes>
       <Routes>  
         {/* <Route path='/' element={<App />} /> */}
         <Route path='/create' element={<Add />} /> 
       </Routes>
    </BrowserRouter>
  )
}
export default AppRouter