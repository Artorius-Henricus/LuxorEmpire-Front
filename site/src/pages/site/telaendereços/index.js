import './index.scss';
import CompUserMenuResp from '../../../components/site/resp-usermenu'
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import CompUserMenu from '../../../components/site/usermenu';
import {Link} from 'react-router-dom'

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function PaginaCartoes() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState('');
    const [enderecoInfo, setEnderecoInfo] = useState([]);

    async function ConsultarEndereco() {
        try {
            const id = userInfo.id
            const command = await axios.get(`http://localhost:5000/usuario/endereco/consultar/${id}`);    
            setEnderecoInfo(command.data);
        }
        catch (err) {
            console.log("Error ao Carregar os Endereços")
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
          ConsultarEndereco();
        }
      }, [userInfo, ConsultarEndereco]);

    async function DeletarEndereço(idcrt) {
        try {
            const command = await axios.delete(`http://localhost:5000/usuario/endereco/deletar/${idcrt}`);
            ConsultarEndereco();
            toast.success("Endereço Removido com Sucesso!")
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <div className='pagina-enderecos'>
            <CompCabecalho />
            <div className='corp'>
                <CompUserMenu />
                <CompUserMenuResp/>
                <article>
                    <section className='leftside'>
                        <h1>Seus Endereços</h1>
                        
                        {enderecoInfo.length > 0 ? (
                        enderecoInfo.map(item =>
                        <div className='endblock'>
                            <h1>{item.Nome}</h1>
                            <h3>{item.Regiao}</h3>
                            <h3>{item.CEP}</h3>
                            <h3>{item.Rua}, {item.NRua}</h3>
                            <h3>{item.Bairro}</h3>
                            <h3>{item.Cidade}, {item.Estado}</h3>
                            <button onClick={() => DeletarEndereço(item.Id)}><img src="/assets/images/cartoes/lixeira-de-reciclagem.svg" alt="IconDeletar" /></button>
                        </div>
                        )
                        ) : (
                        <p>Ainda não há endereços disponíveis.</p>
                        )}
                    </section>

                    <section className='rightside'>
                        <Link id='some' to='/enderecos/cadastro'>Adicionar Endereço</Link >

                        <div className='selecendblock'>
                            <h1>Arthur Silva Alves</h1>
                            <h3>Brasil</h3>
                            <h3>04840-650</h3>
                            <h3>Rua Pontes Gestal, 93</h3>
                            <h3>Conjunto Habitacional Brigadeiro Faria Lima</h3>
                            <h3>São Paulo, SP</h3>
                            <button>Editar</button>
                        </div>
                        <Link id='aparecer' to='/enderecos/cadastro'>Adicionar Endereço</Link >
                    </section>
                </article>
            </div>
            <CompRodape />
        </div>
    )
}