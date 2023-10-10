import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import CompIndicacoes from '../../../components/site/indicacoes-produto';

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
                    <div className='dir-linha-button'>
                        <div className='dir-linha-main'>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                            
                        <button id='but-dir'>Adicionar ao Carrinho</button>
                    </div>

                    <div className='dir-linha-img'>
                        <img src='/assets/images/produtos/Caixa 1.svg'/>
                        <p>Prazo de produção:</p>
                        <p className='txt-light'>2 dias úteis</p>
                    </div>

                    <div className='dir-linha-seguranca'>
                        <img src='/assets/images/produtos/check-mark-icon-vector-removebg-preview 1.svg' />
                        <div className='txt-column'>
                            <p>Certificado de Garantia e Autenticidade</p>
                            <p className='txt-light'>Todas as Joias acompanham certificado <br/>de garantia e autenticidade do Ouro 18k, <br/> Diamantes e Pedras Preciosas.</p>
                        </div>  
                    </div>
                </div>
            </section>
            <div className='sec-mid'>
                <div className='descrição'>
                    <div id='linha'></div>
                    <p>Descrição</p>
                    <div id='linha'></div>
                </div>
                <div className='topicos'>
                    <b>・Material:</b>
                    <b>・Gema:</b>
                    <b>・Categoria:</b>
                    <b>・Gênero:</b>
                </div>
               
            </div>

            <div className='sec-mid-bottom'>
                <div className='separador'>
                    <div id='linha'></div>
                    <p>Você Pode Gostar</p>
                    <div id='linha'></div> 
                </div>
            </div>

            <div className='sec-bottom'>
                <CompIndicacoes />
            </div>

            <CompRodape />
        </div>
    )
}

