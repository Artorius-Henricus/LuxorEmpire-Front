import { useState, useEffect } from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import storage from "local-storage"

export default function CompUserMenuResp(){
    const [show, setShow] = useState(false);
    const [perfilImg, setPerfilImg] = useState('');
    const [infoUser, setInfoUser] = useState('');
    const navigate = useNavigate();

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
        <div className='comp-user-menu-resp'>
            <div id='usericonchange'>
                {!perfilImg &&
                    <img src='assets/images/cabecalho/Usuario.svg' alt=""/>
                }
                {perfilImg &&
                 <img src={perfilImg} alt=""/>
                }
                <h1>{infoUser.nome}</h1>
            </div>
            
            <div className='opcoes'>
            <article id='selectbox' onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
                <div className='select'>
                    <a id='text'>Minha Conta</a>
                </div>
                <div className={`off ${show ? 'show' : ''}`}>
                    <Link to='/perfil'>Perfil</Link>
                    <Link to='/cartoes'>Cartões</Link>
                    <Link to='/enderecos'>Endereços</Link>
                </div>
            </article>  

            <Link to='/pedidos' className='bttt'>
                Meus Pedidos
            </Link>

            <Link to='/notificacoes' className='bttt'>
                Notificações
            </Link>
            </div>
        </div>

    )
}