import { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import storage from "local-storage"
import { useNavigate } from 'react-router-dom';

export default function CompUserMenu(){
    const [show, setShow] = useState(false);
    const [perfilImg, setPerfilImg] = useState('');
    const navigate = useNavigate();
    const [infoUser, setInfoUser] = useState('');

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            if(!storage('user-info').img) {
                setPerfilImg(null);
            }
            else {
                setPerfilImg("http://129.148.42.252:5019/"+storage('user-info').img);
            }
            setInfoUser(storage('user-info'))
        }
    }, [])

    return(
        <div className='comp-user-menu'>
            <div id='usericonchange'>
                {!perfilImg &&
                    <img src='assets/images/cabecalho/Usuario.svg' alt=""/>
                }
                {perfilImg &&
                 <img src={perfilImg} alt=""/>
                }
                <h1>{infoUser.nome}</h1>
            </div>
            
            <article id='selectbox' onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
                <div id='select'>
                    <img src="/assets/images/cartoes/IconMconta.png" alt="UserIcon" />
                    <h1>Minha Conta</h1>
                </div>
                <div className={`off ${show ? 'show' : ''}`}>
                    <Link to='/perfil'>Perfil</Link>
                    <Link to='/cartoes'>Cartões</Link>
                    <Link to='/enderecos'>Endereços</Link>
                </div>  
            </article>  

            <Link to='/pedidos' className='bttt'>
                <img src="/assets/images/cartoes/Compras.png" alt="Imagem Sacola" />
                Meus Pedidos
            </Link>

            <Link to='/notificacoes' className='bttt'>
                <img src="/assets/images/cartoes/Sino.png" alt="Imagem Notificações" />
                Notificações
            </Link>
        </div>
    )
}