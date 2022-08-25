import React from 'react';
import Chart from 'react-apexcharts';

const AuthMenuChart = ({ data }) => {
  const pending = data.filter((item) => item.status === 'pendiente');
  const approved = data.filter((item) => item.status === 'aprobada');
  const rejected = data.filter((item) => item.status === 'rechazada');

  const series = [
    {
      name: 'Pendientes',
      data: [pending.length],
      color: "#fdbc3a"
    },
    {
      name: 'Aprobadas',
      data: [approved.length],
      color: "#26e7a6"
    },
    {
      name: 'Rechazadas',
      data: [rejected.length],
      color: "#ff6178"
    },
  ];

  const options = {
    chart: {
      id: 'simple-bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "40%",
      },
      tooltip: {
        followCursor:true,
      }
    },
    xaxis: {
      categories: ['Pendientes', 'Autorizadas', 'Rechazadas'],
    },
    yaxis: {
      labels:{
        formatter:(val) =>{
          return `${val}`
        }
      },
    },
    title: {
      text: "Transacciones Empresa",
      style:{
        fontSize: 12,
      }
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#fff']
    },
  };

  return (
    <div className='donut'>
      <div className=' flex justify-center mt-6' >
        <Chart options={options} series={series} type='bar' width='650' height='300'/>
      </div>
    </div>
  );
};

export default AuthMenuChart;
