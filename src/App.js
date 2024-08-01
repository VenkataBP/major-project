import React from 'react';
import './App.css';
import Nav from "./major/navbar";
import { BrowserRouter ,Routes , Route} from "react-router-dom";
import Men from "./major/men";
import Women from "./major/women";
import  Kids from "./major/kids";
import Beauty from "./major/Beauty";
import Home from "./major/home"
import Electronics from './major/electronics';



const App = () => {
  return (

    <BrowserRouter>
      <Nav />
      


      <Routes>

        <Route path="/Men" element={<Men/>} />
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Kids" element={<Kids/>}/>
        <Route path="/Beauty" element={<Beauty />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Electronics" element={<Electronics />}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
