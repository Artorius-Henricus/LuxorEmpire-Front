import './index.scss';
import CompCabecalho from '../../../components/site/cabecalho';
import CompRodape from '../../../components/site/rodape';
import CompUserMenu from '../../../components/site/usermenu';
import CompUserMenuResp from '../../../components/site/resp-usermenu';
import ItensNotificacoes from '../../../components/site/itens-notificacoes/item2';
import ItensNotificacoes1 from '../../../components/site/itens-notificacoes/item1';
import ItensNotificacoes2 from '../../../components/site/itens-notificacoes/item2';

export default function Notificações(){
    return(
        <div className='pag-notificacoes'>
            <CompCabecalho />
            <div className='corp'>
                <CompUserMenu />
                <CompUserMenuResp/>
                
                <div className='centro'>
                    <h1>Notificações</h1>

                    <div>
                        <ItensNotificacoes1 />
                        <ItensNotificacoes2 />
                        
                    </div>

                </div>
            </div>
            <CompRodape />
        </div>
    )
}