import React from "react";
import { Jumbotron } from "react-bootstrap";

export default class Bigcards extends React.Component{
    render(){
        return(
            <div className= "color-tarjeta">
                <div>
                <Jumbotron className="fondocolor" style={this.props.fondo}>
                  </Jumbotron>
                   <div className="contenedor-gris">
                    <h1>{this.props.number1}</h1>
                    <p>{this.props.texto1}</p>
                    </div>
                    </div>
                    <div>
                   <Jumbotron className="fondocolor" style={this.props.fondo}>
                  </Jumbotron>
                   <div className="contenedor-gris">
                    <h1>{this.props.number2}</h1>
                    <p>{this.props.texto2}</p>
                    </div>
                    </div>
                    <div>
                    <Jumbotron className="fondocolor" style={this.props.fondo}>
                  </Jumbotron>
                   <div className="contenedor-gris">
                    <h1>{this.props.number3}</h1>
                    <p>{this.props.texto3}</p>
                    </div>
                    </div>
            
        </div>
        )
    }
}