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
      
      const naranja ={
          backgroundColor:"#FF8A00",
          color: "#fff",
      }
      const azul ={
          backgroundColor: "#0096D0",
          color: "#fff",
      }
      const morado = {
          backgroundColor: "#CD59AE",
          color: "#fff",
      }
      const rojo ={
          backgroundColor: "#FF4826",
          color: "#fff",
      }
      const verde ={
          backgroundColor: "#63C254",
          color: "#fff",
      }
    return (
        
      <div className="cuerpo">
        
        <div className="cabecera">
            <Mediumcards numeros="20" texto="New Followers added this month" />
            <Mediumcards numeros="$1250" texto="Average Monthly Income"/>
            <Mediumcards numeros="$13865" texto="Yearly Income Goal"/>
        </div>
        
        <div className="contenedor">
            <Bigcards fondo={azul}/>
            <Bigcards fondo={morado}/>
        
        
        </div>
        
        <div className= "aside-right">
            <Mediumcards numeros="18" texto="Paris" estilo={naranja}/>
            <Smallcards estilo ={azul}/>
            <Smallcards estilo ={morado}/>
            <Smallcards estilo ={rojo}/>
            <Smallcards estilo ={verde}/>
        
        </div>
        

        
        
       
      </div>
    );
  }
}

export default App;
