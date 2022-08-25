import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db } from '../firebase/init';
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';

const DashboardMulti = () => {
  const [movementsData, setMovementsData] = useState([]);
  const [companiesData, setCompaniesData] = useState([]);

  const columns = [
    {
      field: 'date',
      headerName: 'Fecha y Hora',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'Razon Social',
      headerName: 'Razon Social',
      width: 170,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'segment',
      headerName: 'Segmento',
      width: 140,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'account',
      headerName: 'Cuenta',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'codemov',
      headerName: 'Codigo Mov',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'description',
      headerName: 'Descripcion',
      width: 215,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'branch',
      headerName: 'Sucursal',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'center',
    },
    {
      field: 'payment',
      headerName: 'Abono',
      width: 140,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'charge',
      headerName: 'Cargo',
      width: 160,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
  ];

  //GETTING DATA FROM FIREBASE
  useEffect(() => {
    onSnapshot(collection(db, 'movements'), (snapshot) => {
      const dataFromFirestore = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        };
      });
      setMovementsData(dataFromFirestore);
    });
  }, []);

  useEffect(() => {
    onSnapshot(collection(db, 'companies'), (snapshot) => {
      const dataCompaniesFromFirestore = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        };
      });
      setCompaniesData(dataCompaniesFromFirestore);
    });
  }, []);

  return (
    <div>
      <h1 className='ml-2 text-sm font-medium mt-1' >Últimos Movimientos: </h1>
      <div style={{ height: 450, width: '98%' }}>
        <DataGrid
          rowHeight={25}
          columns={columns}
          rows={movementsData}
          getCellClassName={(params) => {
            if (params.field === 'payment') {
              return 'in';
            }
            if (params.field === 'charge') {
              return 'out';
            }
          }}
          pageSize={20}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          sx={{
            boxShadow: 0,
            border: 0,
            fontSize: 11,
            m: 2,
            borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
            '& .itau-app-USD': {
              bgcolor: '#B4B4B4',
            },
            '& .in': {
              color: '#93cf96',
            },
            '& .out': {
              color: '#f5554a',
            },
          }}
          getRowClassName={(params) => `itau-app-${params.row.amount}`}

        /> </div>
      </div>
  );
};


export default DashboardMulti;
