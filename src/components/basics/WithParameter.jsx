import React from "react"
export default function WithParameter(props){
    const status = props.nota >= 7 ? 'passed' : 'disapproved'

    return(
        <div>
            <h2>{props.student}</h2>
            <p>
            {status} with media <strong>{props.note} </strong>
            
            </p>
        </div>
    )
}