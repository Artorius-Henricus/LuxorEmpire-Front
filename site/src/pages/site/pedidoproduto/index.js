import './index.scss';
import { useState, useEffect } from 'react';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import { useNavigate, useParams } from 'react-router-dom';
import storage from "local-storage"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompPedidoProduto from '../../../components/site/compedidoproduo';

export default function PedidoProduto() {
    const navigate = useNavigate();
    const [payment, setPayment] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [shipped, setShipped] = useState(false);
    const [delivered, setDelivered] = useState(false);

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
            const command = await axios.get(`http://localhost:5000/usuario/compra/consulta/${id}`);
            const data = command.data
            if (data.SITUACAO == "Pagamento Efetuado") {
                setPayment(true)
            }
            else if (data.SITUACAO == "Pedido Confirmado") {
                setPayment(true)
                setConfirmed(true)
            }
            else if (data.SITUACAO == "Pedido a Caminho") {
                setPayment(true)
                setConfirmed(true)
                setShipped(true)
            }
            else if (data.SITUACAO == "Pedido Entregue") {
                setPayment(true)
                setConfirmed(true)
                setShipped(true);
                setDelivered(true)
            }
            else {
                setPayment(true)
                setConfirmed(false)
                setShipped(false);
                setDelivered(false)
            }
            setPedidoInfo(data);
        }
        catch (error) {
            console.log(error.message)
        }
    }

    async function ConsultarEndereco() {
        try {
            const command = await axios.get(`http://localhost:5000/usuario/endereco/consultar2/${pedidoInfo.IDENDR}`);
            const data = command.data;
            setEnderecoInfo(data);
        } catch (err) {
            console.log("Error ao Carregar os Endereços");
        }
    }
    
    async function ConsultarCartao() {
        try {
            const command = await axios.get(`http://localhost:5000/usuario/cartao/consultar2/${pedidoInfo.IDCART}`);
            const data = command.data;
            setCartaoInfo(data);
        } catch (err) {
            console.log("Error ao Carregar os Cartões");
        }
    }

    const [prodPrice, setProdPrice] = useState(0);
    const [qtditens, setQtdItns] = useState(0);
    const [carrinho, setCarrinho] = useState([]);

    async function getTotal() {
        try {
            const command = await axios.get(`http://localhost:5000/produto/carrinho/consulta3/${id}`)
            const data = command.data;
            let sum = 0;
            let sum2 = 0;

            for (let item of data) {
                try {
                    const command = await axios.get(`http://localhost:5000/produto/${item.prodid}`);
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

    const [capaProd, setCapaProd] = useState('')
    const [nomeProd, setNomeProd] = useState('')
    const [preçoProd, setPreçoProd] = useState('')

    async function ConsultarCarrinho() {
        try {
            const command = await axios.get(`http://localhost:5000/produto/carrinho/consulta3/${id}`);
            const data = command.data;
            setCarrinho(data)
        } catch (err) {
            console.log("Error ao carregar os Itens do Carrinho");
        }
    }

    useEffect(() => {
        if (userInfo) {
            PedidoInfos();
            getTotal();
            ConsultarCarrinho();
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


    return(
        <div className="pagina-produto-pedido">
            <ToastContainer />
            <CompCabecalho />
                <article className='corpo'>
                    <h1><b onClick={() => navigate('/pedidos')} style={{cursor: 'pointer'}}>Seus Pedidos</b> &gt; {id}</h1>
                    
                    <div className='groupinfo'>
                        <h1 id='infoglobal'>Informações Gerais</h1>

                        <div>
                            <section className='prodinfo'>
                                <div className='infostext'>
                                    <section>
                                        <div>
                                            <h3>Pedido Realizado Em:</h3>
                                            <p>{formatarData(pedidoInfo.DTPED)}</p>
                                        </div>
                                        <div>
                                            <h3>Forma de Pagamento:</h3>
                                            <p>{pedidoInfo.FRMPAG}</p>
                                        </div>
                                        <div>
                                            <h3>Cartão Utilizado:</h3>
                                            <p>{cartaoInfo ? "Cartão Terminado em "+cartaoInfo.Cartao : "Carregando Cartão..."}</p>
                                        </div>
                                    </section>
                                    
                                    <section>
                                        <div>
                                            <h3>Enviar Para:</h3>
                                            <p>{enderecoInfo ? enderecoInfo.Bairro : "Carregando Endereço..."}</p>
                                        </div>
                                        <div>
                                            <h3>Quantidade:</h3>
                                            <p>{qtditens} Unidades</p>
                                        </div>
                                        <div>
                                            <h3>Preço Total:</h3>
                                            <p>R$ {prodPrice}</p>
                                        </div>
                                        <div>
                                            <h3>Status do Pedido:</h3>
                                            <p>{pedidoInfo.SITUACAO}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>

                            <section className='infoentrega'>
                                    <div>
                                        <img src="/assets/images/produtos/cartao-de-credito1.svg" alt="Cartão de Crédito" />
                                        {payment &&
                                            
                                            <img src="/assets/images/produtos/confirm.svg" alt="" id='img_confirm'/>
                                        }
                                        {!payment &&
                                            <span className={`ball ${payment ? 'green' : 'gray'}`}></span>
                                        }
                                        <h1>Pagamento Efetuado</h1>
                                    </div>
                                    
                                    <span className={`line ${confirmed ? 'green' : 'gray'}`}></span>

                                    <div>
                                        <img src="/assets/images/produtos/compras.svg" alt="Sacola" />
                                        {confirmed &&
                                            
                                            <img src="/assets/images/produtos/confirm.svg" alt="" id='img_confirm'/>
                                        }
                                        {!confirmed &&
                                            <span className={`ball ${confirmed ? 'green' : 'gray'}`}></span>
                                        }
                                        <h1>Pedido Confirmado</h1>
                                    </div>

                                    <span className={`line ${shipped ? 'green' : 'gray'}`}></span>

                                    <div>
                                        <img src="/assets/images/produtos/caixa.svg" alt="Caixa" />
                                        {shipped &&
                                            
                                            <img src="/assets/images/produtos/confirm.svg" alt="" id='img_confirm'/>
                                        }
                                        {!shipped &&
                                            <span className={`ball ${shipped ? 'green' : 'gray'}`}></span>
                                        }
                                        <h1>Pedido Enviado</h1>
                                    </div>

                                    <span className={`line ${delivered ? 'green' : 'gray'}`}></span>
                                    
                                    <div>
                                        <img src="/assets/images/produtos/casa.svg" alt="Casa" />
                                        {delivered &&
                                            
                                            <img src="/assets/images/produtos/confirm.svg" alt="" id='img_confirm'/>
                                        }
                                        {!delivered &&
                                            <span className={`ball ${delivered ? 'green' : 'gray'}`}></span>
                                        }
                                        <h1>Pedido Entregue</h1>
                                    </div>
                            </section>

                            <section className='rendercar'>
                                <h1 id='title'>Seus Itens</h1>
                                <div className='block'>
                                    <h1>Capa</h1>
                                    <h1>Nome</h1>
                                    <h1>Preço</h1>
                                    <h1>Quantidade</h1>
                                </div>
                                    {carrinho.length > 0 ? (
                                    carrinho.map(item => 
                                        <CompPedidoProduto data={item} quantidade={item.quantd}/>
                                    )
                                    ) : (
                                    <p id='indisp'>Carregando seus Itens.</p>
                                    )}
                            </section>
                        </div>
                    </div>
                </article>
            <CompRodape />
        </div>
    )
}