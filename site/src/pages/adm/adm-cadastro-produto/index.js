import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';

export default function AdmCadastroProduto() {

    return (
        <div className="adm-cadastrar-produto">
            <CompMenuBar />

            <article className='corp'>
                <h1>Pedidos Em Andamento</h1>

                <div className='menus'>
                    <div>
                        <div className='blockdiv'>
                            <label>Tipo Produto</label>
                            <select>
                                <option>Selecione o Tipo</option>
                                <option>Selecione o Tipo</option>
                                <option>Selecione o Tipo</option>
                            </select>
                        </div>
                        <div className='blockdiv'>
                            <label>Gênero</label>
                            <select>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <div className='blockdiv'>
                            <label>Nome Produto</label>
                            <input type='text'/>
                        </div>
                        <div className='blockdiv'>
                            <label>Preço</label>
                            <input type='text'/>
                        </div>
                    </div>

                    <div>
                        <div className='blockdiv'>
                            <label>Material</label>
                            <input type='text'/>
                        </div>
                        <div className='blockdiv'>
                            <label>Gema</label>
                            <input type='text'/>
                        </div>
                    </div>

                    <div className='blockdiv'>
                        <label>Descrição</label>
                        <textarea></textarea>
                    </div>

                    <button id='btimg'>Enviar Imagens</button>
                    
                    <div id='container-imagens'>
                        <div id='imagens'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <button id='btcadastr'>Cadastrar</button>
                </div>
            </article>
        </div>
    )
}