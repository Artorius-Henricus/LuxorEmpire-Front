import './index.scss';

export default function CompCarrinho() {
    return (
        <div className='produto'>
            <div id='imgtotal'>
                <div id='img'></div>

                <p>Nome Produto</p>
            </div>

                <p>R$ 000,00</p>

            <div className='quant'>
                <div> + </div>
                <div> 0 </div>
                <div> - </div>
            </div>

            <p>R$ 000,00</p>

            <button className='exclusao'>Excluir</button>
        </div>
    )
}