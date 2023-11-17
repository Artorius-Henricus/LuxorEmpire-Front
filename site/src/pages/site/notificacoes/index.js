import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import CompUserMenu from '../../../components/site/usermenu';
import CompUserMenuResp from '../../../components/site/resp-usermenu';
import ItensNotificacoes1 from '../../../components/site/itens-notificacoes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import storage from "local-storage"

export default function Notificações(){
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setUserInfo(storage('user-info'));
        }
    }, [])

    const [notificacao, setNotificacao] = useState([])
    async function BuscarNotificacoes() {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/usuario/pedidos/notificacao/${userInfo.id}`);
            setNotificacao(command.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (userInfo) {
            BuscarNotificacoes();
        }
    }, [userInfo])

    async function Limpar() {
        try {
            for (let item of notificacao) {
                const command = await axios.delete(`http://129.148.42.252:5019/usuario/pedidos/notificacao/${item.id_notificacao}`);
            }
            await BuscarNotificacoes();
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='pag-notificacoes'>
            <CompCabecalho />
            <div className='corp'>
                <CompUserMenu />
                <CompUserMenuResp/>
                
                <div className='centro'>
                    <h1>Notificações</h1>

                   <div className='bloco'> 
                        <div>
                            {notificacao.length > 0 ? (
                            notificacao.map(item =>
                                <ItensNotificacoes1 notificacao={item.ds_notificacao} pedido={item.id_pedido}/>
                            )
                            ) : (
                            <p>Nenhuma Notificação por Aqui.</p>
                            )}
                        </div>

                        <button id='apagar' onClick={Limpar}>Apagar</button>
                    </div>
                </div>
            </div>
            <CompRodape />
        </div>
    )
}