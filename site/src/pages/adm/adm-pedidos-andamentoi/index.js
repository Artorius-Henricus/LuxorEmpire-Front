import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';

export default function AdmPedidosAndamento() {

    return(
    <div className="adm-pagina-pedidos-concluidos">
        <CompMenuBar />

        <section className='corp'>
            <h1>Pedidos Em Andamento</h1>

            <article id='search'>
                <select>
                    <option>Selecione o Filtro</option>
                </select>
                <input type='text' />
                <button><img src="/assets/images/adm/1617460.svg" alt="" /></button>
            </article>

            <article id='tabela'>
                <h1>Pedidos</h1>
                <table>
                    <thead className='tablehead'>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Valor Uni.</th>
                            <th>Total</th>
                            <th>Quant</th>
                            <th>Data Compra</th>
                            <th>Previsão Entrega</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='tablebody'>
                        <tr>
                            <td>1</td>
                            <td>Brincos de Cristal</td>
                            <td>54</td>
                            <td>54</td>
                            <td>1</td>
                            <td>12390/*123/123</td>
                            <td>12390/*123/123</td>
                            <td>Vendido</td>
                            <td><button><img src="/assets/images/adm/Pencil.svg" alt="" /></button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Brincos de Cristal</td>
                            <td>54</td>
                            <td>54</td>
                            <td>1</td>
                            <td>12390/*123/123</td>
                            <td>12390/*123/123</td>
                            <td>Vendido</td>
                            <td><button><img src="/assets/images/adm/Pencil.svg" alt="" /></button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </article>
        </section>
    </div>
    )
}