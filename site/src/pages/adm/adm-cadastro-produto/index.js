import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';
import { useState } from 'react';

export default function AdmCadastroProduto() {
    const [selectedImages, setSelectedImages] = useState([]); // Para armazenar as imagens selecionadas
    const [imagePreviews, setImagePreviews] = useState([]); // Para armazenar as URLs das imagens

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

    return (
        <div className="adm-cadastrar-produto">
            <CompMenuBar />

            <article className='corp'>
                <h1>Cadastrar Produto</h1>

                <div className='menus'>
                    <div>
                        <div className='blockdiv'>
                            <label>Tipo Produto</label>
                            <select>
                                <option>Anel</option>
                                <option>Brinco</option>
                                <option>Colar</option>
                                <option>Pingente</option>
                                <option>Pulseira</option>
                                <option>Relógio</option>
                            </select>
                        </div>
                        <div className='blockdiv'>
                            <label>Gênero</label>
                            <select>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='blockdiv'>
                            <label>Material</label>
                            <select>
                                <option>Ouro</option>
                                <option>Prata</option>
                                <option>Titânio</option>
                                <option>Aço Inoxidável</option>
                                <option>Couro</option>
                                <option>Brilhantes</option>
                            </select>
                        </div>
                        <div className='blockdiv'>
                            <label>Gema</label>
                            <select>
                                <option>Diamante</option>
                                <option>Esmeralda</option>
                                <option>Rubi</option>
                                <option>Safira</option>
                                <option>Pérola</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <div className='blockdiv'>
                            <label>Nome Produto</label>
                            <input type='text'/>
                        </div>
                        <div className='blockdiv'>
                            <label>Preço</label>
                            <input type='text'/>
                        </div>
                    </div>

                    <div className='blockdiv'>
                        <label>Descrição</label>
                        <textarea></textarea>
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
                    <button id='btcadastr'>Cadastrar</button>
                </div>
            </article>
        </div>
    )
}