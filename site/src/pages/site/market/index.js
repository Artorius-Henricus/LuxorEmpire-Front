import './index.scss'
import CompCabecalho from '../../../components/site/cabecalho'
import CompIndicacoes from '../../../components/site/indicacoes-produto';
import CompRodape from '../../../components/site/rodape';
export default function Paginamarket () {
    return(
        <div className='pagina-market'>
            <CompCabecalho></CompCabecalho>
            <img id='banner' src='/assets/images/market-page/Rolex Luxor 2.svg' />        
            <div className='tudo'>
                <div className='esq'>
                    <div className='agrupamento'>
                         <h2>Categoria</h2>
                         <div className='types'>
                            <input type='checkbox' />
                            <p>Anéis</p>
                         </div>
                    
                        <div className='types'>
                            <input type='checkbox' />
                            <p>Brincos</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Colares</p>
                         </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Pingentes</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Pulseiras</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Relógios</p>
                        </div>
                    </div>

                    <div className='agrupamento'>
                        <h2>Material</h2>
                        <div className='types'>
                            <input type='checkbox' />
                            <p>Ouro</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Prata</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Titânio</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Aço inoxidável</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Couro</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Brilhantes</p>
                        </div>
                    </div>

                    <div className='agrupamento'>
                        <h2>Gema</h2>
                        <div className='types'>
                            <input type='checkbox' />
                            <p>Diamante</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Esmeralda</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Rubi</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Safira</p>
                        </div>

                        <div className='types'>
                            <input type='checkbox' />
                            <p>Pérola</p>
                        </div>
                    </div>
                </div>

                <div className='mid'>
                    <div className='content'>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                    </div>

                    <div className='content'>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                    </div>

                    <div className='content'>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                        <CompIndicacoes/>
                    </div>
                </div>
                
            </div> 
            <div className='botão'>
                <button id='button'>Descubra Mais</button> 
            </div>
            

            <CompRodape/>
        </div>
    )
}