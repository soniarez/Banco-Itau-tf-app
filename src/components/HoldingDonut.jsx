import Chart from 'react-apexcharts';
import React from "react";

const HoldingDonut = () => {
    const options = {
        labels: ['Ganancia', 'Inversión'],
        title: { text: 'Rentabilidad Holding' },
        colors: ['#2ECC71', '#FF5733'],
        dataLabels: {
            style:{
                colors:['#003767']
            }
        },
    };
    const series = [132084000000, 93669193056];

    return (
        <>
            <h1>Rentabilidad Holding</h1>
            <div className='donut'>
                <Chart options={options} series={series} type='pie' width='380' />
            </div>
        </>
    )
}

export default HoldingDonut;