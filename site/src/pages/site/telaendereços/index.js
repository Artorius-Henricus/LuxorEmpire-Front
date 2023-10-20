import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';
import {Link} from 'react-router-dom'

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function PaginaCartoes() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
    }, [])

    return(
        <div className='pagina-enderecos'>
            <CompCabecalho />
            <div className='corp'>
                <CompUserMenu />
                <article>
                    <section className='leftside'>
                        <h1>Seus Endereços</h1>

                        <div className='endblock'>
                            <h1>Arthur Silva Alves</h1>
                            <h3>Brasil</h3>
                            <h3>04840-650</h3>
                            <h3>Rua Pontes Gestal, 93</h3>
                            <h3>Conjunto Habitacional Brigadeiro Faria Lima</h3>
                            <h3>São Paulo, SP</h3>
                            <button><img src="/assets/images/cartoes/lixeira-de-reciclagem.svg" alt="IconDeletar" /></button>
                        </div>
                    </section>

                    <section className='rightside'>
                        <Link to='/enderecos/cadastro'>Adicionar Endereço</Link >

                        <div className='selecendblock'>
                            <h1>Arthur Silva Alves</h1>
                            <h3>Brasil</h3>
                            <h3>04840-650</h3>
                            <h3>Rua Pontes Gestal, 93</h3>
                            <h3>Conjunto Habitacional Brigadeiro Faria Lima</h3>
                            <h3>São Paulo, SP</h3>
                            <button>Editar</button>
                        </div>
                    </section>
                </article>
            </div>
            <CompRodape />
        </div>
    )
}