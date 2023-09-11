import React from "react";
import '../../data/student'

export default (props) =>{
    
    const li1 = (
        <li>
            {alunos[0].id} {alunos[0].nome} -> {alunos[0].nota}
        </li>
    );

    const lis = alunos.map((aluno) => {
        return(
            {aluno.id}) {aluno.nome} -> {aluno.nota}

        )};

    return (
    <div>
        <ul>
        {lis}
        
        </ul>
    </div>
    );
};   