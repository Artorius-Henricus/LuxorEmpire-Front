import './index.scss';
import CompMenuBar from '../../../components/adm/menubar';

import { useEffect } from 'react';
import { Chart } from "react-google-charts";

export default function AdmCentral() {
    const data = [
      ["Novos Usuários", "Quantidade"],
      ["Homens", 11],
      ["Mulheres", 10]
    ];
    
    const options = {
      title: "Novos Usuários",
    };

    return(
        <div className="pagina-adm-central">
            <CompMenuBar />

            
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
        </div>
    )
}