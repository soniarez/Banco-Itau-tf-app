import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {onSnapshot, collection, db} from '../firebase/init'; 

const AuthMenu = () => {
  const [data, setData] = useState([]);

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
      field: 'origen',
      headerName: 'Cuenta Origen',
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
    onSnapshot(collection(db, "transaction"), (snapshot) => {
      const dataFromFirestore = snapshot.docs.map((doc) => {
        //console.log(doc.data())
        return doc.data();
      })
      setData(dataFromFirestore);
    })

  }, [])

  //console.log(data, "data")


  return (
    <div>
      <h2>Autorizar Transacciones Multiempresa</h2>
      <div style={{ height: 350, width: '65%' }} >
        <DataGrid
          columns={columns}
          rows={data}
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
