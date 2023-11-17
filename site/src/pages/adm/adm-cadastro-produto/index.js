import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';
import { useEffect, useState } from 'react';
import storage from "local-storage"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function AdmCadastroProduto() {
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

    // Selects:
    const [tipoProduto, setTipoProduto] = useState("");
    const [generoProduto, setGeneroProduto] = useState("");
    const [materialProduto, setMaterialProduto] = useState("");
    const [gemaProduto, setGemaProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");

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

    function limparImagem(identificador, imagemraiz, idinpt) {
        identificador('');
        imagemraiz('');
        const novoInput = document.createElement('input');
        novoInput.type = 'file';
        novoInput.id = idinpt; // Defina o mesmo ID ou atributos necessários
        novoInput.addEventListener('change', (e) => imageSelecionada(e, identificador, imagemraiz));
        const inputAntigo = document.getElementById(idinpt); // Substitua 'capa' pelo ID correto
        inputAntigo.parentNode.replaceChild(novoInput, inputAntigo);
    };

    async function CadastrarProduto(){
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
            const command = await axios.post("http://localhost:5000/produto/registrar", produto);
            toast.success("Produto Cadastrado");

            const idp = command.data;
            const imgsendcapa = enviarImagensProduto(idp.id, capaProduto, "Capa do Produto", 'ds_capa');
            const imgsend1 = enviarImagensProduto(idp.id, produtoImagem1, "Imagem 1", 'ds_imagem1');
            const imgsend2 = enviarImagensProduto(idp.id, produtoImagem2, "Imagem 2", 'ds_imagem2');
            const imgsend3 = enviarImagensProduto(idp.id, produtoImagem3, "Imagem 3", 'ds_imagem3');
            const imgsend4 = enviarImagensProduto(idp.id, produtoImagem4, "Imagem 4", 'ds_imagem4');
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

    return (
        <div className="adm-cadastrar-produto">
            <CompMenuBar />

            <article className='corp'>
                <ToastContainer />
                <h1>Cadastrar Produto</h1>

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
                    
                    <div id="container-imagens">
                        <div id="imagens">
                            <div>
                                <input type="file" id='capa' onChange={e => imageSelecionada(e, setCapaPreview, setCapaProduto)} />
                                <label>Imagem Capa</label>
                                <img src={capaPreview} alt="Capa" onClick={() => escolherFoto('capa')}/>
                                <button onClick={() => limparImagem(setCapaPreview, setCapaProduto, 'capa')}>Remover</button>
                            </div>
                            <div>
                                <input type="file" id='imagem1' onChange={e => imageSelecionada(e, setPreviewImagem1, setProdutoImagem1)} />
                                <label>Imagem 1</label>
                                <img src={previewImagem1} alt="Imagem1" onClick={() => escolherFoto('imagem1')}/>
                                <button onClick={() => limparImagem(setPreviewImagem1, setProdutoImagem1, 'imagem1')}>Remover</button>
                            </div>
                            <div>
                                <input type="file" id='imagem2' onChange={e => imageSelecionada(e, setPreviewImagem2, setProdutoImagem2)} />
                                <label>Imagem 2</label>
                                <img src={previewImagem2} alt="Imagem2" onClick={() => escolherFoto('imagem2')}/>
                                <button onClick={() => limparImagem(setPreviewImagem2, setProdutoImagem2,'imagem2')}>Remover</button>
                            </div>
                            <div>
                                <input type="file" id='imagem3' onChange={e => imageSelecionada(e, setPreviewImagem3, setProdutoImagem3)} />
                                <label>Imagem 3</label>
                                <img src={previewImagem3} alt="Imagem3"  onClick={() => escolherFoto('imagem3')}/>
                                <button onClick={() => limparImagem(setPreviewImagem3, setProdutoImagem3,'imagem3')}>Remover</button>
                            </div>
                            <div>
                                <input type="file" id='imagem4' onChange={e => imageSelecionada(e, setPreviewImagem4, setProdutoImagem4)} />
                                <label>Imagem 4</label>
                                <img src={previewImagem4} alt="Imagem4" onClick={() => escolherFoto('imagem4')} />
                                <button onClick={() => limparImagem(setPreviewImagem4, setProdutoImagem4,'imagem4')}>Remover</button>
                            </div>
                        </div>
                    </div>
                    <button id='btcadastr' onClick={CadastrarProduto}>Cadastrar</button>
                </div>
            </article>
        </div>
    )
}