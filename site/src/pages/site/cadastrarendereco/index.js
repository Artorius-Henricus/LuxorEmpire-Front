import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import {Link} from 'react-router-dom'

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CadastrarEndereco() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
    }, [])

    return(
        <div className='pagina-cadastrar-endereco'>
            <CompCabecalho />
            <div className='corp'>
                <article className='inputs'>
                    <h1>Adicionar um novo endereço</h1>

                    <div>
                        <label>País/Região</label>
                        <select name="paises" id="paises">
                            <option value="Brasil">Brasil</option>
                        </select>
                    </div>

                    <div>
                        <label>Nome</label>
                        <input type='text' />
                    </div>

                    <div>
                        <label>Cep</label>
                        <input type='text' />
                    </div>

                    <div>
                        <label>Endereço</label>
                        <input type='text' />
                    </div>

                    <div>
                        <label>Número da Residência</label>
                        <input type='text' />
                    </div>

                    <div>
                        <label>Bairro</label>
                        <input type='text' placeholder={'Insira o CEP acima para preencher o bairro'} className='unaltera' readOnly/>
                    </div>
                    
                    <div>
                        <label>Cidade</label>
                        <input type='text' placeholder={'Insira o CEP acima para preencher a cidade'} className='unaltera' readOnly/>
                    </div>

                    <div>
                        <label>Estado</label>
                        <input type='text' placeholder={'Insira o CEP acima para preencher o estado'} className='unaltera' readOnly/>
                    </div>
                    
                    <div className='buttons'>
                        <button>Salvar Endereço</button>
                        <Link to='/enderecos' id='btreturn'>Retornar</Link>
                    </div>
                </article>
            </div>
            <CompRodape />
        </div>
    )
}