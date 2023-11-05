import "./index.scss";

import CompMenuBar from '../../../components/adm/menubar';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function AdmEditarProduto() {
    const [tipoProduto, setTipoProduto] = useState("");
    const [generoProduto, setGeneroProduto] = useState("");
    const [materialProduto, setMaterialProduto] = useState("");
    const [gemaProduto, setGemaProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");

    const { id } = useParams();

    async function Consultar(idprod) {
        const command = await axios.get(`http://localhost:5000/produto/${idprod}`);
        setTipoProduto(command.data.Categoria)
        setGeneroProduto(command.data.Gênero)
        setMaterialProduto(command.data.Material)
        setGemaProduto(command.data.Gema)
        setNomeProduto(command.data.Nome)
        setPrecoProduto(command.data.Preço)
        setDescricaoProduto(command.data.Descrição)

    }

    const [capaProduto, setCapaProduto] = useState("");
    const [produtoImagem1, setProdutoImagem1] = useState("");
    const [produtoImagem2, setProdutoImagem2] = useState("");
    const [produtoImagem3, setProdutoImagem3] = useState("");
    const [produtoImagem4, setProdutoImagem4] = useState("");

    async function ConsultarImagens(idimg) {
        const command = await axios.get(`http://localhost:5000/produto/imagem/${idimg}`);
        const imagens = command.data
        if (!command.data) {
            setCapaProduto(null)
            setProdutoImagem1(null)
            setProdutoImagem2(null)
            setProdutoImagem3(null)
            setProdutoImagem4(null)
        }
        else {
            setCapaProduto(imagens[0]?.URL || null);
            setProdutoImagem1(imagens[1]?.URL || null);
            setProdutoImagem2(imagens[2]?.URL || null);
            setProdutoImagem3(imagens[3]?.URL || null);
            setProdutoImagem4(imagens[4]?.URL || null);
        }
    }

    useEffect(() => {
        Consultar(id)
        ConsultarImagens(id)
    }, []);

    return(
        <div className="pagina-adm-editar-produto">
            <CompMenuBar />
            <article className="corpo">
                <h1>Editar Produto</h1>

                <article className="group1">
                    <section className="leftside">
                        <div className='menus'>
                            <div>
                                <div className='blockdiv'>
                                    <label>Tipo Produto</label>
                                    <select value={tipoProduto} onChange={e => setTipoProduto(e.target.value)}>
                                        <option value="">Selecione o Tipo</option>
                                        <option value="Anel">Anel</option>
                                        <option value="Brinco">Brinco</option>
                                        <option value="Colar">Colar</option>
                                        <option value="Pingente">Pingente</option>
                                        <option value="Pulseira">Pulseira</option>
                                        <option value="Relógio">Relógio</option>
                                    </select>
                                </div>
                                <div className='blockdiv'>
                                    <label>Gênero</label>
                                    <select value={generoProduto} onChange={e => setGeneroProduto(e.target.value)}>
                                        <option value="">Selecione o Gênero</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className='blockdiv'>
                                    <label>Material</label>
                                    <select value={materialProduto} onChange={e => setMaterialProduto(e.target.value)}>
                                        <option value="">Selecione o Material</option>
                                        <option value="Ouro">Ouro</option>
                                        <option value="Prata">Prata</option>
                                        <option value="Titânio">Titânio</option>
                                        <option value="Aço Inoxidável">Aço Inoxidável</option>
                                        <option value="Couro">Couro</option>
                                        <option value="Brilhantes">Brilhantes</option>
                                    </select>
                                </div>
                                <div className='blockdiv'>
                                    <label>Gema</label>
                                    <select value={gemaProduto} onChange={e => setGemaProduto(e.target.value)}>
                                        <option value="">Selecione a Gema</option>
                                        <option value="Diamante">Diamante</option>
                                        <option value="Esmeralda">Esmeralda</option>
                                        <option value="Rubi">Rubi</option>
                                        <option value="Safira">Safira</option>
                                        <option value="Pérola">Pérola</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <div className='blockdiv'>
                                    <label>Nome Produto</label>
                                    <input type='text' value={nomeProduto} onChange={e => setNomeProduto(e.target.value)}/>
                                </div>
                                <div className='blockdiv'>
                                    <label>Preço</label>
                                    <input type='text' value={precoProduto} onChange={e => setPrecoProduto(e.target.value)}/>
                                </div>
                            </div>

                            <div className='blockdiv'>
                                <label>Descrição</label>
                                <textarea value={descricaoProduto} onChange={e => setDescricaoProduto(e.target.value)}></textarea>
                            </div>
                            <button id='btcadastr'>Alterar</button>
                        </div>
                    </section>

                    <section className="rightside">
                        <img src={"http://localhost:5000/"+capaProduto} alt="Capa" id='capa1' />
                        <div>
                            <img src={"http://localhost:5000/"+produtoImagem1} alt="Img1" />
                            <img src={"http://localhost:5000/"+produtoImagem2} alt="Img2" />
                            <img src={"http://localhost:5000/"+produtoImagem3} alt="Img3" />
                            <img src={"http://localhost:5000/"+produtoImagem4} alt="Img4" />
                        </div>
                        <button>Enviar Imagens</button>
                    </section>
                </article>
            </article>
        </div>
    )
}