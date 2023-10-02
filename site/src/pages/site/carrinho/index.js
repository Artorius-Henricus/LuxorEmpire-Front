import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import { Link } from 'react-router-dom';
import CompCarrinho from '../../../components/site/itens-carrinho';


export default function Carrinho(){

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
                <CompCarrinho />
                {/* <CompCarrinho />
                <CompCarrinho />
                <CompCarrinho /> */}

            </div>

            <div className='total'>
                <div className='left'>
                    <div className='img'></div>

                    <p id='grande'>Selecionar Tudo</p>
                </div>

                <div className='right'>
                    <div id='right'>
                        <p>Total (0 Item):</p>
                        <p id='grande'>R$ 000,00</p>
                    </div>

                    <p id='bottom'>Continuar</p>
                </div>
            </div>


            <CompRodape />
        </div>
    )
}