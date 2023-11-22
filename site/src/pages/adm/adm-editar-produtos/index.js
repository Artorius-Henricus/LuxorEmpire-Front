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
        const command = await axios.get(`http://129.148.42.252:5019/produto/${id}`);
        const imagens = command.data;
        if (imagens || imagens.data) {
            setCapaProduto(imagens.Capa);

            setCapaPreview("http://129.148.42.252:5019/"+imagens.Capa);
        } else {
            setCapaProduto(null);
            setCapaPreview(null);
        }
    };

    async function Consultar(idprod) {
        const command = await axios.get(`http://129.148.42.252:5019/produto/${idprod}`);
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

            setCapaPreview("http://129.148.42.252:5019/"+imagens.Capa);
        } else {
            setCapaProduto(null);
            setCapaPreview(null);
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
                preco: precoProduto,
                descricao: descricaoProduto.trim()
            };
            const command = await axios.post(`http://129.148.42.252:5019/produto/atualizar/${id}`, produto);
            toast.success("Produto Cadastrado");

            const imgsendcapa = enviarImagensProduto(id, capaProduto, "Capa do Produto", 'ds_capa');
        }
        
        catch (error) {
            toast.error(error.message)
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
            
                const command = await axios.post(`http://129.148.42.252:5019/produto/${id}/imagens/${campo}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });

                toast.success("Imagem Cadastrada: "+`${texdt}`);
            }
        }
        catch (error) {
            if (error.message == "Request failed with status code 400") {
                console.log("Imagem Não foi Cadastrada")
            }
            else {
                toast.error(error.message)
            }
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
                    </section>
                </article>
            </article>
        </div>
    )
}