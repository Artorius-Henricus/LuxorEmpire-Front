import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import { Link } from 'react-router-dom';
import CompCarrinho from '../../../components/site/itens-carrinho';

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Carrinho(){
    const [userInfo, setUserInfo] = useState('');
    const [carrinho, setCarrinho] = useState([]);
    const [geral, setGeral] = useState('');
    const [prodPrice, setProdPrice] = useState(0);
    
    async function BuscarCarrinho(idprod) {
        const command = await axios.get(`http://localhost:5000/produto/carrinho/consulta/${idprod}`)
        const data = command.data;

        setCarrinho(data);
    }

    useEffect(() => {
        if (userInfo) {
            BuscarCarrinho(userInfo.id);
        }
    }, [userInfo]);



    async function BuscarInfosProd(id) {
        const command = await axios.get(`http://localhost:5000/produto/${id}`);
        const produto = command.data;
        setGeral(produto);
    }

    const getTotal = async () => {
        let sum = 0;
    
        for (let item of carrinho) {
          BuscarInfosProd(item.prodid);
          sum += geral.Preço * item.quantd;
        }
    
        setProdPrice(sum);
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setUserInfo(storage('user-info'));
        }
    }, []);

    return(
        <div className='pag-carrinho'>
            <CompCabecalho />
            <button onClick={getTotal}>Clickaaaa</button>

            <div className='topicos'>
                <h3 id='pr'>Produtos</h3>

                <h3>Preço Unitário</h3>

                <h3>Quantidade</h3>

                <h3>Preço Total</h3>

                <h3>Ações</h3>
            </div>

            <div className='itens'>
                {carrinho.map(item =>
                    <CompCarrinho data={item} key={item.itemid} getTotal={getTotal}/>
                )}
            </div>

            <div className='total'>
                <div className='left'>
                    <input type="checkbox" className='img'/>

                    <p id='grande'>Selecionar Tudo</p>
                </div>

                <div className='right'>
                    <div id='right'>
                        <p>Total ({carrinho.length} Itens):</p>
                        <p id='grande'>R$ {prodPrice}</p>
                    </div>

                    <button id='bottom'>Continuar</button>
                </div>
            </div>


            <CompRodape />
        </div>
    )
}