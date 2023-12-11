import React, { useState } from "react";
import { Perguntas } from "../../types";
import './styles.scss'






export type Props = Perguntas;

function SwiperItem( { pergunta } : Props) {
    
    
    return (
        <li className="estiloBox">          
            <h1> { pergunta } </h1>
            

        </li>
        
    )
}

export default SwiperItem;