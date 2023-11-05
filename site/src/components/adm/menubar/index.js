import { useState } from 'react';
import './index.scss';

import {Link} from 'react-router-dom'

export default function CompMenuBar() {
    const [shoff, setShoff] = useState(false);
    const [shoff2, setShoff2] = useState(false);

    return (
        <div className="comp-menu-bar">
            <div id='adm-profile'>
                <img src="/assets/images/cabecalho/Usuario.svg" alt="" />
                <div>
                    <h1>Admin Name</h1>
                    <button>Editar Perfil</button>
                </div>
            </div>
            <img src="/assets/images/rodape/LogoResu.svg" alt="" id='logoadm'/>


            <Link to='/adm/central' className='btmn'>
                <img src="/assets/images/menubar/house-vector-icon.svg" alt="" />
                Central
            </Link>

            <button className='btsec' onMouseEnter={() => {setShoff(true)}} onMouseLeave={() => {setShoff(false)}}>
                <span>
                    <img src="/assets/images/menubar/2652218.svg" alt="" />
                    Pedidos
                </span>
                <div className={`off ${shoff ? 'show' : ''}`}>
                    <Link to='/adm/pedidos-concluidos' className='btextra'>Pedidos Concluídos</Link>
                    <Link to='/adm/pedidos-andamento' className='btextra'>Pedidos em Andamento</Link>
                </div>
            </button>

            <button className='btsec' onMouseEnter={() => {setShoff2(true)}} onMouseLeave={() => {setShoff2(false)}}>
                <span>
                    <img src="/assets/images/menubar/126391.svg" alt="" />
                    Ferramentas
                </span>
                <div className={`off ${shoff2 ? 'show' : ''}`}>
                    <Link to='/adm/produtos/cadastrar' className='btextra'>Cadastrar Produto</Link>
                    <Link to='/adm/produtos/listar' className='btextra'>Listar Produtos</Link>
                </div>
            </button>
        </div>
    )
}