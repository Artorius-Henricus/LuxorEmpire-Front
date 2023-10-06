import './index.scss';

import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';

import { Link } from 'react-router-dom';

export default function PaginaLanding() {

    return(
        <div className='pagina-landing'>
            <CompCabecalho />

            <section className='banner1'>
                <img src="/assets/images/landingpage/GarotaJoias.svg" alt="" />
                <div>
                    <h1>Simples, Belo <span>e com classe</span></h1>
                    <h5>Surpreenda sua parceira<br/>com as melhores joias</h5>
                </div>
            </section>

            <section className='brincos'>
                <img src="assets/images/landingpage/Brincos1.svg" alt="" />
                <div>
                    <h3>Brincos</h3>
                    <h2>Elegante e discreto. Conheça os nossos brincos e a nossa seleção de diamantes e outras joias preciosas.</h2>
                    <Link to='/'>Descubra Mais</Link>
                </div>
            </section>

            <section className='pingentes'>
                <div>
                    <h3>Pingentes</h3>
                    <h2>Para todos os dias e ocasiões. Os nossos pingentes contém detalhes que fazem qualquer mulher uma verdadeira dama.</h2>
                    <Link to='/'>Descubra Mais</Link>
                </div>
                <img src="assets/images/landingpage/Pingente1.svg" alt="" />
            </section>

            <section className='select'>
                <div>
                    <hr/>
                    <h1 id='titleselect'>DESIGN SOFISTICADO E DELICADO</h1>
                    <hr/>
                </div>

                <div id='selectbt'>
                    <Link to='/'>
                        <img src="/assets/images/landingpage/Pulseira1.svg" alt="" />
                        <h1>Pulseiras</h1>
                    </Link>
                    <Link to='/'>
                        <img src="/assets/images/landingpage/Anéis1.svg" alt="" />
                        <h1>Anéis</h1>
                    </Link>
                    <Link to='/'>
                        <img src="/assets/images/landingpage/RelógioPulso1.svg" alt="" />
                        <h1>Relógios</h1>
                    </Link>
                </div>
            </section>

            <Link to='' id='bannerrdp'></Link>
            <CompRodape />
        </div>
    )
}