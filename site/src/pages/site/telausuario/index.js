import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';

export default function PaginaTelaUsuario(){

    return(
        <div className='pagina-tela-usuario'>
            <CompCabecalho />

            <section className='corp'>
                <CompUserMenu />

                <article className='usermenusprofile'>
                    <section id='sideleft'>
                        <h1>Meu Perfil</h1>
                        <div id='blocks'>
                            <div>
                                <p>Nome de Usuário</p>
                                <p>CPF</p>
                                <p>Nome</p>
                                <p>Email</p>
                                <p>Número de Telefone</p>
                                <p>Data de Nascimento</p>
                            </div>
                            <div>
                                <input type='text'/>
                                <input type='text'/>
                                <input type='text'/>
                                <input type='text'/>
                                <input type='text'/>
                                <input type='date'/>
                            </div>
                        </div>
                        <button>Salvar Alterações</button>
                    </section>

                    <section id='sideright'>
                        <img src="" alt="UserIcon" />
                        <button>Selecionar uma Imagem</button>
                    </section>
                </article>
            </section>
            <CompRodape />
        </div>
    )
}