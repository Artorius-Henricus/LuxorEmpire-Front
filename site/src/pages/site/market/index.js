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
        const command = await axios.get("http://129.148.42.252:5019/produtos/all");
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

    const [categoriaSelecionado, setCategoriaSelecionado] = useState(null);
    const [materialSelecionado, setMaterialSelecionado] = useState(null);
    const [gemaSelecionado, setGemaSelecionado] = useState(null);

    async function Buscar() {
        try {
            let url = "http://129.148.42.252:5019/produtos/all";
            

            let value = 0;
            if (categoriaSelecionado != null){
                value += 1;
                url += `?categoria=${categoriaSelecionado}`
            }
            
            if (materialSelecionado != null){
                if (value > 0){
                    url += `&material=${materialSelecionado}`
                }
                else{
                    value += 1
                    url += `?material=${materialSelecionado}`
                }
            }
            
            if (gemaSelecionado != null){
                if (value > 0)
                {
                    url += `&gema=${gemaSelecionado}`
                }
                else{
                    url += `?gema=${gemaSelecionado}`
                }
            }

            const command = await axios.get(url)
            setProdutos(command.data);
        } catch (error) {
            ListarProdutos();
        }
    }

    async function BuscarPesquisa(pesquisa) {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/produtos/find?name=${pesquisa}`);
            setProdutos(command.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='pagina-market'>
            <CompCabecalho Produtos={BuscarPesquisa}/>

            <img id='banner' src='/assets/images/market-page/Rolex Luxor 2.svg' />   
            <div className='tudo'>
                <div className='esq'>
                    <div className='agrupamento'>
                        <button onClick={Buscar} id='btcarregar'>Carregar</button>
                        <div className='filtragem'>
                            <select value={categoriaSelecionado} onChange={e => setCategoriaSelecionado(e.target.value)}>
                                <option value="Anel">Anel</option>
                                <option value="Brinco">Brinco</option>
                                <option value="Colar">Colar</option>
                                <option value="Pingete">Pingente</option>
                                <option value="Pulseira">Pulseira</option>
                                <option value="Relógio">Relógio</option>
                            </select>
                        </div>
                    </div>

                    <div className='agrupamento'>
                        <h2>Material</h2>
                        <div className='filtragem'>
                            <select  value={materialSelecionado} onChange={e => setMaterialSelecionado(e.target.value)}>
                                <option value="Ouro">Ouro</option>
                                <option value="Prata">Prata</option>
                                <option value="Titânio">Titânio</option>
                                <option value="Aço Inoxidável">Aço Inoxidável</option>
                                <option value="Couro">Couro</option>
                                <option value="Brilhantes">Brilhantes </option>
                            </select>
                        </div>
                    </div>

                    <div className='agrupamento'>
                        <h2>Gema</h2>
                        <div className='filtragem'>
                            <select value={gemaSelecionado} onChange={e => setGemaSelecionado(e.target.value)}>
                                <option value="Diamente">Diamante</option>
                                <option value="Esmeralda">Esmeralda</option>
                                <option value="Rubi">Rubi</option>
                                <option value="Safira">Safira</option>
                                <option value="Pérola">Pérola </option>
                            </select>
                        </div>
                    </div>
                </div>
  
                <div style={Mid}>
                    <div className='dir'>
                        <div className='filtragem'>
                            <select>
                                <option>Destaque</option> 
                                <option>Preço: Menor ao Maior</option>
                                <option>Preço: Maior ao Menor</option>
                                <option>A - Z</option>
                                <option>Z - A</option>
                                <option>Mais Novo ao Mais Antigo</option>
                                <option>Mais Antigo ao Mais Novo</option>
                            </select>
                        </div>
                    </div>

                    {produtos.length === 0 ? (
                        <div className='content'>
                            Carregando Produtos
                            <img src="https://i.gifer.com/ZKZg.gif" alt="" />
                        </div>
                    ) : (
                        produtos.map((item, index) => {
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
                        })
                    )}
                </div>
                
            </div> 
            <div className='botão'>
                <button id='button' onClick={aumentarAltura}>Descubra Mais</button> 
            </div>

            <CompRodape/>
        </div>
    )
}