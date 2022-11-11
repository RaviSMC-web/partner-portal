
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const IncomeBar = () => {
    // const [basicData] = useState({
    //     labels: ['0', '1', '2', '3', '4'],
    //     datasets: [
    //         {
    //             label: '',
    //             backgroundColor: '#0CA750',
    //             data: [65, 59, 80, 81, 56]
    //         },
    //         {
    //             label: 'My Second dataset',
    //             backgroundColor: '#FFA726',
    //             data: [28, 48, 40, 19, 86, 27, 90]
    //         }
    //     ]
    // });

    const [stackedData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep','Oct','Nov', 'Dec'],
        datasets: [{
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: '#FF5630',
            barPercentage: 0.5,
            pointStyle: 'circle',
            barThickness: 20,
            data: [
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            barThickness: 20,
            backgroundColor: '#ffffff',
            data: [
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10
            ]
        }, {
            type: 'bar',
            label: 'Dataset 3',
            barThickness: 20,
            backgroundColor: '#6B83FF',
            data: [
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90
            ]
        }]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

       

        let stackedOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: ''
                    },
                    grid: {
                        color: ''
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: ''
                    },
                    grid: {
                        color: ''
                    }
                }
            }
        };

       

        return {
            stackedOptions,
            basicOptions,
           
        }
    }

    const { stackedOptions } = getLightTheme();

    return (
        <div>
           
            

            <div className="card">
                <Chart type="bar" data={stackedData} options={stackedOptions} />
            </div>
        </div>
    )
}

export default IncomeBar;
                 