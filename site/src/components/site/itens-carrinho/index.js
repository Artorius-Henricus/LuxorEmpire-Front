import './index.scss';

export default function CompCarrinho() {
    return (
        <div className='produto'>
            <div id='imgtotal'>

                {/* <input type="checkbox" id='im'/> */}

                <div id='img'></div>

                <p>Nome Produto</p>

            </div>

                <p id='number'>R$ 000,00</p>

            <div className='quant'>
                <button> + </button>
                <h1> 0 </h1>
                <button> - </button>
            </div>

            <p id='number'>R$ 000,00</p>

            <button className='exclusao'>Excluir</button>
        </div>
    )
}