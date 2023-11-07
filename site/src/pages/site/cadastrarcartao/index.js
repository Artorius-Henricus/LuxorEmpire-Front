import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import {Link} from 'react-router-dom'

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';

export default function CadastrarCartao() {
    const [userId, setUserId] = useState('')

    const [numeroCartao, setNumeroCartao] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [dataCartao, setDataCartao] = useState('');
    const [codigoCartao, setCodigoCartao] = useState('');

    const onlyNumbers = (str) => str.replace(/[^0-9]/g, "")

    async function CadastrarCartao() {
        try{
            let cartao = {
                numero: numeroCartao,
                nome: nomeCartao,
                data: dataCartao,
                cvv: codigoCartao
            };
            const url = `http://localhost:5000/usuario/cartao/cadastrar/${userId}`;
            const command = await axios.post(url, cartao)
            toast.success("Cartão Cadastrado com Sucesso!")
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            setUserId(storage('user-info').id)
        }
    }, [])

    return(
        <div className='pagina-cadastrar-cartao'>
            <CompCabecalho />
            <div className='corp'>
                <article className='inputs'>
                    <h1>Adicionar um novo cartão</h1>

                    <div>
                        <label>Número do Cartão</label>
                        <InputMask mask='9999-9999-9999-9999' value={numeroCartao} onChange={e => setNumeroCartao(onlyNumbers(e.target.value))}/>
                    </div>

                    <div>
                        <label>Nome do Cartão</label>
                        <input type='text' value={nomeCartao} onChange={e => setNomeCartao(e.target.value)}/>
                    </div>

                    <section className='doubleinpt'>
                        <div>
                            <label for="data">Data de Expiração</label>
                            <InputMask mask='9999-99' placeholder="YYYY-MM" value={dataCartao} onChange={e => setDataCartao(e.target.value)}/>
                        </div>

                        <div>
                            <label>Código de Segurança (CVV)</label>
                            <input type='number' value={codigoCartao} onChange={e => setCodigoCartao(e.target.value)}/>
                        </div>
                    </section>
                    <div className='buttons'>
                        <button>Salvar Cartao</button>
                        <Link to='/cartoes' id='btreturn' onClick={CadastrarCartao}>Retornar</Link>
                    </div>  
                </article>
            </div>
            <CompRodape />
        </div>
    )
}