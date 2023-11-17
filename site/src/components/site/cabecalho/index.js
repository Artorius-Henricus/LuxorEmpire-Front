import './index.scss';
import { useState, useEffect } from 'react';
import LoginUser from '../user-login';
import RegisterUser from '../user-register';
import Notificações from '../../../pages/site/notificacoes';
import {Link, useLocation} from 'react-router-dom'
import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CompCabecalho({Produtos}) {
    const [mostrarComponente1, setMostrarComponente1] = useState(true);

    const trocarComponente = () => {
        setMostrarComponente1(!mostrarComponente1);
    };

    const navigate = useNavigate();
    const [logged, setLogged] = useState(false)
    const [perfilImg, setPerfilImg] = useState('');

    function nav() {
        navigate('/perfil')
    }

    useEffect(() => {
        if (storage('user-info')) {
            setLogged(true)
            if(!storage('user-info').img) {
                setPerfilImg(null);
            }
            else {
                setPerfilImg("http://129.148.42.252:5019/"+storage('user-info').img);
            }
        }
        else {
            setLogged(false)
        }
    }, [])



    const [abrirRegistro, setAbrirRegistro] = useState(false);

    const abrirReg = () => {
        setAbrirRegistro(true);
    }

    const fecharReg = () => {
        setAbrirRegistro(false);
    }

    const location = useLocation();

    const [pesquisa, setPesquia] = useState('');

    async function PesquisarNome() {
        try {
            if (location != "/market") {
                navigate("/market")
            }
            Produtos(pesquisa);
        } catch (error) {
            console.log(error);
        }
    }

    const [responsive, setResponsive] = useState(false);

    return(
        <div className="comp-cabecalho">

            <div className='sombra'>
                <div id='search'>
                    <button onClick={() => PesquisarNome()}><img src="/assets/images/cabecalho/Lupa.svg" alt="BtPesquisar" /></button>
                    <input type='text' value={pesquisa} onChange={e => setPesquia(e.target.value)} />
                </div>

                <Link to='/' id='logo'><img src="/assets/images/cabecalho/Logo.svg" alt="Logo" /></Link>

                <div id='buttons-menu'>
                   
                    <button onClick={logged ? nav : abrirReg}>
                        {!perfilImg &&
                         <img  src="/assets/images/cabecalho/Usuario.svg" alt="UserIcon" />
                        }
                        {perfilImg &&
                         <img src={perfilImg} alt="UserIcon" id='ftuser' />
                        }
                        Minha Conta
                    </button>

                    <button>
                        <Link to='/carrinho'>
                        <img src="/assets/images/cabecalho/Compras.svg" alt="ComprasIcon" /></Link>
                        Meu Carrinho
                    </button>

                    <button>
                        <Link to='/notificacoes'>
                        <img src="/assets/images/cartoes/Sino.png" alt="Imagem Notificações" /></Link>
                        Notificações
                    </button>
                </div>
                <button className='menu'>
                        <img src="/assets/images/cabecalho/7216128-removebg-preview.png"/>
                </button>
            </div>  
            <nav id='navegation-bar'>
                <Link to='/market'>JÓIAS</Link>
                <Link to='/market'>ACESSÓRIOS</Link>
                <Link to='/market'>RELÓGIOS</Link>
                <Link to='/market'>LANÇAMENTOS</Link>
                <Link to='/market'>MASCULINO</Link>
                {mostrarComponente1 
                    ? (
                        <RegisterUser isOpen={abrirRegistro} onClose={fecharReg} trocar={trocarComponente}/>
                                    
                    ) 
                    : (
                        <LoginUser isOpen={abrirRegistro} onClose={fecharReg} trocar={trocarComponente}/>
                    )
                }
            </nav>
        </div>
    )
}

