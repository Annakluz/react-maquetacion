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
                    <h1>20</h1>
                    <p>New Followers</p>
                    </div>
                    </div>
                    <div>
                   <Jumbotron className="fondocolor" style={this.props.fondo}>
                  </Jumbotron>
                   <div className="contenedor-gris">
                    <h1>20</h1>
                    <p>New Followers</p>
                    </div>
                    </div>
                    <div>
                    <Jumbotron className="fondocolor" style={this.props.fondo}>
                  </Jumbotron>
                   <div className="contenedor-gris">
                    <h1>20</h1>
                    <p>New Followers</p>
                    </div>
                    </div>
            
        </div>
        )
    }
}