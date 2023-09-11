import React from "react";

import Card from "./components/layout/Card.jsx";
import Random from "./components/basics/Random.jsx";
import First from './components/basics/First.jsx'
import WithParameter from './components/basics/WithParameter';

export default _ =>


        <div id = "app">

        <Card title = "random challenge">
                <Random min={1} max={60}/>
       </Card> 

       <Card title = "string">
       Olá React!
       </Card> 

       <Card title = "string">
       <First></First>      
       </Card> 
        
       <Card title = "string">
       <WithParameter
            student="Giovanne Aquino"
            note= {10} />       
        </Card> 
        
    </div>
    
