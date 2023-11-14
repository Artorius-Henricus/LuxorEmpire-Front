import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';
import CompUserMenuResp from '../../../components/site/resp-usermenu';
import {Link} from 'react-router-dom';

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PaginaCartoes() {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState('');
    const [cartaoInfo, setCartaoInfo] = useState([]);

    async function ConsultarCartao() {
        try {
            const id = userInfo.id
            const command = await axios.get(`http://localhost:5000/usuario/cartao/consultar/${id}`);    
            setCartaoInfo(command.data);
        }
        catch (err) {
            console.log("Error ao Carregar os Cartões")
        }
    }

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setUserInfo(storage('user-info'));
        }
    }, [])

    useEffect(() => {
        if (userInfo) {
          ConsultarCartao();
        }
      }, [userInfo]);

    return(
        <div className='pagina-cartoes'>
            <CompCabecalho />
            <div className='corp'>
                <CompUserMenu />
                <CompUserMenuResp/>

                <div className='geral'>
                    
                    <section className='leftside'>
                        <h1>Seus Cartões</h1>

                        {cartaoInfo.length > 0 ? (
                        cartaoInfo.map(item =>
                            <div className='cartaoblock' key={item.Cartao}>
                            <div>
                                <img src="/assets/images/cartoes/913Au7zc4eL.svg" alt="" id='cartaoimg'/>
                                <div id='textbox'>
                                <h1>{item.Nome}</h1>
                                <h3>Cartão de crédito terminando em {item.Cartao}</h3>
                                </div>
                            </div>
                            <button><img src="/assets/images/cartoes/lixeira-de-reciclagem.svg" alt="IconDeletar" /></button>
                            </div>
                        )
                        ) : (
                        <p>Ainda não há cartões disponíveis.</p>
                        )}
                    </section>

                    <section className='rightside'>
                        <Link id='sume' to='/cartoes/cadastro'>Adicionar Cartão</Link>

                        <div className='cartaoselected'>
                            <img src="/assets/images/cartoes/913Au7zc4eL.svg" alt="" id='cartaoimg'/>
                            <div>
                                <h1>Itaucard Mastercard Default</h1>
                                <h3>Cartão de crédito terminando em •••• 0000</h3>
                                <button>Editar</button>
                            </div>
                        </div>
                        <Link id='resp' to='/cartoes/cadastro'>Adicionar Cartão</Link>
                    </section>
                </div>
            </div>
            <CompRodape />
        </div>
    )
}