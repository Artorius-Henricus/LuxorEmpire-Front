import './index.scss';

import { Link } from 'react-router-dom'

export default function CompRodape() {
    
    return(
        <div className="comp-rodape">
            <div>
                <h1>Institucional</h1>

                <Link to=''>Formas de Entrega</Link>
                <Link to=''>Políticas de Segurança</Link>
                <Link to=''>Políticas de Privacidade</Link>
                <Link to=''>Termos de Uso</Link>
            </div>

            <div>
                <h1>Atendimento</h1>

                <Link to=''>Trocas e Devoluções</Link>
                <Link to=''>Central de Atendimento</Link>
            </div>

            <div>
                <h1>Perfil</h1>

                <Link to=''>Meus Pedidos</Link>
                <Link to=''>Notificações</Link>
                <Link to=''>Meu Carrinho</Link>
            </div>

            <div id='ltblock'>
                <div id='logordp'>
                    <p>Pague com:</p>
                    <img src="/assets/images/rodape/visa-logo___7f6d122a30542f251800b6bf167aecab.svg" alt="" />
                    <img src="/assets/images/rodape/elo-logo___a31b446693be1290ec6aa177988cfd32.svg" alt="" />
                    <img src="/assets/images/rodape/hiper-logo___144db0dd05771ac93e145cbe34bc22f8.svg" alt="" />
                    <img src="/assets/images/rodape/pix-logo___a0a97d382ca5c9bb3b0efbb62c0d3b0f.svg" alt="" />
                </div>
                <img src="/assets/images/rodape/LogoResu.svg" alt="" />
            </div>
        </div>
    )
}