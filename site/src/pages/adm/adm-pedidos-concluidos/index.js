import './index.scss';

import CompMenuBar from '../../../components/adm/menubar';
import storage from "local-storage"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdmPedidosConcluidos() {
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
    async function BuscarPedidosConcluidos() {
        try {
            const command = await axios.get("http://localhost:5000/admin/pedidos/concluido")
            setPedidos(command.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (adminInfos){
          BuscarPedidosConcluidos();
        }
      }, [adminInfos])

    return(
    <div className="adm-pagina-pedidos-concluidos">
        <CompMenuBar />

        <section className='corp'>
            <h1>Pedidos Concluídos</h1>

            <article id='tabela'>
                <h1>Pedidos Concluídos</h1>
                <table>
                    <thead className='tablehead'>
                        <tr>
                            <th>Id</th>
                            <th>Forma de Pagamento</th>
                            <th>Parcelas</th>
                            <th>Usuário</th>
                            <th>Data Compra</th>
                            <th>Status</th>
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