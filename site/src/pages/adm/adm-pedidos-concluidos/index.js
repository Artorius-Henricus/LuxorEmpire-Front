import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';
import storage from "local-storage"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdmPedidosConcluidos() {

    const [produtos, setProduto] = useState([]);


    return(
    <div className="adm-pagina-pedidos-concluidos">
        <CompMenuBar />

        <section className='corp'>
            <h1>Pedidos Concluídos</h1>

            <article id='search'>
                <select>
                    <option>Selecione o Filtro</option>
                </select>
                <input type='text' />
                <button><img src="/assets/images/adm/1617460.svg" alt="" /></button>
            </article>

            <article id='tabela'>
                <h1>Pedidos Concluídos</h1>
                <table>
                    <thead className='tablehead'>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Valor Uni.</th>
                            <th>Total</th>
                            <th>Quant</th>
                            <th>Data Compra</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='tablebody'>
                        {produtos.map(item => 
                        <tr>
                            <td>{item.id_produto}</td>
                            <td>{item.nm_produto}</td>
                            <td>{item.nr_preco}</td>
                            <td>"total"</td>
                            <td>"quantidade"</td>
                            <td>"A caminho"</td>
                            <td>"Status"</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </article>
        </section>
    </div>
    )
}