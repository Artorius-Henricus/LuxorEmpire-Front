import './index.scss';

export default function CompCarrinho() {
    return (
        <div className='produto'>
            <div id='imgtotal'>

                <input type="checkbox" /> 

                <div id='img'></div>

                <p>Nome Produto</p>

            </div>

                <p id='number'>R$ 000,00</p>

            <div className='quant'>
                <button className='block'> - </button>
                <h1 id='block2'> 0 </h1>
                <button className='block'> + </button>
            </div>

            <p id='number'>R$ 000,00</p>

            <button className='exclusao'>Excluir</button>
        </div>
    )
}