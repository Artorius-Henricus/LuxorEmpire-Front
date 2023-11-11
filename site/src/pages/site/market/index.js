import './index.scss'
import CompCabecalho from '../../../components/site/cabecalho'
import CompIndicacoes from '../../../components/site/indicacoes-produto';
import CompRodape from '../../../components/site/rodape';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Paginamarket () {
    const [produtos, setProdutos] = useState([]);

    async function ListarProdutos() {
        const command = await axios.get("http://localhost:5000/produtos/all");
        setProdutos(command.data);
    }

    useEffect(() => {
        ListarProdutos();
    }, 
    [])

    const [altura, setAltura] = useState(1105);

    function aumentarAltura(){
        setAltura(altura + 800);
    };

    const Mid = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '1600px',
        maxHeight: `${altura}px`,
        overflow: 'hidden',
        gap: '40px',
        marginTop: '100px',
      };

    return(
        <div className='pagina-market'>
            <CompCabecalho />
            <img id='banner' src='/assets/images/market-page/Rolex Luxor 2.svg' />   
            <div className='tudo'>
                <div className='esq'>
                    <button onClick={ListarProdutos}>Clickque</button>
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


                
                <div style={Mid}>
                    <div className='dir'>
                        <div className='filtragem'>
                            <select>
                                <option>Destaque       <img src='/assets/images/market-page/img-destaque-select.svg' /></option>
                                <option>Preço: Menor ao Maior</option>
                                <option>Preço: Maior ao Menor</option>
                                <option>A - Z</option>
                                <option>Z - A</option>
                                <option>Mais Novo ao Mais Antigo</option>
                                <option>Mais Antigo ao Mais Novo</option>
{/* 
                                <optgroup label="Swedish Cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                </optgroup>
                                 */}
                            </select>

                        </div>
                    </div>
                    
                    {produtos.map((item, index) => {
                    if (index % 4 === 0) {
                        const grupo = produtos.slice(index, index + 4);

                        return (
                        <div className='content' key={index}>
                            {grupo.map((produto) => (
                            <Link key={produto.Id} to={`/produto/${produto.Id}`}>
                                <CompIndicacoes
                                nome={produto.Nome}
                                preco={produto.Preço}
                                imagem={produto.Capa}
                                />
                            </Link>
                            ))}
                        </div>
                        );
                    }
                    return null; // Retorna null para os itens que já foram renderizados no grupo anterior
                    })}
                </div>
                
            </div> 
            <div className='botão'>
                <button id='button' onClick={aumentarAltura}>Descubra Mais</button> 
            </div>

            <CompRodape/>
        </div>
    )
}