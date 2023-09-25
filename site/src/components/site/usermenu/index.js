import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function CompUserMenu(){
    const [show, setShow] = useState(false);

    return(
        <div className='comp-user-menu'>
            <div id='usericonchange'>
                <img src="" alt="Imagem do Usuário" />
                <div>
                    <h1>Nome de Usuário!</h1>
                    <button>
                        <img src="/assets/images/cartoes/lapis.svg" alt="Imagem Alterar" />
                        Alterar Perfil
                    </button>
                </div>
            </div>

            <article id='selectbox' onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
                <div id='select'>
                    <img src="/assets/images/cartoes/IconMconta.png" alt="UserIcon" />
                    <h1>Minha Conta</h1>
                </div>
                <div className={`off ${show ? 'show' : ''}`}>
                    <Link to='/'>Perfil</Link>
                    <Link to='/'>Cartões</Link>
                    <Link to='/'>Endereços</Link>
                </div>
            </article>  

            <Link to='' className='bttt'>
                <img src="/assets/images/cartoes/Compras.png" alt="Imagem Sacola" />
                Meus Pedidos
            </Link>

            <Link to='' className='bttt'>
                <img src="/assets/images/cartoes/Sino.png" alt="Imagem Notificações" />
                Notificações
            </Link>
        </div>
    )
}