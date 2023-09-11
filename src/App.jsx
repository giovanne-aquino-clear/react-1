import './App.css'
import React from "react";
import Family from "./components/basics/Family.jsx";
import Card from "./components/layout/Card.jsx";
import Random from "./components/basics/Random.jsx";
import First from './components/basics/First.jsx'
import WithParameter from './components/basics/WithParameter';
import FamilyMember from './components/basics/FamilyMember';

export default _ =>

    <div className = "App">
        <h1>Fundamentos React</h1>

        <div className="Cards"> 
            <Card title = "component with children" color="#010">
                <Family surname = "Aquino"> 
                    <FamilyMember name ="Giovanne" />
                    <FamilyMember name ="Ana" />
                    <FamilyMember name ="Shiryuu" />
                </Family>
            </Card>
         
            <Card title = "random challenge" color="#010">
                <Random min={1} max={60}/>
            </Card>  

            <Card title = "string" color="#200">
                Olá React!
            </Card> 

            <Card title = "First parameter" color="#003">
                <First></First>      
            </Card> 
                
            <Card title = "Student status" color="#404">
            <WithParameter
                student="Giovanne Aquino"
                note= {10} />       
            </Card> 
        </div>

    </div>
    
