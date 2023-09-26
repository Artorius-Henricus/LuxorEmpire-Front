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
                <article id='bodycenter'>
                    <div>
                        <h1>Endereços</h1>
                        <Link to='' id='btadd'>Adicionar Cartão</Link>
                    </div>
                    <section id='leftside'>

                        <div className='cartaoblock'>
                            <div>
                                <img src="/assets/images/cartoes/913Au7zc4eL.svg" alt="" id='cartaoimg'/>
                                <div>
                                    <h1>Nome Cartão</h1>
                                    <h3>Cartão Terminado Em</h3>
                                </div>
                            </div>
                            <button><img src="/assets/images/cartoes/lixeira-de-reciclagem.svg" alt="IconDeletar" /></button>
                        </div>
                    </section>
                </article>
            </div>
            <CompRodape />
        </div>
    )
}