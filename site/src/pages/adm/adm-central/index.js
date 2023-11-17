import './index.scss';
import CompMenuBar from '../../../components/adm/menubar';
import storage from "local-storage"

import { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AdmCentral() {
  const [adminInfos, setAdminInfos] = useState('')


  const navigate = useNavigate();
  useEffect(() => {
    if (!storage('admin-info')) {
        navigate('/adm')
    }
    else {
      setAdminInfos(storage('admin-info'));
    }
}, [])

  const datamensal = [
    [
      "Mês de Novembro",
      "Faturamento Mensal",
    ],
    [1, 72.385],
    [2, 54.917],
    [3, 31.246],
    [4, 88.572],
    [5, 45.689],
    [6, 67.823],
    [7, 92.471],
    [8, 17.594],
    [9, 76.348],
    [10, 29.815],
    [11, 50.736],
    [12, 82.497],
    [13, 38.124],
    [14, 63.209],
    [15, 95.678],
    [16, 12.547],
    [17, 71.834],
    [18, 41.563],
    [19, 99.287],
    [20, 23.976],
    [21, 58.402],
    [22, 84.729],
    [23, 19.653],
    [24, 78.951],
    [25, 35.872],
    [26, 66.104],
    [27, 93.216],
    [28, 14.379],
    [29, 87.506],
    [30, 49.028],
    ];
    
  const optionsmensal = {
    chart: {
      title: "Faturamento Mensal Luxor Empire"
    },
  };

  const dataidade = [
    ["Element", "Quantidade Vendida", { role: "style" }],
    ["Anel", 8.94, "#2f528f"], // RGB value
    ["Brinco", 10.49, "#3960a7"], // English color name
    ["Colar", 19.3, "#406dbb"],
    ["Pingente", 21.45, "color: #6d89cb"],
    ["Pulseira", 21.45, "color: #9eadd8"],
    ["Relógio", 21.45, "color: #c0c9e4"],
  ];

  const datatorta = [
    ["Gênero", "Acima dos 40 ANnos"],
    ["Homens", 53.2],
    ["Mulheres", 30],
  ];

  const optionstorta = {
    title: "",
  }; 

  const [pedidos, setPedidos] = useState([]);

  async function Buscarpedidos() {
    try {
      const command = await axios.get(`http://localhost:5000/usuario/pedidos`)
      setPedidos(command.data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (adminInfos){
      Buscarpedidos();
    }
  }, [adminInfos, Buscarpedidos])

    return(
        <div className="pagina-adm-central">
            <CompMenuBar />
            <button onClick={Buscarpedidos}>CLICK</button>
            <article className='corp'>
              <h1>Central</h1>

              <div className='right'>
                  <div>
                      <div className='graficosdiv'>
                          <Chart
                          chartType="Line"
                          width="594px"
                          height="358px"
                          data={datamensal}
                          options={optionsmensal}/>
                      </div>
                      <div className='graficosdiv'>
                        <h1 className='title'>Produtos Mais Vendidos</h1>
                        <Chart chartType="ColumnChart" width="643px" height="388px" data={dataidade} />
                      </div>
                      <div className='graficosdiv'>
                        <h1 className='title'>Quantidade de Usuários</h1>
                        <Chart
                          chartType="PieChart"
                          data={datatorta}
                          options={optionstorta}
                          width={"381px"}
                          height={"380px"}
                        />
                    </div>
                  </div>
                  <div>
                      <div className='graficosdiv'>
                        <h1 className='title'>Transações Recentes</h1>

                        <div className='genereta'>
                        {pedidos.length > 0 ? (
                        pedidos.map(item =>
                            <h1>haha</h1>
                        )
                        ) : (
                        <p style={{alignSelf: "Center"}}>Ainda não há transações disponíveis.</p>
                        )}
                        </div>
                      </div>
                  </div>
              </div>
            </article>            
        </div>
    )
}