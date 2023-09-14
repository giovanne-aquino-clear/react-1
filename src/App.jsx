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
import DirectFather from './components/communication/DirectFather';
import IndirectFather from './components/communication/IndirectFather';


export default _ =>

    <div className = "App">
        <h1>Fundamentos React</h1>

        <div className="Cards"> 
        
        <Card titulo='#10 indirect communication '>
                    <IndirectFather></IndirectFather>
                </Card>

        <Card title='#09  direct communication'>
                    <DirectFather></DirectFather>
                </Card>

        <Card title='#08  Renderização condicional' color="#982395">
                    <UserInfo user={{ nome: 'Fernando' }} />
                    <UserInfo user={{ nome: 'Julia' }} />
                    <UserInfo user={{ email: 'Fernando' }} />
                    <UserInfo user={{}} />
                    <UserInfo user={{}} />
                    <UserInfo user={{}} />
                    <UserInfo user={{ nome: 'Lucas' }} />
                    <UserInfo user={{ nome: 'Natalia' }} />
            </Card>

            <Card title='#07 repeat challenge' color='yellow' border='yellow'>
                    <TableProducts></TableProducts>
            </Card>

            <Card title = "#06 Repetition" color="#457">
            
                <StudentsList></StudentsList>

            </Card>

            <Card title = "#05 component with children" color="#010">
                <Family surname = "Aquino"> 
                    <FamilyMember name ="Giovanne" />
                    <FamilyMember name ="Ana" />
                    <FamilyMember name ="Shiryuu" />
                </Family>
            </Card>
         
            <Card title = "#04 random challenge" color="#010">
                <Random min={1} max={60}/>
            </Card>  

            <Card title = "#03 string" color="#200">
                Olá React!
            </Card> 

            <Card title = "#02 First parameter" color="#003">
                <First></First>      
            </Card> 
                
            <Card title =  "#01 Student status" color="#404">
            <WithParameter
                student="Giovanne Aquino"
                note= {10} />       
            </Card> 
        </div>

    </div>
    
