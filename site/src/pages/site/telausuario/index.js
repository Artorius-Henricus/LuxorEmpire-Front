import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function PaginaTelaUsuario(){
    const navigate = useNavigate();
    const [infoUser, setInfoUser] = useState('');
    const [perfilImg, setPerfilImg] = useState('');
    const [slnImg, setSlnImg] = useState('');

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setInfoUser(storage('user-info'));

            if(!storage('user-info').img) {
                setPerfilImg('');
            }
            else {
                setPerfilImg("http://129.148.42.252:5019/"+storage('user-info').img);
            }
        }
    }, [])

    function Deslogar() {
        storage.remove('user-info');
        navigate('/');
    }

    function escolherFoto(){
        document.getElementById('inputfoto').click();
    }

    function imageSelecionada(e) {
        const selectedFile = e.target.files[0];
        setSlnImg(selectedFile);
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            setPerfilImg(fileUrl);
        }
    }

    async function enviarPerfilIMG() {
        try {
            const formData = new FormData();
            formData.append('perfilimg', slnImg);

            const user = storage('user-info').id;
            const command = await axios.put(`http://129.148.42.252:5019/usuario/${user}/imagem`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            const imgdata = await axios.get(`http://129.148.42.252:5019/usuario/info/${user}`)
            const data = storage('user-info')
            data.img = imgdata.data.img;
            storage('user-info', data)

            toast.success("Imagem Cadastrada");
        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    return(
        <div className='pagina-tela-usuario'>
            <ToastContainer />
            <CompCabecalho />

            <section className='corp'>
                <CompUserMenu />

                <article className='usermenusprofile'>
                    <section id='sideleft'>
                        <h1>Meu Perfil</h1>
                        <div id='blocks'>
                            <div>
                                <p>Nome de Usuário</p>
                                <p>CPF</p>
                                <p>Email</p>
                                <p>Número de Telefone</p>
                                <p>Data de Nascimento</p>
                            </div>
                            <div>
                                <input type='text' value={infoUser.nome}/>
                                <input type='text' value={infoUser.cpf}/>
                                <input type='text' value={infoUser.email}/>
                                <input type='text' value={infoUser.telefone}/>
                                <input type='date' value={infoUser.nascimento}/>
                            </div>
                        </div>
                        <div id='btsvsc'>
                            <button onClick={enviarPerfilIMG}>Salvar Alterações</button>
                            <button id='sairbt' onClick={Deslogar}>Sair da Conta</button>
                        </div>
                    </section>

                    <section id='sideright'>
                        {!perfilImg &&
                            <img src='assets/images/cabecalho/Usuario.svg' alt=""/>
                        }
                        {perfilImg &&
                            <img src={perfilImg} alt=""/>
                        }
                        <span id='tamanhorecom'>Tamanho Recomendado: 500x500</span>
                        
                        <div onClick={escolherFoto}>
                        {!perfilImg &&
                            <button>Selecionar uma Imagem</button>
                        }
                        {perfilImg &&
                            <button>Alterar Imagem</button>
                        }
                            <input type="file" id='inputfoto' onChange={imageSelecionada}/>
                        </div>
                    </section>
                </article>
            </section>
            <CompRodape />
        </div>
    )
}