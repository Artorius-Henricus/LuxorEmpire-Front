import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import {Link} from 'react-router-dom'

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CadastrarCartao() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
    }, [])

    return(
        <div className='pagina-cadastrar-cartao'>
            <CompCabecalho />
            <div className='corp'>
                <article className='inputs'>
                    <h1>Adicionar um novo cartão</h1>

                    <div>
                        <label>Número do Cartão</label>
                        <input type='text' />
                    </div>

                    <div>
                        <label>Nome do Cartão</label>
                        <input type='text' />
                    </div>

                    <section className='doubleinpt'>
                        <div>
                            <label>Endereço</label>
                            <input type='text' />
                        </div>

                        <div>
                            <label>Número da Residência</label>
                            <input type='text' />
                        </div>
                    </section>
                    <div className='buttons'>
                        <button>Salvar Endereço</button>
                        <Link to='/cartoes' id='btreturn'>Retornar</Link>
                    </div>  
                </article>
            </div>
            <CompRodape />
        </div>
    )
}