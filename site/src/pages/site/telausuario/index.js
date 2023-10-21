import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';

import storage from "local-storage"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PaginaTelaUsuario(){

    function Deslogar() {
        storage.remove('user-info');
        navigate('/');
    }

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
                                <p>Email</p>
                                <p>Número de Telefone</p>
                                <p>Data de Nascimento</p>
                            </div>
                            <div>
                                <input type='text' value={infoUser.nome}/>
                                <input type='text' value={infoUser.cpf}/>
                                <input type='text' value={infoUser.email}/>
                                <input type='text' value={infoUser.telefone}/>
                                <input type='date' value={infoUser.nascimento}/>
                            </div>
                        </div>
                        <div id='btsvsc'>
                            <button>Salvar Alterações</button>
                            <button id='sairbt' onClick={Deslogar}>Sair da Conta</button>
                        </div>
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