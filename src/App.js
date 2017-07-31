import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mediumcards from "./components/Mediumcards.jsx"
import Bigcards from "./components/Bigcards.jsx"
import Smallcards from "./components/Smallcards.jsx"

//import Cuerpo from "./components/Cuerpo.jsx";
//import Aside from "./components/Aside.jsx";

class App extends Component {
  render() {
    return (
        
      <div className="cuerpo">
        
        <div className="cabecera">
            <Mediumcards/>
            <Mediumcards/>
            <Mediumcards/>
        </div>
        
        <div className="contenedor">
            <Bigcards/>
            <Bigcards/>
        
        
        </div>
        
        <div className= "aside-right">
            <Mediumcards/>
            <Smallcards/>
            <Smallcards/>
            <Smallcards/>
            <Smallcards/>
        
        </div>
        

        
        
       
      </div>
    );
  }
}

export default App;
