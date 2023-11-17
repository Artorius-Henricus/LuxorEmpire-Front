import './index.scss'
import CompCabecalho from '../../../components/site/cabecalho'
import CompRodape from '../../../components/site/rodape'

export default function PaginaInformaçãoes () {
    return(
        <div className='Pagina-informações'>
            <CompCabecalho />
            <div className='titulo'>
                <h1>Informações</h1>
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

                <div className='listas'>
                    <ul>
                        <li>Termos de uso</li>
                    </ul>
                   <p>Termos de Uso do E-Commerce Luxor Empire</p>
                   <p>Bem-vindo ao E-Commerce Luxor Empire! Antes de utilizar nossos serviços, por favor, leia atentamente os seguintes Termos de Uso. Ao acessar ou utilizar nosso site, você concorda em cumprir e estar vinculado a estes termos. Se você não concordar com algum aspecto destes termos, por favor, não utilize nossos serviços.</p>
                   <div className='termos'>
                        <p>1. **Cadastro e Conta do Usuário:**   </p>
                        <p>1.1. Você é responsável por manter a confidencialidade de sua conta e senha.</p>
                        <p>1.2. Informações fornecidas durante o cadastro devem ser precisas e atualizadas.</p>
                   </div>

                   <div className='termos'>
                        <p>2. **Condições Gerais:**</p>
                        <p>2.1. Ao realizar uma compra, você concorda em fornecer informações precisas e verdadeiras.</p>
                        <p>2.2. O E-Commerce Luxor Empire reserva-se o direito de recusar ou cancelar pedidos a seu critério exclusivo.</p>
                   </div>
          
                   <div className='termos'>
                        <p>3. **Privacidade:**</p>
                        <p>3.1. Seus dados pessoais são tratados de acordo com nossa Política de Privacidade.</p>
                        <p>3.2. Ao utilizar nossos serviços, você concorda com a coleta e uso de suas informações conforme descrito em nossa Política de Privacidade.</p>
                   </div>

                   <div className='termos'>
                        <p>4. **Pagamentos:**</p>
                        <p>4.1. O E-Commerce Luxor Empire utiliza métodos de pagamento seguros.</p>
                        <p>4.2. Ao realizar uma compra, você concorda com as condições de pagamento e preços apresentados.</p>
                   </div>

                   <div className='termos'>
                        <p>5. **Envio e Entrega:**</p>
                        <p>5.1. O prazo de entrega pode variar conforme sua localização e outras circunstâncias.</p>
                        <p>5.2. O E-Commerce Luxor Empire não é responsável por atrasos causados por eventos fora de nosso controle.</p>
                   </div>

                   <div className='termos'>
                        <p>6. **Devoluções e Trocas:**</p>
                        <p> 6.1. Consulte nossa Política de Devolução para obter informações sobre devoluções e trocas ao final da página.</p>
                   </div>

                   <div className='termos'>
                        <p>7. **Propriedade Intelectual:**</p>
                        <p> 7.1. Todo o conteúdo do E-Commerce Luxor Empire é protegido por direitos autorais e outras leis de propriedade intelectual.</p>
                   </div>

                   <div className='termos'>
                        <p>8. **Comunicações:**</p>
                        <p>8.1. Ao se cadastrar, você concorda em receber comunicações do E-Commerce Luxor Empire, incluindo newsletters e informações sobre promoções.</p>
                   </div>

                   <div className='termos'>
                        <p>9. **Responsabilidade:**</p>
                        <p>9.1. O E-Commerce Luxor Empire não se responsabiliza por danos diretos, indiretos, acidentais ou consequentes resultantes do uso de nossos serviços.</p>
                   </div>

                   <div className='termos'>
                        <p>10. **Alterações nos Termos de Uso:**</p>
                        <p> 10.1. Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento, notificando os usuários sobre as mudanças. </p>
                   </div>

                   <div className='termos'>
                        <p>11. **Encerramento de Conta:**</p>
                        <p>11.1. Reservamo-nos o direito de encerrar contas de usuários que violem estes Termos de Uso ou estejam envolvidos em atividades fraudulentas.</p>
                   </div>

                   <p>Ao utilizar o E-Commerce Luxor Empire, você concorda com estes Termos de Uso. Se tiver alguma dúvida, entre em contato conosco. Obrigado por escolher o E-Commerce Luxor Empire!</p>
                </div>

                <div className='devolução'>
                    <ul>
                        <li>Como trocar ou devolver um produto ?</li>
                    </ul>
                    <p>O prazo de devolução ou troca é de até 30 dias da data de recebimento em seu local de entrega </p>
                    <p>Para iniciar uma devolução entre em contato com nosso Atendimento ao Cliente </p>                
                    <b>CONDIÇÕES PARA TROCA</b>
                    <p>1. A primeira troca é gratuita!</p>
                    <p>2. A troca poderá ser realizada desde que seja pelo mesmo produto adquirido, alterando apenas o tamanho.</p>
                    <p>3. Não realizaremos a troca de produtos por outros modelos ou cores.</p>
                    <p>4. As trocas estão sujeitas à disponibilidade de estoque.</p>
                    <b>COMO DEVOLVER UM PRODUTO APÓS SOLICITAR A TROCA OU DEVOLUÇÃO</b>
                    <p>1. A devolução do produto para o centro de distribuição ocorrerá por meio de postagem nos Correios com o frete pago pela Luxor.</p>
                    <p>2. Após solicitar a troca ou devolução será enviado um e-mail com todas as orientações de postagem e código de postagem, que lhe dará o direito de postar o produto em qualquer agência dos Correios, sem custo algum.</p>
                    <p>3. O produto deverá ser apresentando devidamente embalado, de acordo com as regras dos Correios. O procedimento é simples e agiliza o processo de troca ou reembolso.</p>
                    <p>4. Lembramos que o envio do novo item ou a devolução do valor pago será realizada após retorno do produto ao nosso centro de distribuição e mediante análise dos produtos que será feita pelo nosso setor de qualidade.</p>           
                </div>
            </div>   
            <CompRodape />      
        </div>
    )
}