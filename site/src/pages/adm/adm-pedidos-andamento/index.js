import './index.scss';
import storage from "local-storage"
import CompMenuBar from '../../../components/adm/menubar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdmPedidosAndamento() {
    const [adminInfos, setAdminInfos] = useState('')

    const navigate = useNavigate();
    useEffect(() => {
        if (!storage('admin-info')) {
            navigate('/adm')
        }
        else {
        setAdminInfos(storage('admin-info'));
        }
    }, [])

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

    const [pedidos, setPedidos] = useState([]);
    async function BuscarPedidosAndamento() {
        try {
            const command = await axios.get("http://129.148.42.252:5019/admin/pedidos/andamento")
            setPedidos(command.data)

        } catch (error) {
            console.log(error)
        }
    }

    const [situacaoAtual, setSituacaoAtual] = useState("");

    async function AtualizarPedido(situacao, id, iduser) {
        try {
            const data = {
                code: situacao,
                user: iduser
            };
            const command = await axios.put(`http://129.148.42.252:5019/admin/pedidos/atualizar/${id}`, data)
            BuscarPedidosAndamento();

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (adminInfos){
          BuscarPedidosAndamento();
        }
      }, [adminInfos])
      
    return (
        <div className="adm-pagina-pedidos-andamento">
        <CompMenuBar />

        <section className='corp'>
            <h1>Pedidos Em Andamento</h1>

            <article id='tabela'>
                <h1>Pedidos</h1>
                <table>
                    <thead className='tablehead'>
                        <tr>
                            <th>Id</th>
                            <th>Forma de Pagamento</th>
                            <th>Parcelas</th>
                            <th>Usuário</th>
                            <th>Data Compra</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='tablebody'>
                    {pedidos.length > 0 ? (
                        pedidos.map(item =>
                        <tr>
                            <td>{item.IDPED}</td>
                            <td>{item.FRMPAG}</td>
                            <td>{item.PARCLS}</td>
                            <td>{item.IDUSER}</td>
                            <td>{formatarData(item.DTPED)}</td>
                            <td>{item.SITUACAO}</td>
                            <td>
                                <select value={situacaoAtual} onChange={e => setSituacaoAtual(e.target.value)}>
                                    <option value="Pagamento Efetuado">Pagamento Efetuado</option>
                                    <option value="Pedido Confirmado">Pedido Confirmado</option>
                                    <option value="Pedido a Caminho">Pedido a Caminho</option>
                                    <option value="Pedido Entregue">Pedido Entregue</option>
                                </select>
                            </td>
                            <td><button onClick={() => AtualizarPedido(situacaoAtual, item.IDPED, item.IDUSER)}>✓</button></td>
                        </tr> 
                        )
                        ) : (
                        <td colSpan={'8'}>Ainda não há transações disponíveis.</td>
                        )}           
                    </tbody>
                </table>
            </article>
        </section>
    </div>
    )
}