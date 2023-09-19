import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// Rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Importação de Páginas!
import PaginaLanding from './pages/site/landing';
import AdmCentral from './pages/adm/adm-central';
import AdmLogin from './pages/adm/adm-login';
import Cartoes from './pages/site/cartoes/cartoes';
import AdmPedidosConcluidos from './pages/adm/adm-pedidos-concluidos';
import AdmPedidosAndamento from './pages/adm/adm-pedidos-andamentoi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLanding />} />
        <Route path='/adm/central' element={<AdmCentral />} />
        <Route path='/adm/pedidos-concluidos' element={<AdmPedidosConcluidos />} />
        <Route path='/adm/pedidos-andamento' element={<AdmPedidosAndamento />} />
        <Route path='/adm' element={<AdmLogin />} />
        <Route path='/cartoes' element={<Cartoes/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
