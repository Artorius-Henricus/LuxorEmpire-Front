import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import {Link} from 'react-router-dom'

import storage from "local-storage"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function CadastrarEndereco() {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState('');

    const [pais, setPais] = useState('');
    const [nome, setNome] = useState('');
    const [nResidencia, setNResidencia] = useState('');
    const [usrendereco, setUsrEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    async function BuscarCep(e) {
        try {
            const command = await axios.get(`https://viacep.com.br/ws/${e}/json/`);
            const data = command.data;

            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
        }
        catch (err) { 
            console.log("Deu Error")
        }
    }

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/')
        }
        else {
            let data = storage('user-info');
            setUserInfo(data);
        }
    }, [])

    async function CadastrarEndereco() {
        try {
            let endereco = {
                regiao: pais, 
                nome: nome,  
                cep: cep, 
                endereco: usrendereco, 
                residencia: nResidencia, 
                bairro: bairro, 
                cidade: cidade, 
                estado: estado
            }
    
            const url = `http://localhost:5000/usuario/endereco/cadastrar/${userInfo.id}`
            const command = await axios.post(url, endereco)

            toast.success("Endereço Cadastrado com Sucesso!")
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    return(
        <div className='pagina-cadastrar-endereco'>
            <CompCabecalho />
            <div className='corp'>
                <ToastContainer />
                <article className='inputs'>
                    <h1>Adicionar um novo endereço</h1>

                    <div>
                        <label>País/Região</label>
                        <select value={pais} onChange={e => setPais(e.target.value)}>
                            <option value=''>Selecione a Região</option>
                            <option value="Brasil">Brasil</option>
                        </select>
                    </div>

                    <div>
                        <label>Nome</label>
                        <input type='text' value={nome} onChange={e => setNome(e.target.value )}/>
                    </div>

                    <div>
                        <label>Rua</label>
                        <input type='text' value={usrendereco} onChange={e => setUsrEndereco(e.target.value )}/>
                    </div>

                    <div>
                        <label>Número da Residência</label>
                        <input type='text' value={nResidencia} onChange={e => setNResidencia(e.target.value )}/>
                    </div>

                    <div>
                        <label>Cep</label>
                        <input type='text' value={cep} onChange={e => {setCep(e.target.value); BuscarCep(e.target.value);}}/>
                    </div>

                    <div>
                        <label>Bairro</label>
                        <input type='text' placeholder={bairro ? bairro : 'Insira o CEP acima para preencher o bairro'} className='unaltera' readOnly/>
                    </div>
                    
                    <div>
                        <label>Cidade</label>
                        <input type='text' placeholder={cidade ? cidade : 'Insira o CEP acima para preencher a cidade'} className='unaltera' readOnly/>
                    </div>

                    <div>
                        <label>Estado</label>
                        <input type='text' placeholder={estado ? estado : 'Insira o CEP acima para preencher o estado'} className='unaltera' readOnly/>
                    </div>
                    
                    <div className='buttons'>
                        <button onClick={CadastrarEndereco}>Salvar Endereço</button>
                        <Link to='/enderecos' id='btreturn'>Retornar</Link>
                    </div>
                </article>
            </div>
            <CompRodape />
        </div>
    )
}