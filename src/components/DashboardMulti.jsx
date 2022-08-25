import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db, updateDoc, doc } from '../firebase/init';
import { DataGrid, GridToolbar,
  esES } from '@mui/x-data-grid';
import { grid } from '@mui/system';
  

const DashboardMulti = () => {
  const [movementsData, setMovementsData] = useState([]);

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
      field: 'codemov',
      headerName: 'Codigo Movimiento',
      width: 150,
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
      width: 105,
      headerAlign: 'center',
      headerClassName: 'itau-app',
      align: 'left',
    },
    {
      field: 'charge',
      headerName: 'Cargo',
      width: 115,
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

  return (
    <div>
      <h2>Autorizar Transacciones Multiempresa: </h2>

    
      <div style={{ height: 450, width: '970px'   }}>

        <DataGrid
          rowHeight={25}
          columns={columns}
          rows={movementsData}
          pageSize={20}
          rowsPerPageOptions={[20]}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          sx={{
            boxShadow: 2,
            fontSize: 11,
            m: 2,
            '& .itau-app-USD': {
              bgcolor: '#B4B4B4',
            },
          }}
          getRowClassName={(params) => `itau-app-${params.row.amount}`}
        /> </div>
      </div>
      
  );
};

export default DashboardMulti;
