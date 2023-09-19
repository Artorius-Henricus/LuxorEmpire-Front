import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';

export default function AdmPedidosConcluidos() {

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

            <article>
                <div><h1>PedidosConcluídos</h1></div>
                <table>
                    <thead>
                        <tr>
                            <th>Id <button><img src="" alt="" /></button></th>
                            <th>Nome</th>
                            <th>Valor Uni.</th>
                            <th>Total</th>
                            <th>Quant</th>
                            <th>Data Compra</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                </table>
            </article>
        </section>
    </div>
    )
}