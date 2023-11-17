import "./index.scss";

import CompMenuBar from '../../../components/adm/menubar';
import axios from "axios";
import storage from "local-storage"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdmEditarProduto() {
    const [adminInfos, setAdminInfos] = useState('')


    const navigate = useNavigate();
    useEffect(() => {
        if (!storage('admin-info')) {
            navigate('/adm')
        }
        else {
        setAdminInfos(storage('admin-info'));
        }
    }, [])

    const { id } = useParams();

    // Selects:
    const [tipoProduto, setTipoProduto] = useState("");
    const [generoProduto, setGeneroProduto] = useState("");
    const [materialProduto, setMaterialProduto] = useState("");
    const [gemaProduto, setGemaProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");

    const [capaProduto, setCapaProduto] = useState("");
    const [capaPreview, setCapaPreview] = useState("");
    
    const [produtoImagem1, setProdutoImagem1] = useState("");
    const [previewImagem1, setPreviewImagem1] = useState("");

    const [produtoImagem2, setProdutoImagem2] = useState("");
    const [previewImagem2, setPreviewImagem2] = useState("");

    const [produtoImagem3, setProdutoImagem3] = useState("");
    const [previewImagem3, setPreviewImagem3] = useState("");

    const [produtoImagem4, setProdutoImagem4] = useState("");
    const [previewImagem4, setPreviewImagem4] = useState("");

    function escolherFoto(identificador){
        document.getElementById(identificador).click();
    }

    function imageSelecionada(e, identificador, imagemraiz) {
        const selectedFile = e.target.files[0];
        imagemraiz(selectedFile)
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            identificador(fileUrl);
        }
    }

    async function limparImagem() {
        const command = await axios.get(`http://localhost:5000/produto/${id}`);
        const imagens = command.data;
        if (imagens || imagens.data) {
            setCapaProduto(imagens.Capa);
            setProdutoImagem1(imagens.Imagem1);
            setProdutoImagem2(imagens.Imagem2);
            setProdutoImagem3(imagens.Imagem3);
            setProdutoImagem4(imagens.Imagem4);

            setCapaPreview("http://localhost:5000/"+imagens.Capa);
            setPreviewImagem1("http://localhost:5000/"+imagens.Imagem1);
            setPreviewImagem2("http://localhost:5000/"+imagens.Imagem2);
            setPreviewImagem3("http://localhost:5000/"+imagens.Imagem3);
            setPreviewImagem4("http://localhost:5000/"+imagens.Imagem4);
        } else {
            setCapaProduto(null);
            setProdutoImagem1(null);
            setProdutoImagem2(null);
            setProdutoImagem3(null);
            setProdutoImagem4(null);
            setCapaPreview(null);
            setPreviewImagem1(null);
            setPreviewImagem2(null);
            setPreviewImagem3(null);
            setPreviewImagem4(null);
        }
    };

    async function Consultar(idprod) {
        const command = await axios.get(`http://localhost:5000/produto/${idprod}`);
        setTipoProduto(command.data.Categoria)
        setGeneroProduto(command.data.Gênero)
        setMaterialProduto(command.data.Material)
        setGemaProduto(command.data.Gema)
        setNomeProduto(command.data.Nome)
        setPrecoProduto(command.data.Preço)
        setDescricaoProduto(command.data.Descrição)

        const imagens = command.data;

        if (imagens || imagens.data) {
            setCapaProduto(imagens.Capa);
            setProdutoImagem1(imagens.Imagem1);
            setProdutoImagem2(imagens.Imagem2);
            setProdutoImagem3(imagens.Imagem3);
            setProdutoImagem4(imagens.Imagem4);

            setCapaPreview("http://localhost:5000/"+imagens.Capa);
            setPreviewImagem1("http://localhost:5000/"+imagens.Imagem1);
            setPreviewImagem2("http://localhost:5000/"+imagens.Imagem2);
            setPreviewImagem3("http://localhost:5000/"+imagens.Imagem3);
            setPreviewImagem4("http://localhost:5000/"+imagens.Imagem4);
        } else {
            setCapaProduto(null);
            setProdutoImagem1(null);
            setProdutoImagem2(null);
            setProdutoImagem3(null);
            setProdutoImagem4(null);
            setCapaPreview(null);
            setPreviewImagem1(null);
            setPreviewImagem2(null);
            setPreviewImagem3(null);
            setPreviewImagem4(null);
        }
    }

    async function AtualizarProduto(){
        try {
            let produto = {
                nome: nomeProduto.trim(),
                genero: generoProduto,
                material: materialProduto,
                categoria: tipoProduto,
                gema: gemaProduto,
                preco: precoProduto.trim(),
                descricao: descricaoProduto.trim()
            };
            const command = await axios.post(`http://localhost:5000/produto/atualizar/${id}`, produto);
            toast.success("Produto Cadastrado");

            const imgsendcapa = enviarImagensProduto(id, capaProduto, "Capa do Produto", 'ds_capa');
            const imgsend1 = enviarImagensProduto(id, produtoImagem1, "Imagem 1", 'ds_imagem1');
            const imgsend2 = enviarImagensProduto(id, produtoImagem2, "Imagem 2", 'ds_imagem2');
            const imgsend3 = enviarImagensProduto(id, produtoImagem3, "Imagem 3", 'ds_imagem3');
            const imgsend4 = enviarImagensProduto(id, produtoImagem4, "Imagem 4", 'ds_imagem4');
        }
        
        catch (err) {
            toast.error(err.response.data.erro)
        }
    };

    async function enviarImagensProduto(id, imagem, texdt, campo) {
        try {
            if (!imagem) {
                toast.warning("Não foi possível cadastrar: "+`${texdt}`)
            }
            else {
                const formData = new FormData();
                formData.append('prodimg', imagem);
            
                const command = await axios.post(`http://localhost:5000/produto/${id}/imagens/${campo}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });

                toast.success("Imagem Cadastrada: "+`${texdt}`);
            }
        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    useEffect(() => {
        Consultar(id)
    }, []);

    return(
        <div className="pagina-adm-editar-produto">
            <CompMenuBar />
            <article className="corpo">
                <ToastContainer />
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
                            <button id='btcadastr' onClick={AtualizarProduto}>Alterar</button>
                        </div>
                    </section>

                    <section className="rightside">
                        <input type="file" id='capa' onChange={e => imageSelecionada(e, setCapaPreview, setCapaProduto)} />
                        <label>Imagem Capa</label>
                        <img src={capaPreview} alt="Capa" onClick={() => escolherFoto('capa')} id='capa1'/>
                        <button onClick={limparImagem}>Limpar Imagens</button>
                        <div id="imagens">
                            <div>
                                <input type="file" id='imagem1' onChange={e => imageSelecionada(e, setPreviewImagem1, setProdutoImagem1)} />
                                <label>Imagem 1</label>
                                <img src={previewImagem1} alt="Imagem1" onClick={() => escolherFoto('imagem1')}/>
                            </div>
                            <div>
                                <input type="file" id='imagem2' onChange={e => imageSelecionada(e, setPreviewImagem2, setProdutoImagem2)} />
                                <label>Imagem 2</label>
                                <img src={previewImagem2} alt="Imagem2" onClick={() => escolherFoto('imagem2')}/>
                            </div>
                            <div>
                                <input type="file" id='imagem3' onChange={e => imageSelecionada(e, setPreviewImagem3, setProdutoImagem3)} />
                                <label>Imagem 3</label>
                                <img src={previewImagem3} alt="Imagem3"  onClick={() => escolherFoto('imagem3')}/>
                            </div>
                            <div>
                                <input type="file" id='imagem4' onChange={e => imageSelecionada(e, setPreviewImagem4, setProdutoImagem4)} />
                                <label>Imagem 4</label>
                                <img src={previewImagem4} alt="Imagem4" onClick={() => escolherFoto('imagem4')} />  
                            </div>
                        </div>
                    </section>
                </article>
            </article>
        </div>
    )
}