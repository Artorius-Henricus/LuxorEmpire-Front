import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import {Link} from 'react-router-dom'

export default function CadastrarEndereco() {

    return(
        <div className='pagina-cadastrar-endereco'>
            <CompCabecalho />
            <div className='corp'>
                <article className='inputs'>
                    <h1>Adicionar um novo endereço</h1>

                    <div>
                        <label>País/Região</label>
                        <select>
                            <option>Selecione um País</option>
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
                        <input type='text' />
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