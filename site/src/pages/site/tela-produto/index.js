import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import CompIndicacoes from '../../../components/site/indicacoes-produto';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import storage from "local-storage"
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Paginaproduto() {
    const [quantidade, setQuantidade] = useState(1);

    const [userInfo, setUserInfo] = useState('');

    const [produtos, setProdutos] = useState([]);

    async function ListarProdutos() {
        const command = await axios.get("http://129.148.42.252:5019/produtos/all");
        setProdutos(command.data);
    }

    useEffect(() => {
        ListarProdutos();
    }, 
    [])

    function QuantRemove() {
        if(quantidade == 1) {
            setQuantidade(1)
        }
        else {
            setQuantidade(quantidade-1)
        }
    }

    const [capaProduto, setCapaProduto] = useState("");

    // Selects:
    const [tipoProduto, setTipoProduto] = useState("");
    const [generoProduto, setGeneroProduto] = useState("");
    const [materialProduto, setMaterialProduto] = useState("");
    const [gemaProduto, setGemaProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");

    const { id } = useParams();

    async function BuscarInfos(idprod) {
        const command = await axios.get(`http://129.148.42.252:5019/produto/${idprod}`)
        const data = command.data;

        setNomeProduto(data.Nome)
        setGemaProduto(data.Gema)
        setPrecoProduto(data.Preço)
        setDescricaoProduto(data.Descrição)
        setMaterialProduto(data.Material)
        setGeneroProduto(data.Gênero)
        setTipoProduto(data.Categoria)

        setCapaProduto(data.Capa)
    }

    useEffect(() => {
        BuscarInfos(id)
        if (!storage('user-info')) {
            setUserInfo('')
        }
        else {
            setUserInfo(storage('user-info'));
        }
    }, []);


    async function AdicionarCarrinho() {
        try {
            if (!storage('user-info')) {
                toast.error("Primeiro faça Login com a sua conta!");
            }
            else {
                let idprod = id;
                let info = {
                    qtd: quantidade,
                    user: userInfo.id
                }
                const url = `http://129.148.42.252:5019/produto/carrinho/add/${idprod}`
                const command = await axios.post(url, info);
                toast.success("Produto Adicionado ao Carrinho");
            }
        }
        catch (err) {
            toast.error("Não foi possível adicionar ao Carrinho");
        }
    }
    return(
        <div className='pagina-produto'>
            <CompCabecalho />
                <article className='sectionprodu'>
                    <section className='imgsinfo'>
                        <div className='images'>
                            <div id='mainimg'>
                                <img src={`http://129.148.42.252:5019/${capaProduto}`} alt="" id='mainimgg' />
                            </div>
                        </div>

                        <div className='separate'>
                            <span></span>
                            <h1>Descrição</h1>
                            <span></span>
                        </div>

                        <div className='infos'>
                            <p><b>・Material:</b> {materialProduto}</p>
                            <p><b>・Gema:</b> {gemaProduto}</p>
                            <p><b>・Categoria:</b> {tipoProduto}</p>
                            <p><b>・Gênero:</b> {generoProduto}</p>
                        </div>
                    </section>



                    <section className='infosgeralprod'>
                        <h1>{nomeProduto}</h1>
                        <h2>{descricaoProduto}</h2>

                        <h3>R$ {precoProduto}</h3>

                        <div className='buttonsadd'>
                            <button onClick={QuantRemove}>-</button>
                            <h1>{quantidade}</h1>
                            <button onClick={() => setQuantidade(quantidade+1)}>+</button>

                            <button id='buttoncarrinho' onClick={AdicionarCarrinho}>Adicionar ao Carrinho</button>
                        </div>

                        <div className='producao'>
                            <img src="/assets/images/produtos/Caixa 1.svg" alt="" />
                            <h3>Prazo de Produção:</h3>
                            <p>2 dias úteis</p>
                        </div>

                        <div className='certificado'>
                            <div className='producao'>
                                <img src='/assets/images/produtos/check-mark-icon-vector-removebg-preview 1.svg' alt="" />
                                <h3>Certificado de Garantia e Autenticidade</h3>
                            </div>
                            <p>Todas as Joias acompanham certificado de garantia e autenticidade do Ouro 18k, Diamantes e Pedras Preciosas.</p>
                        </div>
                    </section>
                </article>
                <section className='sugestoes'>
                    <div className='separate'>
                        <span></span>
                        <h1>Sugestões</h1>
                        <span></span>
                    </div>

                    <div className='items'>
                    {produtos.slice(0, 5).map((item, index) => (
                        <Link key={item.Id} to={`/produto/${item.Id}`}>
                        <CompIndicacoes
                        nome={item.Nome}
                        preco={item.Preço}
                        imagem={item.Capa}
                        />
                    </Link>
                    ))}
                    </div>
                </section>
            <CompRodape />
        </div>
    )
}

