import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import { Link } from 'react-router-dom';
import CompCarrinho from '../../../components/site/itens-carrinho';

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Carrinho(){
    const [userInfo, setUserInfo] = useState('');
    const [carrinho, setCarrinho] = useState([]);
    const [prodPrice, setProdPrice] = useState(0);
    
    async function BuscarCarrinho(idprod) {
        try {
            const command = await axios.get(`http://localhost:5000/produto/carrinho/consulta/${idprod}`)
            const data = command.data;

            setCarrinho(data);
        }   catch (error) {
            console.error('Erro na chamada Axios:', error);
        }
    }

    async function getTotal() {
        try {
            const command = await axios.get(`http://localhost:5000/produto/carrinho/consulta/${userInfo.id}`)
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
    
            setProdPrice(sum);
        } catch (error) {
            console.error('Erro ao buscar carrinho:', error);
        }
    }

    const [verify, setVerify] = useState(false)

    useEffect(() => {
        setVerify(carrinho.length > 0);
      }, [carrinho, verify]);
    


    useEffect(() => {
        if (userInfo) {
            BuscarCarrinho(userInfo.id);
            getTotal();
        }
    }, [userInfo]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setUserInfo(storage('user-info'));
        }
    }, []);

    async function DeletarCarrinho(itemid) {
        try {
            const command = await axios.delete(`http://localhost:5000/produto/carrinho/deletar/${itemid}`);
            BuscarCarrinho(userInfo.id);
            getTotal();
            toast.success("Produto Removido do Carrinho!")
        }
        catch (err) {
            toast.success("Não foi possível remover o item do Carrinho!")
        }
    }

    return(
        <div className='pag-carrinho'>
            <CompCabecalho />

            <div className='topicos'>
                <h3 id='pr'>Produtos</h3>

                <h3>Preço Unitário</h3>

                <h3>Quantidade</h3>

                <h3>Preço Total</h3>

                <h3>Ações</h3>
            </div>

            <div className='itens'>
                {verify
                    ? carrinho.map(item => (
                        <CompCarrinho data={item} key={item.itemid} getTotal={getTotal} deletecar={DeletarCarrinho} />
                    ))
                    : <h1>Nenhum item no carrinho</h1>
                }
            </div>

            <div className='total'>

                <div className='right'>
                    <div id='right'>
                        <p>Total ({carrinho.length} Itens):</p>
                        <p id='grande'>R$ {prodPrice}</p>
                    </div>

                    {verify ? (
                        <Link to=''>Continuar</Link>
                    ) : (
                        <button id='bottom'>Continuar</button>
                    )}
                </div>
            </div>


            <CompRodape />
        </div>
    )
}