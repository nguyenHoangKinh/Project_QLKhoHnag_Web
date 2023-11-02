import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import UpdateWare from "./components/UpdateWare";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (  
  <BrowserRouter>
       <Routes>
           <Route path="/" element ={<Home />}></Route>
           <Route path="/create" element ={<Create />}></Route>
           <Route path="/updateWare" element ={<UpdateWare />}></Route>
           <Route path="/read:id" element ={<Read />}></Route>
       </Routes>
  </BrowserRouter>
  )
       
}

export default App;
