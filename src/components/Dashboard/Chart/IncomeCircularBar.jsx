
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const IncomeCircularBar = () => {
    const [chartData] = useState({
        type: 'doughnut',
        labels: ['Telegram', 'Autotrender', 'Advance'],
        datasets: [
            {
                data: [200, 70, 70, 200],
                spacing:-25,
                borderRadius: {
                    outerStart: 50,
                    innerStart: 50,
                    // innerEnd : 50,
                    // outerEnd: 50
                },
                // borderWidth: 10,
                backgroundColor: [
                    "#0065FF",
                    "#FF8F6B",
                    "#FFD66B",
                    "#CACACA"
                
                ],
                
            }]
    });

    const [lightOptions] = useState({
        cutout: 100,
        plugins: {
            legend: {
                    position: 'bottom'  
            },
        }
    });

    return (
        <div className="card flex justify-content-center" style={{height: 100}}>
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%', height: 200 }} borderRadius={0} />
        </div>
    )
}

export default IncomeCircularBar;
                 