import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import Produto from '../../../components/site/compras-pagamento';

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Pagamento() {
    const navigate = useNavigate();

    const [carrinho, setCarrinho] = useState([]);
    const [userInfo, setUserInfo] = useState('')

    async function BuscarCarrinho() {
        try {
            let idprod = userInfo.id
            const command = await axios.get(`http://129.148.42.252:5019/produto/carrinho/consulta2/${idprod}`)
            const data = command.data;

            setCarrinho(data);
        }   catch (error) {
            console.error('Erro na chamada Axios:', error);
        }
    }


    useEffect(() => {
        if (storage('user-info')) {
            setUserInfo(storage('user-info'));
        }
        else {
            navigate('/')
        }
    }, [])


    useEffect(() => {
        if (userInfo) {
            BuscarCarrinho();
        }
    }, [userInfo]);

    useEffect(() => {
        const delay = 300; // Tempo de espera em milissegundos (1 segundo neste exemplo)

        const timeoutId = setTimeout(() => {
            if (carrinho.length >= 1) {
                
            } else {
                navigate('/')
            }
        }, delay);

        // Limpar o timeout se o componente for desmontado antes do término do tempo de espera
        return () => clearTimeout(timeoutId);
    }, [carrinho]);

    const [enderecoInfo, setEnderecoInfo] = useState([]);
    const [cartaoInfo, setCartaoInfo] = useState([]);

    async function ConsultarEndereco() {
        try {
            const id = userInfo.id
            const command = await axios.get(`http://129.148.42.252:5019/usuario/endereco/consultar/${id}`);    
            setEnderecoInfo(command.data);
        }
        catch (err) {
            console.log("Error ao Carregar os Endereços")
        }
    }

    async function ConsultarCartao() {
        try {
            const id = userInfo.id
            const command = await axios.get(`http://129.148.42.252:5019/usuario/cartao/consultar/${id}`);    
            setCartaoInfo(command.data);
        }
        catch (err) {
            console.log("Error ao Carregar os Cartões")
        }
    }

    const [enderecoSelecionado, setEnderecoSelecionado] = useState(null);
    const [verify1, setVerify1] = useState(null);
    const [cartaoSelecionado, setCartaoSelecionado] = useState(null);
    const [verify2, setVerify2] = useState(null);

    // No useEffect que consulta os endereços
    useEffect(() => {
        if (userInfo) {
            ConsultarEndereco();
        }
    }, [userInfo, enderecoSelecionado]);

    // No useEffect que consulta os cartões
    useEffect(() => {
        if (userInfo) {
            ConsultarCartao();
        }
    }, [userInfo, cartaoSelecionado]);

    const [shoff, setShoff] = useState(false);
    const [shoff2, setShoff2] = useState(false);  

    const [prodPrice, setProdPrice] = useState(0);

    async function getTotal() {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/produto/carrinho/consulta2/${userInfo.id}`)
            const data = command.data;
            let sum = 0;

            for (let item of data) {
                try {
                    const command = await axios.get(`http://129.148.42.252:5019/produto/${item.prodid}`);
                    const produto = command.data;
                    sum += produto.Preço * item.quantd;
                } catch (error) {
                    console.error('Erro na chamada Axios:', error);
                }
            }
    
            setProdPrice(sum);
        } catch (err) {
            console.error('Erro ao buscar carrinho:', err);
        }
    }

    useEffect(() => {
        if (userInfo) {
            getTotal();
        }
    }, [userInfo]);

    const { v4: uuidv4 } = require('uuid');
    const [idgerado, setIdGerado] = useState(null);

    async function AtualizarPedidoItem() {
        try {
            const command = await axios.get(`http://129.148.42.252:5019/produto/carrinho/consulta2/${userInfo.id}`);
            const data = command.data;
    
            for (let item of data) {
                try {
                    const url = `http://129.148.42.252:5019/produto/carrinho/atualizarpedido/${item.itemid}`
                    const command = await axios.put(url, { chave: idgerado });
                } catch (error) {
                    console.error('Erro na chamada Axios:', error);
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    async function EnviarPagamento() {
        try {
            // Obter a data atual
            const dataAtual = new Date();

            // Criar uma nova data com os mesmos componentes, mas sem a parte da hora
            const dataFormatada = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate());

            // Converter a nova data para uma string no formato AAAA-MM-DD
            const dataFormatadaString = dataFormatada.toISOString().split('T')[0];

            setIdGerado(uuidv4());

            let enderecoid = enderecoSelecionado.Id;

            let cartaoid = cartaoSelecionado.Id;

            let infos = {
                pedido: idgerado,
                endereco: enderecoid,
                cartao: cartaoid,
                frmpagamento: 'Cartão de Crédito',
                parcelas: parcelamento,
                dtpedido: dataFormatadaString,
                situacao: 'Pagamento Efetuado'
            };
            const command = await axios.post(`http://129.148.42.252:5019/usuario/compra/pagamento/${userInfo.id}`, infos);
            AtualizarPedidoItem();

            const delay = 500; // Tempo de espera em milissegundos (1 segundo neste exemplo)

            const timeoutId = setTimeout(() => {
                navigate(`/pagamento/pedido/${idgerado}`)
            }, delay);
            
        } catch (error) {
            if (error = "Cannot read properties of null (reading 'Id')") {
                toast.error("Um Endereço e um Cartão devem ser selecionados!");
            }
            toast.error(error.message);
        }
    }

    const [parcelamento, setParcelamento] = useState(1);
    return(
        <div className='pag-pagamento'>
            <CompCabecalho />
            <div className='conteiner'>
                <div className='left_pag'>
                    <div id='container1'>
                        <div className='endereco'>
                            <h3><b>1. Endereço</b></h3>

                            <div id='texto'>
                            {enderecoSelecionado ? (
                                <>
                                    <p>{enderecoSelecionado.Nome}</p>
                                    <p>{enderecoSelecionado.Rua}, {enderecoSelecionado.NRua}</p>
                                    <p>{enderecoSelecionado.Bairro}</p>
                                    <p>{enderecoSelecionado.Cidade}, {enderecoSelecionado.Estado} {enderecoSelecionado.CEP}</p>
                                </>
                            ) : (
                                <p>Nenhum endereço selecionado.</p>
                            )}
                            </div>
                            <button id='botao' onClick={() => setShoff(!shoff)}>Alterar</button>
                        </div>
                        <div className={`render ${shoff ? 'show' : ''}`}>
                        {enderecoInfo.length > 0 ? (
                        enderecoInfo.map(item =>
                        <div className='endblock' key={item.id} onClick={() => {setEnderecoSelecionado(item); setVerify1(item.Id);}}>
                            <input
                                type="radio"
                                name={`endereco-${item.Id}`} // Use um nome único com o ID do item
                                checked={verify1 === item.Id}
                                onChange={() => {setEnderecoSelecionado(item); setVerify1(item.Id);}}
                            />
                            <h1>{item.Nome}</h1>
                            <h3>{item.Regiao}</h3>
                            <h3>{item.CEP}</h3>
                            <h3>{item.Rua}, {item.NRua}</h3>
                            <h3>{item.Bairro}</h3>
                            <h3>{item.Cidade}, {item.Estado}</h3>
                        </div>
                        )
                        ) : (
                        <p>Ainda não há endereços disponíveis.</p>
                        )}
                        </div>
                    </div>

                    <div id='container1'>
                        <div className='metodo'>
                            <h3><b>2. Método de Pagamento</b></h3>
                            
                            {cartaoSelecionado ? (
                                <>
                                    <div className='cart'><img src='/assets/images/carrinho/cardzin.png' alt='' /></div>
                                    <p id='texto'>Cartão de crédito terminando em {cartaoSelecionado.Cartao}</p>
                                </>
                            ) : (
                                <p>Nenhum cartão selecionado.</p>
                            )}

                            <button id='botao' onClick={() => setShoff2(!shoff2)}>Alterar</button>
                        </div>
                        <div className={`render ${shoff2 ? 'show' : ''}`}>
                        {cartaoInfo.length > 0 ? (
                        cartaoInfo.map(item =>
                            <div className='cartaoblock' key={item.Id} onClick={() => {setCartaoSelecionado(item); setVerify2(item.Id);}}>
                                <input
                                    type="radio"
                                    name={`cartao-${item.id}`} // Use um nome único com o ID do item
                                    checked={verify2 === item.Id}
                                    onChange={() => {setCartaoSelecionado(item); setVerify2(item.Id);}}
                                />
                                <div>
                                    <img src="/assets/images/cartoes/913Au7zc4eL.svg" alt="" id='cartaoimg'/>
                                    <div id='textbox'>
                                        <h1>{item.Nome}</h1>
                                        <h3>Cartão de crédito terminando em {item.Cartao}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                        ) : (
                        <p>Ainda não há cartões disponíveis.</p>
                        )}
                        </div>
                    </div>

                    <h3 id='h3'><b>3. Revisar Itens</b></h3>

                    <div className='Produtos'>
                        {carrinho.map(item => (
                            <Produto data={item} key={item.itemid}/>
                        ))}
                    </div>

                    <div className='finalizar'>
                        <h3><b>Total do Pedido: R$ {prodPrice+70}</b></h3>
                        <button id='finalizacao' onClick={EnviarPagamento}><b> Finalizar Pedido </b></button>

                        
                    </div>
                </div>
                <div className='right_pag'>
                    <div className='total'>
                        <div className='finalizar'>
                            <button id='finalizacao' onClick={EnviarPagamento}><b> Finalizar Pedido </b></button>
                        </div>

                        <div id='resumo'>
                            <h3><b>Resumo do Pedido</b></h3>
                            <div className='dinheiro'>
                                <p>Itens:</p>
                                <p>R$ {prodPrice}</p>
                            </div>
                            <div className='dinheiro'>
                                <p>Taxa de Transporte:</p>
                                <p>R$ 70,00</p>
                            </div>
                        </div>
                        <div className='select'>
                            <label>Parcelamento</label>
                            <select value={parcelamento} onChange={e => setParcelamento(e.target.value)}>
                                <option value="1">1x</option>
                                <option value="2">2x</option>
                                <option value="3">3x</option>
                                <option value="4">4x</option>
                                <option value="5">5x</option>
                                <option value="6">6x</option>
                                <option value="7">7x</option>
                                <option value="8">8x</option>
                                <option value="9">9x</option>
                                <option value="10">10x</option>
                                <option value="11">11x</option>
                                <option value="12">12x</option>
                            </select>
                        </div>
                        <div id='total'>
                            <h4>Valor Parcela: R$ {(parseFloat(prodPrice/parcelamento)+70).toFixed(2)}</h4>
                            <h3><b>Total do Pedido: R$ {prodPrice+70}</b></h3>
                        </div>
                    </div>
                </div>
            </div>
            <CompRodape />
        </div>

    )
};