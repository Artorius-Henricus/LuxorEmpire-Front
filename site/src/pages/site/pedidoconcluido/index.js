import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import { Link, useNavigate } from 'react-router-dom';
import storage from "local-storage"
import { useState, useEffect } from 'react';

export default function PaginaPedidoConcluido() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
    }, [])

    return (
        <div className="pagina-pedido-concluido">
            <CompCabecalho />
                <h1>Compra Realizada!</h1>
                <img src="/assets/images/produtos/ProdutoConc.svg" alt="" />
                <h1>Código do Pedido: 4183hasd325ha</h1>

                <article className='pedido-infos'>
                    <h2>Informações do Pedido:</h2>

                    <article>
                        <section>
                            <div>
                                <h3>Pedido Realizado Em:</h3>
                                <p>25 de Novembro de 2015</p>
                            </div>
                            <div>
                                <h3>Enviar Para:</h3>
                                <p>Conjunto Habitacional Brigadeiro Faria Lima</p>
                            </div>
                            <div>
                                <h3>Status do Pedido:</h3>
                                <p>Aguardando Confirmação</p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Nome do Produto:</h3>
                                <p>Colar de Cristal</p>
                            </div>
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
                        </section>
                        <Link to='/pedidos'>Ver Tudo</Link>
                    </article>
                </article>
            <CompRodape />
        </div>
    )
}