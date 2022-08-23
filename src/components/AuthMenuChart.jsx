import React from 'react';
import Chart from 'react-apexcharts';

const AuthMenuChart = ({ data }) => {
  const pending = data.filter((item) => item.status === 'pendiente');
  const approved = data.filter((item) => item.status === 'aprobada');
  const rejected = data.filter((item) => item.status === 'rechazada');

  const options = {
    labels: ['Pendientes', 'Autorizadas', 'Rechazadas'],
    title: { text: 'Resumen de Autorizaciones' },
    // tooltip: {
    //   y: {
    //     formatter: (val) => {
    //       return `${val}`;
    //     },
    //   },
    // },
    colors: ['#ffb64c', '#6fbf73', '#f5554a'],
    dataLabels: {
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
    },
  };
  const series = [pending.length, approved.length, rejected.length];

  return (
    <div className='donut'>
      <Chart options={options} series={series} type='pie' width='380' />
    </div>
  );
};

export default AuthMenuChart;
