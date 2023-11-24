import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export default function Produto({data}) {
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
        <div className='produto-compraspag'>
            <img src={'http://129.148.42.252:5019/'+prodinfo.Capa} alt='' />
            <div className='prod'>
                <p>{prodinfo.Nome}</p>

                <p>R$ {prodinfo.Preço}</p>
            </div>
        </div>
    )
}