/*
Na comunicação direta um componente passa dados para o outro diretamente na declaração dele
*/
import React from "react";

import DirectSon from "./DirectSon";

export default props => {

    return(
        <div>

<DirectSon nome="Lucas" idade={20} nerd={true}></DirectSon>
<DirectSon nome="GUilherme" idade={21} nerd={false}></DirectSon>
        </div>
    )
}