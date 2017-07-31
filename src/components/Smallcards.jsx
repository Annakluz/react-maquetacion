import React from "react";
import { Jumbotron } from "react-bootstrap";

export default class Smallcards extends React.Component{
    render(){
        return(
        <div className="aside-tarjetas" >
            <Jumbotron>
            <h5>New Visitors</h5>
            <h3>1.5K</h3>
            </Jumbotron>
            <div className="espacio-blanco"></div>
            
            
        </div>
        )
    }
}