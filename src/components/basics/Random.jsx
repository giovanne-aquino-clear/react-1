import React from "react";

export default props =>{
    const Random = parseInt(Math.random() * (props.max - props.min)) + props.min
    return(
        <div>
            <h2> Random value</h2>
            <p><strong>Minimum value: </strong>{props.min}</p>
            <p><strong>Maximum value: </strong>{props.max}</p>
            <p><strong>Chosen value: </strong>{Random}</p>


        </div>
    )
}