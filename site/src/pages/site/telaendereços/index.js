import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';

export default function PaginaEnderecos() {

    return(
        <div className='pagina-enderecos'>
            <CompCabecalho />
            <div className='corp'>
                <CompUserMenu />
                <article id='bodycenter'>
                    <div>
                        <h1>Endereços</h1>
                        <button id='btadd'>Adicionar Endereço</button>
                    </div>
                    <section id='leftside'>

                        <div>
                            <h1>Endereço do Thur</h1>
                            <p>ArthurZera</p>
                            <p>Rua Barrinha</p>
                            <p>Conjunto Habitacional Brigadeiro Faria Lima</p>
                            <p>São Paulo</p>
                            <p>CEP</p>
                            <button><img src="/assets/images/cartoes/lixeira-de-reciclagem.svg" alt="IconDeletar" /></button>
                        </div>
                    </section>
                </article>
            </div>
            <CompRodape />
        </div>
    )
}