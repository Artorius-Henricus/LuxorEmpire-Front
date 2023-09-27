import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';

export default function Paginaproduto() {

    return(
        <div className='pagina-produto'>
            <CompCabecalho></CompCabecalho>
            <section className='sec1'>
                <div className='esq'>
                   
                    <div className='esq-imgs'>
                        <div></div>
                    </div>

                    <div className='esq-imgs'>
                        <div></div>
                    </div>

                    <div className='esq-imgs'>
                        <div></div>
                    </div>

                    <div className='esq-imgs'>
                        <div></div>
                    </div>
                </div>
                <div className='mid'>
                    <div></div>
                </div>

                <div className='dir'>
                    <h1>Nome Produto</h1>
                    <div className='separador'></div>
                    <h2>R$ 000,00</h2>
                    <div className='dir-linha'>
                        <img src='/assets/images/produtos/Cartão Icon.svg' />
                        <h2>10x de R$valor sem juros</h2>
                    </div>
                    <div className='dir-linha2'>
                        <div className='dir-linha-main'>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                            
                        <button id='but-dir'>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </section>
        </div>
    )
}