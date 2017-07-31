import React from "react";
import { Jumbotron } from "react-bootstrap";

export default class Mediumcards extends React.Component{
    render(){
        return(
            <div >
            <Jumbotron className="jumbo" style={this.props.estilo}>
                <h2>{this.props.numeros} </h2>
                <h6>{this.props.texto} </h6>
            </Jumbotron>
        </div>
        )
    }
}