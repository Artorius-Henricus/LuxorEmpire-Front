import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import CompUserMenu from '../../../components/site/usermenu';

import { Link, useNavigate } from 'react-router-dom';
import storage from "local-storage"
import { useState, useEffect } from 'react';
import CompUserMenuResp from '../../../components/site/resp-usermenu';
import axios from 'axios';

export default function PaginaPedidos() {
    const navigate = useNavigate();
    const [infoUser, setInfoUser] = useState('');

    function formatarData(dataOriginal) {
        // Converter a string para um objeto Date
        var dataObj = new Date(dataOriginal);
    
        // Obter os componentes da data
        var dia = dataObj.getUTCDate();
        var mes = dataObj.getUTCMonth() + 1; // Mês é baseado em zero
        var ano = dataObj.getUTCFullYear();
    
        // Formatar a data no formato desejado (DD-MM-AAAA)
        var dataFormatada = dia + "-" + mes + "-" + ano;
    
        return dataFormatada;
    };

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setInfoUser(storage('user-info'));
        }
    }, [])

    const [pedidoMap, setPedidoMap] = useState([])

    async function PedidoInfos() {
        try {
            const command = await axios.get(`http://localhost:5000/usuario/compra/consulta2/${infoUser.id}`);
            const data = command.data
            for (let i = 0; i < data.length; i++) {
                data[i].IDENDR = await ConsultarEndereco(data[i].IDENDR);
            }

            for (let i = 0; i < data.length; i++) {
                data[i].IDCART = await getTotal(data[i].IDPED);
            }
            setPedidoMap(data);
        }
        catch (error) {
            console.log(error.message)
        }
    }

    async function ConsultarEndereco(idped) {
        try {
            const command = await axios.get(`http://localhost:5000/usuario/endereco/consultar2/${idped}`);
            const data = command.data.Bairro;
            return data;
        } catch (err) {
            console.log("Error ao Carregar os Endereços");
        }
    }

    async function getTotal(idped) {
        try {
            const command = await axios.get(`http://localhost:5000/produto/carrinho/consulta3/${idped}`)
            const data = command.data;
            let sum = 0;

            for (let item of data) {
                try {
                    const command = await axios.get(`http://localhost:5000/produto/${item.prodid}`);
                    const produto = command.data;
                    sum += produto.Preço * item.quantd;
                } catch (error) {
                    console.error('Erro na chamada Axios:', error);
                }
            }
            return sum;
        } catch (error) {
            console.error('Erro ao buscar carrinho:', error);
        }
    }

    useEffect(() => {
        if (infoUser) {
            PedidoInfos();
        }
    }, [infoUser]);

    return(
        <div className='pagina-pedidos'>
            <CompCabecalho />
            <CompUserMenuResp />
                <article className='corp'>
                    <CompUserMenu />

                    <section>
                        <h1>Meus Pedidos</h1>

                        {pedidoMap.length > 0 ? (
                        pedidoMap.map(item =>
                            <article className='pedidosbox'>
                            <img src="" alt="Imagem" />

                            <div>
                                <h2>Pedidos Realizado:</h2>
                                <p>{formatarData(item.DTPED)}</p>
                            </div>

                            <div>
                                <h2>Enviar Para:</h2>
                                <p>{item.IDENDR}</p>
                            </div>

                            <div>
                                <h2>Total:</h2>
                                <p>R$ {item.IDCART}</p>
                            </div>

                            <div>
                                <h2>Status:</h2>
                                <p>{item.SITUACAO}</p>
                            </div>

                            <div>
                                <h2 id='nped'>Pedido N°: <br/> {item.IDPED}</h2>
                                <Link to={`/pedido/${item.IDPED}`}>Detalhes do Pedido</Link>
                            </div>
                        </article>
                        )
                        ) : (
                        <p id='indisp'>Ainda não há Pedidos.</p>
                        )}
                    </section>
                </article>
            <CompRodape />
        </div>
    )
}