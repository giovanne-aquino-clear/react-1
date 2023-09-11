import React from "react";

import Random from "./components/basics/Random.jsx";
import First from './components/basics/First.jsx'
import WithParameter from './components/basics/WithParameter';

export default _ =>
        <div id = "app">
        <Random min={1} max= {60} />
        Olá React!
        <h1></h1>
    
        <First></First>
        <WithParameter
            student="Giovanne Aquino"
            note= "10"

        />
    </div>
    
