import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import { Link, useNavigate } from 'react-router-dom';
import storage from "local-storage"
import { useState, useEffect } from 'react';

export default function PaginaPedidoConcluido() {

    return (
        <div className="pagina-pedido-concluido">
            <CompCabecalho />
                <h1>Compra Realizada!</h1>
                <img src="/assets/images/produtos/ProdutoConc.svg" alt="" />
                <h1>Pedido N°: 4183hasd325ha</h1>

                <article>
                    <h2>Informações do Pedido:</h2>

                    <section>
                        <section>
                            <div>
                                <h3>Pedido Realizado:</h3>
                                <p>25 de Novembro de 2015</p>
                            </div>

                            <div>
                                <h3>Enviar Para:</h3>
                                <p>Conjunto Habitacional Brigadeiro Faria Lima</p>
                            </div>

                            <div>
                                
                                <h3>Status do Pedido/:</h3>
                                <p>25 de Novembro de 2015</p>
                            </div>
                        </section>
                        <section>

                        </section>
                    </section>
                </article>
            <CompRodape />
        </div>
    )
}