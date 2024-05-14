import React from "react";
import './vista.css'

function Vista({len}) {
    return (
        <div className="vista">
            <h1>{len.nombre}</h1>
            <p>{len.informacion}</p>
            <img src={len.imagen} alt={len.imagen + "imagen"}/>
        </div>
    )
}
export default Vista;