import Chart from 'react-apexcharts';
import React from "react";
import { right } from '@popperjs/core';
import { flexbox, grid } from '@mui/system';
import { getRowIdFromRowModel } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';
import { FloodTwoTone } from '@mui/icons-material';

const HoldingDonut = () => {
    const options = {
        labels: ['Abono', 'Cargo'],
        title: { text: 'Rentabilidad Holding' },
        colors: ['#2ECC71', '#FF5733'],
        dataLabels: {
            style:{ 
                    position: 'bottom',
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