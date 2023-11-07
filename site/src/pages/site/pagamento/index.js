import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import { Link } from 'react-router-dom';
import Produto from '../../../components/site/compras-pagamento';

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Pagamento() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
    }, [])

    return(
        <div className='pag-pagamento'>
            <CompCabecalho />
            <div className='conteiner'>
                <div className='left_pag'>
                    <div className='endereco'>
                        <h3><b>1. Endereço</b></h3>

                        <div id='texto'>
                            <p >
                            Arthur Henrique Alves Alencar
                            </p>

                            <p >
                            Rua tchuros bangos tchruos bagos
                            </p>

                            <p >
                            Casa Rua Mendes
                            </p>

                            <p >
                            São Paulo, Sp 40028922
                            </p>
                        </div>
                        <Link to="" id='botao'>Alterar</Link>
                    </div>
                    <div className='metodo'>
                        <h3><b>2. Método de Pagamento</b></h3>
                        
                        <div className='cart'><img src='/assets/images/carrinho/cardzin.png' alt='' /><p id='texto'>Informações Cartão de Crédito</p></div>

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
                            <div className='dinheiro'>
                                <p>Itens:</p>
                                <p>R$ 0,00</p>
                            </div>
                            <div className='dinheiro'>
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