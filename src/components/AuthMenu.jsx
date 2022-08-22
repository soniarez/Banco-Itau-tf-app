import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const AuthMenu = () => {
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      field: 'date',
      headerName: 'Fecha y Hora',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },
    {
      field: 'company',
      headerName: 'Empresa',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },
    {
      field: 'origin',
      headerName: 'Cta Origen',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },
    {
      field: 'solution',
      headerName: 'Solución',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },
    {
      field: 'amount',
      headerName: 'Monto',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },
    {
      field: 'details',
      headerName: 'Ver Detalles',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },
    {
      field: 'autorize',
      headerName: 'Autorizar',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },

    {
      field: 'reject',
      headerName: 'Rechazar',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'my-app',
    },
  ];

  useEffect(() => {
    const rows = [
      {
        id: 1,
        date: 'lunes',
        company: 'company1',
        origin: 1,
        solution: 'remuneracion',
        amount: 25,
        details: '',
        autorize: '',
        reject: '',
      },
      {
        id: 2,
        date: 'martes',
        company: 'company2',
        origin: 2,
        solution: 'prestamo',
        amount: 12,
        details: '',
        autorize: '',
        reject: '',
      },
      {
        id: 3,
        date: 'miercoles',
        company: 'company3',
        origin: 3,
        solution: 'remuneracion',
        amount: 40,
        details: '',
        autorize: '',
        reject: '',
      },
      {
        id: 4,
        date: 'jueves',
        company: 'company4',
        origin: 4,
        solution: 'recibos',
        amount: 18,
        details: '',
        autorize: '',
        reject: '',
      },
      {
        id: 5,
        date: 'viernes',
        company: 'company5',
        origin: 5,
        solution: 'prestamo',
        amount: 20,
        details: '',
        autorize: '',
        reject: '',
      },
    ];
    setTableData(rows);
  }, []);

  return (
    <div>
      <h2>Autorizar Transacciones Multiempresa</h2>
      <div style={{ height: 350, width: '65%' }} >
        <DataGrid
          columns={columns}
          rows={tableData}
          pageSize={5}
          sx={{
            boxShadow: 2,
            border: 2,
            m: 2,
            borderColor: '#ffb64c',
            '& .MuiDataGrid-cell:hover': {
              color: '#ffb64c',
            },
          }}
        />
      </div>
    </div>
  );
};

export default AuthMenu;
