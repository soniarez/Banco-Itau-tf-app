import React, { useState, useEffect } from 'react';
import { onSnapshot, collection, db, updateDoc, doc } from '../firebase/init';
import { DataGrid } from '@mui/x-data-grid';

const DashboardMulti = () => {
  const [movementsData, setMovementsData] = useState([]);

  const columns = [
    {
      field: 'date',
      headerName: 'Fecha y Hora',
      width: 150,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'codemov',
      headerName: 'Codigo Movimiento',
      width: 200,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'description',
      headerName: 'Descripcion',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'branch',
      headerName: 'Sucursal',
      width: 130,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'payment',
      headerName: 'Abono',
      width: 170,
      headerAlign: 'center',
      headerClassName: 'itau-app',
    },
    {
      field: 'charge',
      headerName: 'Cargo',
      width: 100,
      headerAlign: 'center',
      headerClassName: 'itau-app',
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
      <div style={{ height: 450, width: '73%' }}>
        <DataGrid
          rowHeight={25}
          columns={columns}
          rows={movementsData}
          pageSize={20}
          sx={{
            boxShadow: 2,
            fontSize: 12,
            border: 2,
            m: 2,
            borderColor: '#ffb64c',
            '& .MuiDataGrid-cell:hover': {
              color: '#ffb64c',
            },
            '& .itau-app-USD': {
              bgcolor: '#B4B4B4',
            },
          }}
          getRowClassName={(params) => `itau-app-${params.row.amount}`}
        />
      </div>
    </div>
  );
};

export default DashboardMulti;
