import React from "react";
import { Jumbotron } from "react-bootstrap";

export default class Smallcards extends React.Component{
    render(){
        return(
        <div className="aside-tarjetas" >
            <Jumbotron className="jumbo small" style={this.props.estilo}>
            <h5>New Visitors</h5>
            <h3>1.5K</h3>
            </Jumbotron>
            <Jumbotron className="espacio-blanco"></Jumbotron>
            
            
            
        </div>
        )
    }
}