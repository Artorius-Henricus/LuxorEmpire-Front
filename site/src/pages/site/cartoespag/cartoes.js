import './cartoes.scss'
import { Link } from 'react-router-dom';


import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

export default function Cartoes(){

    return(

        <div id="principal">

            <CompCabecalho/>

            <div id='meio'>

                <div id='esquerda'>
                    <div id='User'>
                        <img id='UserImg' src='/assets/images/cartoes/monalisa.png' alt='UserImg'/>

                        <div id='UserTxT'> 
                            <h1>Username</h1>
                            <div id='altTXT'>
                                <img src='/assets/images/cartoes/lapis.png' alt='lapis'/>
                                <Link id='altPerf' to="">Alterar Perfil</Link>
                            </div>
                        
                        </div>

                    </div>

                    <div id='Mconta'>
                        <div id='Mcontapri'>
                            <img src='/assets/images/cartoes/iconMconta.png' alt='iconMconta'/>
                            <p>Minha Conta</p>

                        </div>

                    </div>

                    <div className='Mpedidos-not'></div>
                    <div className='Mpedidos-not'></div>
                </div>

                <div id='direita'>


                </div>

            </div>



            <CompRodape/>
        </div>


    )
    
}