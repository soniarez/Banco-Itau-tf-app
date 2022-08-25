import React from 'react';
import Chart from 'react-apexcharts';

const AuthMenuChart = ({ data }) => {
  const pending = data.filter((item) => item.status === 'pendiente');
  const approved = data.filter((item) => item.status === 'aprobada');
  const rejected = data.filter((item) => item.status === 'rechazada');

  const series = [
    {
      name: 'Height in feet',
      data: [pending.length, approved.length, rejected.length],
    },
  ];

  const options = {
    chart: {
      id: 'simple-bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ['Pendientes', 'Autorizadas', 'Rechazadas'],
    },
  };

  return (
    <div className='donut'>
      <div className=' flex align-top justify-center h-auto w-auto'>
        <Chart options={options} series={series} type='bar' width='380' />
      </div>
    </div>
  );
};

export default AuthMenuChart;
