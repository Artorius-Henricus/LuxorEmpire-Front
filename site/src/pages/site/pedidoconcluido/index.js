import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import { Link, useNavigate, useParams } from 'react-router-dom';
import storage from "local-storage"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PaginaPedidoConcluido() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState('')

    const [enderecoInfo, setEnderecoInfo] = useState('');
    const [cartaoInfo, setCartaoInfo] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setUserInfo(storage('user-info'));
        }
    }, [])


    const [pedidoInfo, setPedidoInfo] = useState([])

    async function PedidoInfos() {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/usuario/compra/consulta/${id}`);
            const data = command.data
            setPedidoInfo(data);
        }
        catch (error) {
            console.log(error.message)
        }
    }

    async function ConsultarEndereco() {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/usuario/endereco/consultar2/${pedidoInfo.IDENDR}`);
            const data = command.data;
            setEnderecoInfo(data);
        } catch (err) {
            console.log("Error ao Carregar os Endereços");
        }
    }
    
    async function ConsultarCartao() {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/usuario/cartao/consultar2/${pedidoInfo.IDCART}`);
            const data = command.data;
            setCartaoInfo(data);
        } catch (err) {
            console.log("Error ao Carregar os Cartões");
        }
    }

    const [prodPrice, setProdPrice] = useState(0);
    const [qtditens, setQtdItns] = useState(0);

    async function getTotal() {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/produto/carrinho/consulta3/${id}`)
            const data = command.data;
            let sum = 0;
            let sum2 = 0;

            for (let item of data) {
                try {
                    const command = await axios.get(`http://129.148.42.252:5019/produto/${item.prodid}`);
                    const produto = command.data;
                    sum += produto.Preço * item.quantd;
                    sum2 += item.quantd;
                } catch (error) {
                    console.error('Erro na chamada Axios:', error);
                }
            }
            
            setQtdItns(sum2);
            setProdPrice(sum);
        } catch (error) {
            console.error('Erro ao buscar carrinho:', error);
        }
    }

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
        if (userInfo) {
            PedidoInfos();
            getTotal();
        }
    }, [userInfo]);
    
    useEffect(() => {
        if (userInfo && pedidoInfo.IDENDR) {
            ConsultarEndereco();
        }
    }, [userInfo, pedidoInfo.IDENDR]);
    
    useEffect(() => {
        if (userInfo && pedidoInfo.IDCART) {
            ConsultarCartao();
        }
    }, [userInfo, pedidoInfo.IDCART]);

    return (
        <div className="pagina-pedido-concluido">
            <CompCabecalho />
                <h1>Compra Realizada!</h1>
                <img src="/assets/images/produtos/ProdutoConc.svg" alt="" />
                <h1 id='h1Baixo'>Código do Pedido:<br/> <b>{id}</b></h1>

                <article className='pedido-infos'>
                    <h2>Informações do Pedido:</h2>

                    <article >
                        <section>
                            <div>
                                <h3>Pedido Realizado Em:</h3>
                                <p>{formatarData(pedidoInfo.DTPED)}</p>
                            </div>
                            <div>
                                <h3>Enviar Para:</h3>
                                <p>{enderecoInfo ? enderecoInfo.Bairro : "Carregando Endereço..."}</p>
                            </div>
                            <div>
                                <h3>Status do Pedido:</h3>
                                <p>{pedidoInfo.SITUACAO}</p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Forma de Pagamento:</h3>
                                <p>{pedidoInfo.FRMPAG}</p>
                            </div>
                            <div>
                                <h3>Cartão Utilizado:</h3>
                                <p>{cartaoInfo ? "Cartão Terminado em "+cartaoInfo.Cartao : "Carregando Cartão..."}</p>
                            </div>
                            <div>
                                <h3>Quantidade de Itens:</h3>
                                <p>{qtditens} Itens</p>
                            </div>
                            <div>
                                <h3>Preço Total:</h3>
                                <p>R$ {prodPrice}</p>
                            </div>
                        </section>
                        <Link to='/pedidos'>Ver Tudo</Link>
                    </article>
                </article>
            <CompRodape />
        </div>
    )
}