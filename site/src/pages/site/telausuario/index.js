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
    const [perfilImg, setPerfilImg] = useState('');
    const [slnImg, setSlnImg] = useState('');

    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('');
    const [userCpf, setUserCpf] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userTelefone, setUserTelefone] = useState('');
    const [userNascimento, setUserNascimento] = useState('');

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setUserId(storage('user-info').id)
            setUserName(storage('user-info').nome)
            setUserCpf(storage('user-info').cpf)
            setUserEmail(storage('user-info').email)
            setUserTelefone(storage('user-info').telefone)
            setUserNascimento(storage('user-info').nascimento)

            if(!storage('user-info').img) {
                setPerfilImg('');
            }
            else {
                setSlnImg("http://localhost:5000/"+storage('user-info').img);
                setPerfilImg("http://localhost:5000/"+storage('user-info').img);
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

    async function AtualizarPerfil() {
        try {
            let user = {
                nome: userName,
                cpf: userCpf,
                email: userEmail,
                telefone: userTelefone,
                nascimento: userNascimento
            };
            const url = `http://localhost:5000/usuario/atualizar/${userId}`
            const command = await axios.put(url, user);
            toast.success("Informações Atualizadas!")

            const data = storage('user-info')
            data.nome = user.nome;
            data.cpf = user.cpf;
            data.email = user.email;
            data.telefone = user.telefone;
            data.nascimento = user.nascimento;
            storage('user-info', data);
            if (slnImg != storage('user-info').img) {
                enviarPerfilIMG()
            }
            else {
                console.log("error")
            }
        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    async function enviarPerfilIMG() {
        try {
            const formData = new FormData();
            formData.append('perfilimg', slnImg);

            const user = storage('user-info').id;
            const command = await axios.put(`http://localhost:5000/usuario/${user}/imagem`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            const imgdata = await axios.get(`http://localhost:5000/usuario/info/${user}`)
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
                                <input type='text' value={userName} onChange={e => setUserName(e.target.value)}/>
                                <input type='text' value={userCpf} onChange={e => setUserCpf(e.target.value)}/>
                                <input type='text' value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
                                <input type='text' value={userTelefone} onChange={e => setUserTelefone(e.target.value)}/>
                                <input type='date' value={userNascimento} onChange={e => setUserNascimento(e.target.value)}/>
                            </div>
                        </div>
                        <div id='btsvsc'>
                            <button onClick={AtualizarPerfil}>Salvar Alterações</button>
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