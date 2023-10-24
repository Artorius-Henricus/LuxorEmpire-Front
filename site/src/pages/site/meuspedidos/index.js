import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import CompUserMenu from '../../../components/site/usermenu';

import { Link } from 'react-router-dom';

export default function PaginaPedidos() {

    return(
        <div className='pagina-pedidos'>
            <CompCabecalho />
                <article className='corp'>
                    <CompUserMenu />

                    <section>
                        <h1>Meus Pedidos</h1>

                        <article className='pedidosbox'>
                            <img src="" alt="Imagem" />

                            <div>
                                <h2>Pedidos Realizado:</h2>
                                <p>25 de Novembro de 2015</p>
                            </div>

                            <div>
                                <h2>Enviar Para:</h2>
                                <p>Conjunto Habitacional Brigadeiro Faria Lima</p>
                            </div>

                            <div>
                                <h2>Total:</h2>
                                <p>R$5000</p>
                            </div>

                            <div>
                                <h2>Status:</h2>
                                <p>A Caminho</p>
                            </div>

                            <div>
                                <h2>Pedido N°:</h2>
                                <Link to=''>Detalhes do Pedido</Link>
                            </div>
                        </article>
                    </section>
                </article>
            <CompRodape />
        </div>
    )
}