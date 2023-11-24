import "./index.scss"

export default function CompIndicacoes(props) {
    const limite = 30;

    return (
        <div className="main">
            <div className="sub"><img src={'http://129.148.42.252:5019/'+props.imagem} alt="" /></div>
            <p id="height">{props.nome.length > limite ? `${props.nome.substring(0, limite)}...` : props.nome}</p>
            <p id="darktext">R$ {props.preco}</p>
            <p id="text">12x R$ 00,00</p>
        </div>
    )
}