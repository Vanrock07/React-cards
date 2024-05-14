
import "./card.css" 
import {Link} from 'react-router-dom'
function Card(props){

    return(

        <div className = "card">
            <Link to = {props.titulo}>
            <h2>{props.titulo}</h2>
            </Link>
            <p>{props.descripcion}</p>

        </div>
    )
}
export default Card;