import './index.scss'
import CompCabecalho from '../../../components/site/cabecalho'
import CompRodape from '../../../components/site/rodape'

export default function PaginaInformaçãoes () {
    return(
        <div className='Pagina-informações'>
            <CompCabecalho />
            <div className='titulo'>
                <h1>Infomarções</h1>
            </div>
            <div className='content'>
                 <div className='entregas'>
                    <ul>
                        <li>Formas de entrega</li>
                    </ul>
                    <p>Luxor Empire transporta seus produtos através de uma empresa de transportes terceirizada para garantir a segurança o produto </p>
                </div>
        
                 <div className='entregas'>
                    <ul>
                        <li>Políticas de segurança e privacidade</li>
                    </ul>

                    <div className='politicas'>     
                        <p>Nós, da Luxor Empire, queremos oferecer a você a melhor experiência de consumo possível. </p>
                        <p>Quando você acessa nosso site nós coletamos os dados pessoais que você compartilha conosco para tornar nossos produtos e serviços, além da sua experiência, ainda melhores.</p>
                        <p>O objetivo desta Política de Privacidade é fornecer a você uma visão clara de como usamos os dados pessoais que você nos fornece quando visita um de nossos ambientes nos dedicando sempre em protegê-los, proteger sua privacidade, seus direitos e as opções que você tem para controlar seus dados pessoais e, até mesmo, os terceiros com quem compartilhamos eles.</p>
                        <p>Usamos os dados pessoais para muitas finalidades, como descrito de forma mais detalhada abaixo:</p>
                    </div>
                   
                </div>

                <div className='dados'>
                    <h1>O QUE SÃO, COMO E QUAIS DADOS PESSOAIS COLETAMOS DE VOCÊ:</h1>
                    <p>São considerados dados pessoais aqueles que comumente fornecemos em um cadastro, como nome, RG, CPF, gênero, data e local de nascimento, filiação, telefone, endereço residencial, cartão ou dados bancários.</p>

                    <b>Nós os coletamos nas seguintes situações:</b>
                    <p>Criação de conta</p>
                    <p>Cookies</p>
                    <p>E nas informações de sua localização</p>

                    <b>Para que os usamos ?</b>
                    <p>Criação de Acesso/Login aos dispositivos</p>
                    <p>Melhorar nossos produtos e serviços</p>
                    <p>Processar seu pedido</p>
                    <p>Realizar verificações</p>
                    <p>No Atendimento ao Consumidor</p>
                    <p>No desenvolvimento de produtos e serviços</p>
                </div>
            </div>         
        </div>
    )
}