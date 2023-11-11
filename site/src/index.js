import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// Rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Importação de Páginas!
import PaginaLanding from './pages/site/landing';
import AdmCentral from './pages/adm/adm-central';
import AdmLogin from './pages/adm/adm-login';
import AdmPedidosConcluidos from './pages/adm/adm-pedidos-concluidos';
import AdmPedidosAndamento from './pages/adm/adm-pedidos-andamento';
import AdmCadastroProduto from './pages/adm/adm-cadastro-produto';
import PaginaTelaUsuario from './pages/site/telausuario';
import PaginaEnderecos from './pages/site/telaendereços';
import PaginaCartoes from './pages/site/telacartoes';
import CadastrarCartao from './pages/site/cadastrarcartao';
import CadastrarEndereco from './pages/site/cadastrarendereco';
import Pagamento from './pages/site/pagamento';
import Paginaproduto from './pages/site/tela-produto';
import Carrinho from './pages/site/carrinho';
import Paginamarket from './pages/site/market';
import PaginaPedidos from './pages/site/meuspedidos';
import PaginaPedidoConcluido from './pages/site/pedidoconcluido';
import PedidoProduto from './pages/site/pedidoproduto';
import CompUserMenuResp from './components/site/resp-usermenu';
import AdmListarProdutos from './pages/adm/adm-listar-produtos';
import AdmEditarProduto from './pages/adm/adm-editar-produtos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLanding />} />

        <Route path='/respuser' element={<CompUserMenuResp />} />

        {/* Páginas do ADMIN */}
        <Route path='/adm' element={<AdmLogin />} />
        <Route path='/adm/central' element={<AdmCentral />} />
        <Route path='/adm/pedidos-concluidos' element={<AdmPedidosConcluidos />} />
        <Route path='/adm/pedidos-andamento' element={<AdmPedidosAndamento />} />
        <Route path='/adm/produtos/cadastrar' element={<AdmCadastroProduto />} />
        <Route path='/adm/produtos/listar' element={<AdmListarProdutos />} />
        <Route path='/adm/produtos/editar/:id' element={<AdmEditarProduto />} />

        {/* Perfil do USUÁRIO */}
        <Route path='/perfil' element={<PaginaTelaUsuario />} />
        <Route path='/pedidos' element={<PaginaPedidos />} />
        <Route path='/enderecos' element={<PaginaEnderecos />} />
        <Route path='/cartoes' element={<PaginaCartoes />} />
        <Route path='/pedido/:produto' element={<PedidoProduto />} />
        <Route path='/enderecos/cadastro' element={<CadastrarEndereco />} />
        <Route path='/cartoes/cadastro' element={<CadastrarCartao />} />

        {/* Página do Mercado */}
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/pedido' element={<PaginaPedidoConcluido />} />
        <Route path='/produto/:id' element={<Paginaproduto />} />   
        <Route path='/market' element={<Paginamarket/>} />   
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
