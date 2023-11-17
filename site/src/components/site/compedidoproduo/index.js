import axios from 'axios';
import './index.scss';
import { useEffect, useState } from 'react';

export default function CompPedidoProduto({data, quantidade}) {
    const [prodinfo, setProdInfo] = useState('')

    async function BuscarInfos() {
        const command = await axios.get(`http://129.148.42.252:5019/produto/${data.prodid}`)
        const data2 = command.data;

        setProdInfo(data2);
    }

    useEffect(() => {
        BuscarInfos()
    }, []);

    return(
        <div className='comppedidoproduto'>
            <img src="" alt="" />
            <h1>{prodinfo.Nome}</h1>
            <h1>R$ {prodinfo.Preço}</h1>
            <h1>{quantidade}</h1>
        </div>
    )
}