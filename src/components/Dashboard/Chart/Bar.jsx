
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const BarChartDemo = () => {
    const [basicData] = useState({
        labels: ['0', '1', '2', '3', '4'],
        datasets: [
            {
                label: '',
                backgroundColor: '#0CA750',
                barThickness: 15,
                xAxisId: 'none',
                data: [65, 59, 80, 81, 56]
            },
            
        ]
    });



    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: '',
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: '',
                        drawBorder: false,
                    }
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: '',
                        drawBorder: false,
                    }
                }
            }
        };

     

        return {
            basicOptions,
            
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div>
            
                <Chart type="bar" data={basicData} options={basicOptions} />
           
        </div>
    )
}

export default BarChartDemo;
                 