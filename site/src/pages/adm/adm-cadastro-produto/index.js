import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';
import { useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdmCadastroProduto() {
    const [selectedImages, setSelectedImages] = useState([]); // Para armazenar as imagens selecionadas
    const [imagePreviews, setImagePreviews] = useState([]); // Para armazenar as URLs das imagens

    // Selects:
    const [tipoProduto, setTipoProduto] = useState("");
    const [generoProduto, setGeneroProduto] = useState("");
    const [materialProduto, setMaterialProduto] = useState("");
    const [gemaProduto, setGemaProduto] = useState("");
    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");

    const handleImageChange = (e) => {
        const files = e.target.files;

        // Converter os File objetos em URLs
        const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));

        setSelectedImages([...selectedImages, ...files]);
        setImagePreviews([...imagePreviews, ...imageUrls]);
    };

    const removeImage = (index) => {
        const newSelectedImages = [...selectedImages];
        const newImagePreviews = [...imagePreviews];
        newSelectedImages.splice(index, 1);
        newImagePreviews.splice(index, 1);
        setSelectedImages(newSelectedImages);
        setImagePreviews(newImagePreviews);
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
            const imgsend = enviarImagensProduto(command.data.id)
            console.log(command.data.id)
        }
        
        catch (err) {
            toast.error(err.response.data.erro)
        }
    };

    async function enviarImagensProduto(id) {
        try {
            for (let i = 0; i < selectedImages.length; i++) {
                const formData = new FormData();
                formData.append('prodimg', selectedImages[i]);

                const command = await axios.post(`http://localhost:5000/produto/${id}/imagens`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });
            }

            toast.success("Imagens Cadastradas");
        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    };

    
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

                    <input type="file" id='btimg' multiple onChange={handleImageChange} />
                    
                    <div id="container-imagens">
                        <div id="imagens">
                        {imagePreviews.map((imageUrl, index) => (
                            <div key={index} className="image-preview">
                                <img src={imageUrl} alt="" />
                                <button onClick={() => removeImage(index)}>Remover</button>
                            </div>
                        ))}
                        </div>
                    </div>
                    <button id='btcadastr' onClick={CadastrarProduto}>Cadastrar</button>
                </div>
            </article>
        </div>
    )
}