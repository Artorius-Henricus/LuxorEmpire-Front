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
import CadastrarEndereco from './pages/site/cadastrarendereco';
import Paginaproduto from './pages/site/tela-produto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLanding />} />
        <Route path='/adm/central' element={<AdmCentral />} />
        <Route path='/adm/pedidos-concluidos' element={<AdmPedidosConcluidos />} />
        <Route path='/adm/pedidos-andamento' element={<AdmPedidosAndamento />} />
        <Route path='/adm/cadastrar-produto' element={<AdmCadastroProduto />} />
        <Route path='/adm' element={<AdmLogin />} />
        <Route path='/perfil' element={<PaginaTelaUsuario />} />
        <Route path='/enderecos' element={<PaginaEnderecos />} />
        <Route path='/cartoes' element={<PaginaCartoes />} />
        <Route path='/enderecos/cadastro' element={<CadastrarEndereco />} />
        <Route path='/produtos' element={<Paginaproduto />} />      
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
