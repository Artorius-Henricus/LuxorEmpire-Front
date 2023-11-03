import { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import storage from "local-storage"

export default function CompUserMenuResp(){
    const [show, setShow] = useState(false);
    const [perfilImg, setPerfilImg] = useState('');
    const [infoUser, setInfoUser] = useState('');

    useEffect(() => {
        if(!storage('user-info').img) {
            setPerfilImg(null);
        }
        else {
            setInfoUser(storage('user-info'))
            setPerfilImg("http://localhost:5000/"+storage('user-info').img);
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
                <h1>{storage('user-info').nome}</h1>
            </div>
            
            <div className='opcoes'>
            <article id='selectbox' onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
                <div id='select'>
                    <h1>Minha Conta</h1>
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

            <Link to='' className='bttt'>
                Notificações
            </Link>
            </div>
        </div>

    )
}