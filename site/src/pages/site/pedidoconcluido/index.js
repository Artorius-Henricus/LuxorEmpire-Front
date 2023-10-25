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
                        
                    </section>
                </article>
            <CompRodape />
        </div>
    )
}