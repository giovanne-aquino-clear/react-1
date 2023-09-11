import './index.css'
import ReactDOM  from "react-dom";
import React from "react";
import First from './components/basics/First.jsx'
import WithParameter from './components/basics/WithParameter';

ReactDOM.render(
    <div>
        Olá React!
        <h1></h1>
        <First></First>
        <WithParameter
            student="Giovanne Aquino"
            note= "10"

        />
    </div>,
    document.getElementById('root')
)