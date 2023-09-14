import './App.css'
import React from "react";

import StudentsList from './components/Repetition/StudentsList';
import Family from "./components/basics/Family.jsx";
import Card from "./components/layout/Card.jsx";
import Random from "./components/basics/Random.jsx";
import First from './components/basics/First.jsx'
import WithParameter from './components/basics/WithParameter';
import FamilyMember from './components/basics/FamilyMember';
import TableProducts from './components/Repetition/TableProducts';
import UserInfo from './components/conditional/UserInfo';


export default _ =>

    <div className = "App">
        <h1>Fundamentos React</h1>

        <div className="Cards"> 

        <Card titulo='#08 - Renderização condicional' color="#982395">
                    <UserInfo user={{ nome: 'Fernando' }} />
                    <UserInfo user={{ nome: 'Julia' }} />
                    <UserInfo user={{ email: 'Fernando' }} />
                    <UserInfo user={{}} />
                    <UserInfo user={{}} />
                    <UserInfo user={{}} />
                    <UserInfo user={{ nome: 'Lucas' }} />
                    <UserInfo user={{ nome: 'Natalia' }} />
            </Card>

            <Card titulo='repeat challenge' color='yellow' border='yellow'>
                    <TableProducts></TableProducts>
            </Card>

            <Card title = "Repetition" color="#457">
            
                <StudentsList></StudentsList>

            </Card>

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
    
