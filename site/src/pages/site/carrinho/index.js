import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import { Link } from 'react-router-dom';
import Produto from '../../../components/site/compras-carrinho';

export default function Carrinho() {

    return(
        <div className='pag-carrinho'>
            <CompCabecalho />
            <div className='conteiner'>
            <div className='left_pag'>
                <div className='endereco'>
                    <h3><b>1. Endereço</b></h3>

                    <p id='texto'>
                    Arthur Henrique Alves Alencar<br/>
                    Rua tchuros bangos tchruos bagos<br/>
                    Casa Rua Mendes<br/>
                    São Paulo, Sp 40028922
                    </p>

                    <Link to="" id='botao'>Alterar</Link>
                </div>
                <div className='metodo'>
                    <h3><b>2. Método de Pagamento</b></h3>
                    
                    <div className='cart'><img src='/assets/images/carrinho/cartao.png' alt='' /><p id='texto'>Informações Cartão de Crédito</p></div>

                    <Link to="" id='botao'>Alterar</Link>
                </div>
                <h3 id='h3'><b>3. Revisar Itens</b></h3>

                <div className='Produtos'>
                    <Produto/>
                </div>

                <div className='finalizar'>
                    <Link to="" id='finalizacao'><b> Finalizar Pedido </b></Link>

                    <h3><b>Total do Pedido: R$ 30,00</b></h3>
                </div>
            </div>
            <div className='right_pag'>
                <div className='total'>
                    <div className='finalizar'>
                        <Link to="" id='finalizacao'><b> Finalizar Pedido </b></Link>
                    </div>

                    <div id='resumo'>
                        <h3><b>Resumo do Pedido</b></h3>
                        <div id='dinheiro'>
                            <p>Itens:</p>
                            <p>R$ 0,00</p>
                        </div>
                        <div id='dinheiro'>
                            <p>Frete:</p>
                            <p>R$ 0,00</p>
                        </div>
                    </div>

                    <div id='total'>
                        <h3><b>Total do Pedido: R$ 30,00</b></h3>
                    </div>
                </div>
            </div>
        </div>
            <CompRodape />
        </div>

    )
};