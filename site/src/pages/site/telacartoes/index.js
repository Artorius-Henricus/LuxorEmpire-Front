import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';
import {Link} from 'react-router-dom'

export default function PaginaCartoes() {

    return(
        <div className='pagina-cartoes'>
            <CompCabecalho />
            <div className='corp'>
                <CompUserMenu />
                <article>
                    <section className='leftside'>
                        <h1>Seus Cartões</h1>

                        <div className='cartaoblock'>
                            <div>
                                <img src="/assets/images/cartoes/913Au7zc4eL.svg" alt="" id='cartaoimg'/>
                                <div id='textbox'>
                                    <h1>Itaucard Mastercard Default</h1>
                                    <h3>Cartão de crédito terminando em •••• 0000</h3>
                                </div>
                            </div>
                            <button><img src="/assets/images/cartoes/lixeira-de-reciclagem.svg" alt="IconDeletar" /></button>
                        </div>
                    </section>

                    <section className='rightside'>
                        <Link to='/cartoes/cadastro'>Adicionar Cartão</Link>

                        <div className='cartaoselected'>
                            <img src="/assets/images/cartoes/913Au7zc4eL.svg" alt="" id='cartaoimg'/>
                            <div>
                                <h1>Itaucard Mastercard Default</h1>
                                <h3>Cartão de crédito terminando em •••• 0000</h3>
                                <button>Editar</button>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
            <CompRodape />
        </div>
    )
}