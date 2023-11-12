import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import CompIndicacoes from '../../../components/site/indicacoes-produto';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import storage from "local-storage"
import axios from 'axios';

export default function Paginaproduto() {
    const [quantidade, setQuantidade] = useState(1);

    const [userInfo, setUserInfo] = useState('')

    function QuantRemove() {
        if(quantidade == 1) {
            setQuantidade(1)
        }
        else {
            setQuantidade(quantidade-1)
        }
    }

    const [capaProduto, setCapaProduto] = useState("");
    const [produtoImagem1, setProdutoImagem1] = useState("");
    const [produtoImagem2, setProdutoImagem2] = useState("");
    const [produtoImagem3, setProdutoImagem3] = useState("");
    const [produtoImagem4, setProdutoImagem4] = useState("");

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
        const command = await axios.get(`http://localhost:5000/produto/${idprod}`)
        const data = command.data;

        setNomeProduto(data.Nome)
        setGemaProduto(data.Gema)
        setPrecoProduto(data.Preço)
        setDescricaoProduto(data.Descrição)
        setMaterialProduto(data.Material)
        setGeneroProduto(data.Gênero)
        setTipoProduto(data.Categoria)

        setCapaProduto(data.Capa)
        setProdutoImagem1(data.Imagem1)
        setProdutoImagem2(data.Imagem2)
        setProdutoImagem3(data.Imagem3)
        setProdutoImagem4(data.Imagem4)
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
            let idprod = id;
            let info = {
                qtd: quantidade,
                user: userInfo.id
            }
            const url = `http://localhost:5000/produto/carrinho/add/${idprod}`
            const command = await axios.post(url, info);
            console.log("Adicionou!")
        }
        catch (err) {
            console.log(err.response.data.erro)
        }
    }
    return(
        <div className='pagina-produto'>
            <CompCabecalho />
                <article className='sectionprodu'>
                    <section className='imgsinfo'>
                        <div className='images'>
                            <section>
                                <div>
                                    <img src={`http://localhost:5000/${produtoImagem1}`} alt="" />
                                </div>
                                <div>
                                    <img src={`http://localhost:5000/${produtoImagem2}`} alt="" />
                                </div>
                                <div>
                                    <img src={`http://localhost:5000/${produtoImagem3}`} alt="" />
                                </div>
                                <div>
                                    <img src={`http://localhost:5000/${produtoImagem4}`} alt="" />
                                </div>
                            </section>
                            <div id='mainimg'>
                                <img src={`http://localhost:5000/${capaProduto}`} alt="" id='mainimgg' />
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
                        <CompIndicacoes />
                        <CompIndicacoes />
                        <CompIndicacoes />
                        <CompIndicacoes />
                        <CompIndicacoes />
                    </div>
                </section>
            <CompRodape />
        </div>
    )
}

