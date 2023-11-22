import "./index.scss"

export default function CompIndicacoes(props) {

    return (
        <div className="main">
            <div className="sub"><img src={'http://129.148.42.252:5019/'+props.imagem} alt="" /></div>
            <p id="height">{props.nome}</p>
            <p id="dark text">R$ {props.preco}</p>
            <p id="text">12x R$ 00,00</p>
        </div>
    )
}