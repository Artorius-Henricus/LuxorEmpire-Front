import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import {Link} from 'react-router-dom'

export default function CadastrarCartao() {

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

                    <section>
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
                        <Link to='/enderecos' id='btreturn'>Retornar</Link>
                    </div>  
                </article>
            </div>
            <CompRodape />
        </div>
    )
}