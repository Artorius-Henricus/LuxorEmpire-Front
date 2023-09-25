import './index.scss';
import CompMenuBar from '../../../components/adm/menubar';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function AdmCentral() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      // Certifique-se de que o gráfico anterior seja destruído antes de criar um novo
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Homens', 'Mulheres', 'Outros'],
          datasets: [
            {
              label: 'Novos Usuários',
              data: [12, 19, 3],
              backgroundColor: ['rgb(0, 140, 255)', 'rgb(228, 120, 255)', 'rgb(199, 199, 199)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }, []);

    return(
        <div className="pagina-adm-central">
            <CompMenuBar />

            <canvas ref={chartRef} width="400" height="200"></canvas>
        </div>
    )
}