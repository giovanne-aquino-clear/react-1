import React from "react";
import './Counter.css'

import Display from "./Display";
import Buttons from "./Buttons";
import PassForm from "./PassForm";

export default class Counter extends React.Component{
    state = {
        numero: this.props.numeroInicial,
        passo: this.props.passo
    }

    inc = () =>{
        this.setState({
            numero: this.state.numero +  this.state.passo  + 1
        })
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Buttons setInc={this.inc} setDec={this.dec}/>
               
            </div>
        )
    }
}