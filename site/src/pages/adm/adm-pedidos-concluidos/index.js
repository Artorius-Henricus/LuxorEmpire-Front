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
        </section>
    </div>
    )
}