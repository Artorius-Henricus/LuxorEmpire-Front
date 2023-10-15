import './index.scss'
import CompCabecalho from '../../../components/site/cabecalho'
import CompIndicacoes from '../../../components/site/indicacoes-produto';
export default function Paginamarket () {
    return(
        <div className='pagina-market'>
            <CompCabecalho></CompCabecalho>
            
            
            <div className='section-mid'>
                <CompIndicacoes/>
            
            </div>
        </div>
    )
}