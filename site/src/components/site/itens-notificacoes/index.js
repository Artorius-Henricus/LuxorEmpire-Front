import { Link } from 'react-router-dom';
import './index.scss';

export default function ItensNotificacoes1(props){
    return(
        <div className='item'>
            <h1>Aviso!</h1>

            <p>{props.notificacao}</p>

            <Link to={`/pedido/${props.pedido}`}><b>Pedido: {props.pedido}</b></Link>
        </div>
    )
}