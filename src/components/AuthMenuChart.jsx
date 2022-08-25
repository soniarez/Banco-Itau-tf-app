import React from 'react';
import Chart from 'react-apexcharts';

const AuthMenuChart = ({ data }) => {
  const pending = data.filter(item => item.status === 'pendiente');
  const approved = data.filter(item => item.status === 'aprobada');
  const rejected = data.filter(item => item.status === 'rechazada');

  const series = [
    {
      name: 'Pendientes',
      data: [pending.length],
      color: "#7cb0f7"
      
    },
    {
      name: 'Aprobadas',
      data: [approved.length],
      color: "#4caf50"
    },
    {
      name: 'Rechazadas',
      data: [rejected.length],
      color: "#ff5733"
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
      }
    },
    title: {
      text: "Transacciones Empresa",
      style:{
        fontSize: 12,
      }
    }
  };

  return (
    <div className="donut">
      <div className=" flex align-top justify-end ">
        <Chart options={options} series={series} type="bar" width="380" />
      </div>
    </div>
  );
};

export default AuthMenuChart;
