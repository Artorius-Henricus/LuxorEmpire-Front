import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import { Link } from 'react-router-dom';
import CompCarrinho from '../../../components/site/carrinho';


export default function Carrinho(){

    return(
        <div className='pag-carrinho'>
            <CompCabecalho />

            <div>
                <CompCarrinho />
            </div>


            <CompRodape />
        </div>
    )
}