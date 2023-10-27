import './index.scss';
import { useState, useEffect } from 'react';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

export default function PedidoProduto() {
    const [payment, setPayment] = useState(true);
    const [confirmed, setConfirmed] = useState(true);
    const [shipped, setShipped] = useState(false);
    const [delivered, setDelivered] = useState(false);


    return(
        <div className="pagina-produto-pedido">
            <CompCabecalho />
                <article className='corpo'>
                    <h1><b>Seu Pedido</b> &gt; Colar de Cristal</h1>
                    
                    <div className='groupinfo'>
                        <h1 id='infoglobal'>Informações Gerais</h1>

                        <div>
                            <section className='prodinfo'>
                                <img src="" alt="" />
                                <div className='infostext'>
                                    <section>
                                        <div>
                                            <h3>Pedido Realizado Em:</h3>
                                            <p>25 de Novembro de 2015</p>
                                        </div>
                                        <div>
                                            <h3>Forma de Pagamento:</h3>
                                            <p>Cartão de Crédito</p>
                                        </div>
                                        <div>
                                            <h3>Enviar Para:</h3>
                                            <p>Conjunto Habitacional Brigadeiro Faria Lima</p>
                                        </div>
                                    </section>
                                    
                                    <section>
                                        <div>
                                            <h3>Preço Unitário:</h3>
                                            <p>R$ 5000,00</p>
                                        </div>
                                        <div>
                                            <h3>Quantidade:</h3>
                                            <p>5 Unidades</p>
                                        </div>
                                        <div>
                                            <h3>Preço Total:</h3>
                                            <p>R$ 20.000,00</p>
                                        </div>
                                        <div>
                                            <h3>Nome do Produto:</h3>
                                            <p>Colar de Cristal</p>
                                        </div>
                                    </section>
                                </div>
                            </section>

                            <section className='infoentrega'>
                                    <div>
                                        <img src="/assets/images/produtos/cartao-de-credito1.svg" alt="Cartão de Crédito" />
                                        {payment &&
                                            <span className={`ball ${payment ? 'green' : 'gray'}`}></span>
                                        }
                                        {!payment &&
                                            <img src="/images/produtos/confirm.svg" alt="" className='img' />
                                        }
                                        <h1>Pagamento Efetuado</h1>
                                    </div>
                                    
                                    <span className={`line ${confirmed ? 'green' : 'gray'}`}></span>

                                    <div>
                                        <img src="/assets/images/produtos/compras.svg" alt="Sacola" />
                                        <span className={`ball ${confirmed ? 'green' : 'gray'}`}></span>
                                        <h1>Pedido Confirmado</h1>
                                    </div>

                                    <span className={`line ${shipped ? 'green' : 'gray'}`}></span>

                                    <div>
                                        <img src="/assets/images/produtos/caixa.svg" alt="Caixa" />
                                        <span className={`ball ${shipped ? 'green' : 'gray'}`}></span>
                                        <h1>Pedido Enviado</h1>
                                    </div>

                                    <span className={`line ${delivered ? 'green' : 'gray'}`}></span>
                                    
                                    <div>
                                        <img src="/assets/images/produtos/casa.svg" alt="Casa" />
                                        <span className={`ball ${delivered ? 'green' : 'gray'}`}></span>
                                        <h1>Pedido Entregue</h1>
                                    </div>
                            </section>
                        </div>
                    </div>
                </article>
            <CompRodape />
        </div>
    )
}