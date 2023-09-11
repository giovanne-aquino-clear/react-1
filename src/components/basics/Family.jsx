import React from "react";
import FamilyMembro from "./FamilyMember";

export default props =>{
    return(
        <div>
            <FamilyMembro name ="Giovanne" {...props}/>
            <FamilyMembro name = "Ana Claudia" {...props}/>
            <FamilyMembro name = "Shiryuu" surname = "Gato"/>

        </div>
    )
}