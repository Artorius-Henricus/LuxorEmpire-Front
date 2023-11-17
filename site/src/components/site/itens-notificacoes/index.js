import './index.scss';

export default function ItensNotificacoes1(props){
    return(
        <div className='item'>
            <h1>Aviso!</h1>

            <p>{props.notificacao}</p>

            <b>Pedido: {props.pedido}</b>
        </div>
    )
}